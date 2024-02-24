const express = require('express');
const path = require('path');
const cors = require('cors');
// const ejs = require('ejs');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');


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

app.set("views", path.join(__dirname, 'views'));
app.set("view engine", 'ejs');
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'ckeditor5', 'build')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload());
app.use(bodyParser.json());

// Setup router
app.use('/', require('./routes/home'));
app.use('/blog', require('./routes/blog'));
app.use('/product', require('./routes/product'));
app.use('/upload', require('./routes/upload_file_demo'));
