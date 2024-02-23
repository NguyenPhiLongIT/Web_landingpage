const express = require("express");
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');
const auth = require('./middleware/auth');

const admin_route = express();
const adminController = require('./controller/admin');

admin_route.set("views", path.join(__dirname, 'views'));
admin_route.set("view engine", 'ejs');
admin_route.use(express.json());

admin_route.use(bodyParser.urlencoded({ extended: false }));
admin_route.use(express.static(path.join(__dirname, 'public')));
// app.use(session({
// 	secret:config.sessionSecret,
// 	resave:true,
// 	saveUninitialized:true
// }));

admin_route.get('/login', adminController.loadLogin);
admin_route.post('/login', adminController.verifyLogin);
admin_route.get('/admin', adminController.admin);