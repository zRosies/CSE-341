
const info= require("./controlers/lesson1");
const routes = require("express").Router();

routes.get('/',info.AnaRoute)
routes.get("/haha", info.gustavoRoute)
routes.get("/student", info.Student)


module.exports=routes;