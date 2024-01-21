const express = require('express');
const router = express.Router();
const postController = require('../controller/post');

router.get('/:postID', postController.getPostByID, async (req, res, next) => {
    console.log("res.params.postId", res.params.postId);
    const post = req.post;
    console.log(post);
    res.render('elements/post', { post });
    next();
});

module.exports = router;
