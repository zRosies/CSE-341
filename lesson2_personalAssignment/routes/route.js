const express= require("express");

const contacts= require("../controllers/contacts");

const router= express.Router();

router.get("/", contacts.getData);

module.exports=router;
