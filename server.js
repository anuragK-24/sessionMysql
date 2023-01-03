const express = require('express'); //importing top level fun of express

const app = express();  // this express func will create application byy using top level fun
const mysql2 = require("mysql2");

const db = mysql2.createConnection({
    host:'localhost',
    user : 'root',
    password:'123abc',
    database: 'DB',
    multipleStatements: true
});             

const PORT = 3000;

app.use(express.json()); // thsi fun is usedt to mount the specified middleware function
            // setting up middlewarefor our apps
            //b/w i/p and o/p 


//create connection 
db.connect((err)=> {
    if (err) {
        console.log(err)    
    }
    console.log("MySQL connected...");
});



app.post('/', (req, res) => {
  const { name, usn } = req.body;
  
  let sql1 = `INSERT INTO STUDENT VALUES ("${name}","${usn}")`;
  db.query(sql1,(err,result)=>{
    if (err) {
        console.log('hi')
    }
    console.log(`inserted `)
        res.send({
    name,
    usn,
  })
  res.sendFile(__dirname + '/file.html');
});
})
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/file.html');
});


  app.listen(PORT,() =>{
      console.log(`Server statrted at http://localhost:${PORT}`)
  })  
