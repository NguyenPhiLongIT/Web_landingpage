const express = require('express');
const router = express.Router();
const postController = require('../controller/post');
const postFormat = require('../services/post_format');

router.get('/:postID', postController.getPostByID, async (req, res, next) => {
    console.log("res.params.postId", res.params.postId);
    const post = req.post;
    const content = postFormat.formatPostContent(post);
    res.render('elements/post', { post, 'content': content });
    console.log(content);
    next();
});

module.exports = router;
