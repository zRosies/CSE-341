
const gustavoInfo= require("../controlers/lesson1");
const routes = require("express").Router();

routes.get('/',gustavoInfo.gustavoRoute)
routes.get('/testing',gustavoInfo.testRoute)

module.exports=routes;