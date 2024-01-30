const express = require('express');
const router = express.Router();
const postController = require('../controller/post');
const postFormat = require('../util/post_format');

router.get('/', postController.getAllPosts);

router.get('/create', (req, res, next) => {
    res.render('pages/create_post');
});

router.post('/store', (req, res, next) => {
    postController.createPost(req, res, next);
});

router.get('/create_success', (req, res, next) => {
    res.render('pages/create_success');
});

router.get('/:slug', postController.getPostBySlug, postController.getAllPosts, (req, res, next) => {
    const post = req.post;
    const posts = req.posts;
    const content = postFormat.formatPostContent(post);
    res.render('pages/post', { post, 'content': content, 'posts': posts });
});

module.exports = router;
