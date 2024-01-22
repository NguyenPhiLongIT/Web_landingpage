const express = require('express');
const router = express.Router();
const postController = require('../controller/post');
const postFormat = require('../services/post_format');

router.get('/', postController.getAllPosts, (req, res) => {

    const summaryPosts = req.posts.map(post => {
        return postFormat.clearTags(post.content[0]).slice(0, 200) + '...';
    });
    console.log("🚀 ~ router.get ~ sumaryPosts", summaryPosts)
    res.render('pages/blog', { posts: req.posts, summaryPosts: summaryPosts });
});

router.get('/:postID', postController.getPostByID, (req, res, next) => {
    const post = req.post;
    // const content = req.post.content;
    const content = postFormat.formatPostContent(post);
    // console.log("🚀 ~ router.get ~ content:", content)
    res.render('pages/post', { post, 'content': content });
    next();
});

module.exports = router;
