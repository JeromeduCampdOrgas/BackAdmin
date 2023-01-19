const express = require("express");
const router = express.Router();

const donCtrl = require("../controllers/donCtrl");

//router.post("/don", donCtrl);
router.post("/", donCtrl.createDon);
router.get("/:id", donCtrl.getOneDon);
module.exports = router;
