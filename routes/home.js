const express = require('express');
const path = require('path');
const router = express.Router();

router.get("/", (req, res) => {
    res.render('user/pages/home/home', { title: 'Home' });
});

module.exports = router;
