const express = require('express');
const router = express.Router();
const path = require('path');

const adminController = require('../controller/admin');
const pathFile = require("../util/path");
const upload = require('../util/upload');
const postController = require('../controller/post');

router.get('/', adminController.admin)
router.get('/create', (req, res, next) => {
    try{
        res.render('admin/pages/create_post');
    } catch(error){
        console.log(error.message);
    }

});
router.post('/store', (req, res, next) => {
    console.log('Request Body:', req.body);
    console.log('Request Body:', req.urlList);
    postController.createPost(req, res, next);
});

router.get('/create-success', (req, res, next) => {
    res.render('admin/pages/create_success');
});

router.post('/upload/image', async (req, res, next) => {
    const { files } = req;

    if (!files || Object.keys(files).length === 0) {
        console.log('No files were uploaded.');
        return res.status(400).json({ error: 'No files were uploaded.' });
    }
    console.log('Files were uploaded.');

    const image = files.upload;

    // Use a unique filename, e.g., timestamp + originalname
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const fileName = 'image-' + uniqueSuffix + path.extname(image.name);

    // Move the file to public/images/upload
    const imagePath = path.join(pathFile.publicPath, 'image', 'upload', fileName);
    console.log("🚀 ~ admin_route.post ~ imagePath:", imagePath)
    await image.mv(imagePath, (err) => {
        if (err) {
            return res.status(500).send(err);
        }
    }
    );

    url = await upload.uploadFile('image', imagePath, fileName, 'image/png');
    var url_list = [];
    if (req.body.url) {
        url_list = req.body.url;
    }
    else {
        req.body.url = [];
    }
    url_list.push(url);
    req.body.urlList = url_list;
    res.json({ url: "/image/upload/" + fileName });
    next();
});

module.exports = router;