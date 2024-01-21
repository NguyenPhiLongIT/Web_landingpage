const express = require('express');
const router = express.Router();
const postController = require('../controller/post');

router.get('/', postController.getAllPosts, (req, res) => {

    res.render('pages/blog', { posts: req.posts });
});

router.get('/:postID', postController.getPostByID, (req, res, next) => {
    const post = req.post;
    res.render('pages/post', { post });
    next();
});

module.exports = router;
