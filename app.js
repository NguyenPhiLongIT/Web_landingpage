const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const ejs = require('ejs');
const mongoose = require('mongoose');

const app = express();
const port = 1009;

// mongoose
//     .connect('mongodb+srv://nguyenphilongit123:Long10092003@cluster0.pbxpwii.mongodb.net/LIPS')
//     .then(() => {
//         app.listen("Connected");
//     })
//     .catch((err) => {
//         console.log("ERROR");
//     });

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://nguyenphilongit123:Long10092003@cluster0.pbxpwii.mongodb.net/LIPS');
}

app.set("views", path.join(__dirname, 'views'));
app.set("view engine", 'ejs');
app.use(express.json());

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

// Setup router
app.use('/', require('./routes/home'));
app.use('/blog', require('./routes/blog'));

// app.post();

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
