const Admin = require('../models/blog/admin');
const bcrypt = require('bcrypt');

const loadLogin = async(req, res)=>{
    try{
        res.render('/pages/login')
    } catch(error){
        console.log(error.message);
    }
}

const verifyLogin = async(req, res)=>{
    try{
        const email = req.body.email;
        const password = req.body.password;
        const adminData = await Admin.find({email:email});

        if(adminData){
            const passwordMatch = await bcrypt.compare(password, adminData.password);
            
            if(passwordMatch) {
                if(adminData.is_admin == 1){
                    res.redirect('/pages/dashboard');
                } else{
                    res.redirect('pages/login');
                }
            } else {
                res.render('/pages/login', {message:"Email or Password is incorrect!"});
            }
        } else{
            res.render('/pages/login', {message:"Email or Password is incorrect!"});
        }
    } catch (error) {
        console.log(error.message);
    }
}

const admin = async(req, res)=>{
    try{
        res.render('/pages/dashboard');
    } catch(error){
        console.log(error.message);
    }
}

module.exports = {
    loadLogin,
    verifyLogin,
    admin
}