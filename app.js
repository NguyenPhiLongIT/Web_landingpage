const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
// const ejs = require('ejs');
const mongoose = require('mongoose');

const postController = require('./controller/post');


const app = express();
const port = 3000;

mongoose
	.connect("mongodb+srv://nguyenphilongit123:Long10092003@cluster0.pbxpwii.mongodb.net/blog")
	.then(() => {
		app.listen(port);
	})
	.catch((err) => {
		console.log(err);
	});

app.get('/test/:postID', postController.getPostByID, async (req, res, next) => {
	const post = req.post;

});

app.set("views", path.join(__dirname, 'views'));
app.set("view engine", 'ejs');
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Setup router
app.use('/', require('./routes/home'));
app.use('/blog', require('./routes/blog'));
app.use('/product', require('./routes/product'));
// app.use('/admin', require('./routes/admin'));
