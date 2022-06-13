const express = require('express');
const router = express.Router();

const authController=require('controllers/authController');
const authValidator=require('validators/authValidator')

router.use((req,res,next)=>{
    if(req.isAuthenticated()){
        return res.redirect('/dashboard') ;
    }
    return next();
})

router.get('/login',authController.loginForm);
router.post('/login',authValidator.login(),authController.login);
router.post('/signup',authValidator.signup(),authController.signup);


module.exports=router;