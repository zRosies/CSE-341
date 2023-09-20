const express = require('express');

const app=express();

app.use('/', require("./lesson1/routes"))
const port= 8080;

app.listen(process.env.port || port);
console.log("Web Server is listening at port " +(process.env.port || port));