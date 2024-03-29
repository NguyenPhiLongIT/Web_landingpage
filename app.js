const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
// const ejs = require('ejs');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');

const app = express();
const port = process.env.PORT || 3000;

mongoose
	.connect("mongodb+srv://nguyenphilongit123:Long10092003@cluster0.pbxpwii.mongodb.net/blog")
	.then(() => {
		app.listen(port);
	})
	.catch((err) => {
		console.log(err);
	});

app.set("views", path.join(__dirname, 'views'));
app.set("view engine", 'ejs');
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'ckeditor5', 'build')));
app.use(fileUpload());

// Setup router
app.use('/', require('./routes/home'));
app.use('/blog', require('./routes/blog'));
app.use('/product', require('./routes/product'));
app.use('/admin', require('./routes/admin'));
