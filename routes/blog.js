const express = require('express');
const router = express.Router();
const postController = require('../controller/post');
const postFormat = require('../util/post_format');
const pathFile = require("../util/path");
const path = require('path');
const upload = require('../models/upload');

router.get('/', postController.getAllPosts, (req, res, next) => {
    res.render('pages/blog', { 'posts': req.posts });
});

router.get('/create', (req, res, next) => {
    console.log('Create');
    res.render('pages/create_post');
    next();
});

router.post('/store', (req, res, next) => {
    console.log('Request Body:', req.body);
    console.log('Request Body:', req.urlList);
    postController.createPost(req, res, next);
});

router.get('/create_success', (req, res, next) => {
    res.render('pages/create_success');
});

router.post('/upload/image', async (req, res, next) => {
    const { files } = req;

    if (!files || Object.keys(files).length === 0) {
        return res.status(400).json({ error: 'No files were uploaded.' });
    }

    const image = files.upload;

    // Use a unique filename, e.g., timestamp + originalname
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const fileName = 'image-' + uniqueSuffix + path.extname(image.name);

    // Move the file to public/images/upload
    const imagePath = path.join(pathFile.publicPath, 'image', 'upload', fileName);
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


router.get('/:slug', postController.getPostBySlug, postController.getAllPosts, (req, res, next) => {
    const post = req.post;
    const posts = req.posts;
    res.render('pages/post', { post, 'posts': posts });
});
module.exports = router;
