
const gustavoInfo= require("../controlers/lesson1");
const routes = require("express").Router();

routes.get('/',gustavoInfo.testRoute)
routes.get('/Gustavo',gustavoInfo.gustavoRoute)

module.exports=routes;