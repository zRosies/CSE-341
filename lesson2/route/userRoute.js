
const express = require("express");

const controler = require("../controlers/userControl")

const router = express.Router();

router.get('/',controler.getData);

module.exports = router;