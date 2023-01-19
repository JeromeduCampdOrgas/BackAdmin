const express = require("express");
const router = express.Router();

const donCtrl = require("../controllers/donCtrl");

router.post("/", donCtrl.createDon);
router.get("/", donCtrl.getAllDons);
router.get("/:id", donCtrl.getOneDon);
router.put("/:id", donCtrl.modifyDon);
router.delete("/:id", donCtrl.deleteDon);
module.exports = router;
