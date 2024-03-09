const express = require('express');
const path = require('path');
const router = express.Router();

router.get("/", (req, res) => {
    const teasers = [
        {
            title: 'Trainings & workshops',
            description: 'We hold worldwide product and technology trainings on a variety of machine vision topics!',
            image: 'https://www.mvtec.com/fileadmin/_processed_/d/8/csm_business-executives-discussing-with-their-colleagues-on-whiteboa_5b6bee0c28.webp',
            redict_text: 'Discover more',
        },
        {
            title: 'Videos & tutorials',
            description: 'Find videos and tutorials about our products HALCON, MERLIC and the Deep Learning Tool.',
            image: 'https://www.mvtec.com/fileadmin/_processed_/d/8/csm_business-executives-discussing-with-their-colleagues-on-whiteboa_5b6bee0c28.webp',
            redict_text: 'Watch now',
        }
    ]
    res.render('home/pages/home', { title: 'Home', teasers: teasers });
});

module.exports = router;
