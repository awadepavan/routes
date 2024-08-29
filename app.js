const http = require('http');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminroutes = require("./routs/admin");
const shoproutes = require("./routs/shop");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(adminroutes);

app.use(shoproutes);

app.use((req, res, next) => {
    res.status(404).send('<h1>Page  not found</h1>');
});

const server = http.createServer(app);

server.listen(8000, () => {
    console.log('Server is running on http://localhost:8000');
});
