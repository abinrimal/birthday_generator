const express = require("express");
const { staffRegister, viewStaff } = require("../controller/staffController");
const router = express.Router()

router.post('/registerstaff',staffRegister)
router.get('/viewstaff', viewStaff)

module.exports = router

