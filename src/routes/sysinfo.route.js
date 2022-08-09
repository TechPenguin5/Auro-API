const express = require("express");
const router = express.Router({ mergeParams: true });

const sysinfoController = require("../controllers/sysinfo.controller");

router.route("/").get(sysinfoController.get);

router.route("/dac").get(sysinfoController.getDac);

router.route("/myinfo").get(sysinfoController.getMyInfo);

router.route("/allinfo").get(sysinfoController.getAllInfo);

module.exports = router;
