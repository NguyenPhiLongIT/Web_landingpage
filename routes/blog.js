const express = require('express');
const router = express.Router();
const postController = require('../controller/post');
const postFormat = require('../services/post_format');

router.get('/', postController.getAllPosts, (req, res, next) => {

    const summaryPosts = req.posts.map(post => {
        return postFormat.clearTags(post.content[0]).slice(0, 200) + '...';
    });
    res.req.posts = req.posts;
    res.render('pages/blog', { posts: req.posts, summaryPosts: summaryPosts });
    next();
});

router.get('/:postID', postController.getPostByID, postController.getAllPosts, (req, res, next) => {
    const post = req.post;
    const posts = req.posts;
    const content = postFormat.formatPostContent(post);
    res.render('pages/post', { post, 'content': content, 'posts': posts });
});

module.exports = router;
