
const passport = require('passport');
const localStrategy=require('passport-local').Strategy;
const User=require('../models/users');


passport.serializeUser((user,done)=>{
    done(null,user.id);
});
passport.deserializeUser(async(id,done)=>{
    let user= await User.findById(id);
    if(user)
        done(null,user);
});

//login
passport.use(
    'local.login', 
    new localStrategy(
        {
            usernameField:'emaillogin',
            passwordField:'passlogin',
            passReqToCallback:true,
        },async(req,emaillogin,passlogin,done)=>{
            try{
                let user=await User.findOne({email:req.body.emaillogin})
                if(!user || req.body.passlogin != user.pass){
                    return done(null,false,req.flash('errors','your information are not match'))
                }
                done(null,user);
            }catch(err){

                return done(err,false,{message:err})
            }
        }
    ))

//signup
passport.use(
    'local.signup' , 
    new localStrategy({
        usernameField:'email',
        passwordField:'pass',
        passReqToCallback:true,
    },
    async(req,email,pass,done)=>{
       try{
            let user =await User.findOne({email:req.body.email})
            if(user){
                console.log(`Sorry :( This user already exist`)
                return done(null,false,req.flash('errors',`Sorry :( This user already exist`))
            }
            const newUser = new User({
                name:req.body.name,
                email:req.body.email,
                pass:req.body.pass,
            })
            await newUser.save();
            done(null,newUser);
       }catch(err){
            return done(err,false,{message:err})
       }
    }
))

