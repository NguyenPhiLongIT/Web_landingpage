const express = require('express');
const router = express.Router();
const axios = require('axios');
const https = require('https');

router.get('/posts', async (req, res) => {

    const validateToken = req.headers.authorization;
    try {
        const response = await axios.get('https://algoritlab.lovestoblog.com/wp-json/wp/v2/posts', {
            httpsAgent: new https.Agent({
                rejectUnauthorized: false
            })
        }, {
            "headers": {
                'Authorization': validateToken
            }
        });
        res.send(response.data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
});


module.exports = router;
