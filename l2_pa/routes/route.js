const express= require("express");

const contacts= require("../controllers/contactsData");

const router= express.Router();

router.use("/blog", require("./contacts"));

module.exports=router;
