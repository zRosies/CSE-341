
const info= require("../controlers/lesson1");
const routes = require("express").Router();

routes.get('/',info.AnaRoute)
routes.get("/gustavo", info.gustavoRoute)


module.exports=routes;