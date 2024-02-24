const upload = require("../models/upload");
const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/", (req, res, next) => {
    console.log("Upload");
    upload.downloadFile("1EabW-l-FOdi0y1U6OpMOyn-riNosEokO", path.join(__dirname, "..", "download.png"));
});

module.exports = router;
