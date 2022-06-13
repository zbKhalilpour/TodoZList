const {validationResult} =require('express-validator');
let controller=require('./controller')
const passport=require('passport')
// require('passport-local');
const User=require('../models/users');
class authController extends controller{
    async loginForm(req,res,next){ 
        try{
            res.render('auth/loginAndSinup')
         }catch(err){
             next(err);
        }
        
    }
    async login(req,res,next){ 
        try{
            console.log(req.body)
            const errors = validationResult(req);
            if(!errors.isEmpty()){
                let myErrors=errors.array().map(err=>err.msg);
                req.flash('errors',myErrors);
                console.log(myErrors)
                return res.redirect('/auth/login');
            };
            
            passport.authenticate('local.login',(err,user)=>{
                console.log(user)
                if(!user){
                    return res.redirect('/auth/login')
                }
                req.logIn(user,err=>{
                    return res.redirect('/dashboard')
                })
            })(req,res,next)
         }catch(err){
             next(err);
        }
    }
    async signup(req,res,next){
        try{
            const errors=validationResult(req)
            let myErrors=errors.array().map(err=>err.msg)
            console.log('myerrors='+myErrors)
            if(!errors.isEmpty()){
                console.log(myErrors)
                req.flash('errors',myErrors)
                return res.redirect('/auth/login')
            }
            console.log('req.body='+req.body.email)
            passport.authenticate('local.signup',{
                successRedirect:'/dashboard',
                failureRedirect:'/auth/login',
                failureFlash:true,
            })(req,res,next)
            // const newUser =new User({
            //     name: req.body.name,
            //     email: req.body.email,
            //     pass: req.body.pass
            // });
            // console.log(newUser)
            // await newUser.save();
            // res.redirect('/dashboard')
            console.log('passport2')
        }catch(err){
            next(err);
        }
    }
    
}

module.exports=new authController;