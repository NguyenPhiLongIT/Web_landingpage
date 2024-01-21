const PostModel = require("../models/blog/post");

exports.getAllPost = async () => {
    return await PostModel.find();
};

exports.createPost = async (post) => {
    return await PostModel.create(post);
};

exports.getPostByID = async (id) => {
    return await PostModel.findById(id);
};

exports.updatePost = async (id, post) => {
    return await PostModel.update(id, post);
};

exports.deletePost = async (id) => {
    return await PostModel.delete(id);
};
