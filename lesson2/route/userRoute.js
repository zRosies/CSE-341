
const express = require("express");

const controler = require("../controlers/userControl")

const router = express.Router();

router.get('/professional',controler.getData);

module.exports = router;