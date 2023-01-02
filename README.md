# sessionMysql

POST is a request method supported by HTTP that sends data to the server.
In express, we can use the app.post() method to accept a POST request.

The post data is provided to us on the request here object "req" inside the callback function of the app.post() method.

```
const bodyContent = req.body;
```

for headerContent

```
const headerContent = req.headers;
```

### Following commands to clone this repo, setup your own environment.

```
git clone https://github.com/anuragK-24/sessionMysql.git
```

Install Node.js in your system,

**Node.js** is an open-source and cross-platform runtime environment built on Chrome’s V8 JavaScript engine for executing JavaScript code outside of a browser.

For initializing repo

```
  npm init -y
```

install express

```
npm install express
```

**Express.js** is a small framework that works on top of Node.js web server functionality to simplify its APIs and add helpful new features. <br>

- It makes it easier to organize your application’s functionality with middleware and routing. <br>
- It adds helpful utilities to Node.js HTTP objects and facilitates the rendering of dynamic HTTP objects.<br>
  [More about EXPRESS](https://www.geeksforgeeks.org/express-js/)

install package for mysql

```
npm install mysql2
```

### To start the server

```
node app.js
```

Here you go...

Thanks for reading this.
Hope it'll help you guys.
Don't forget to Star this repo, top right side on this [page](https://github.com/anuragK-24/sessionMysql)
