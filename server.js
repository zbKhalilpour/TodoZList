const express=require('express');
const toDoZApp = express();
const cookieParser =require('cookie-parser');

const flash = require('connect-flash');
const mongoose=require('mongoose');
const passport=require('passport');
const session = require('express-session');
const MongoStore = require('connect-mongo')

require('app-module-path').addPath(__dirname);
require('dotenv').config();
mongoose.connect('mongodb://127.0.0.1:27017/todozlist');
toDoZApp.use(express.urlencoded({extended : false}));
toDoZApp.use(express.static(__dirname + '/public'));
toDoZApp.set('view engine','ejs');
toDoZApp.use(cookieParser(process.env.COOKIE_SECRET));
toDoZApp.use(session({
    secret:process.env.SESSION_SECRET,
    resave:true,
    saveUninitialized:true,
    cookie: {expires:new Date(Date.now() +1000*24*100)},
    store: MongoStore.create({mongoUrl : 'mongodb://127.0.0.1:27017/todozlist'})
}))
toDoZApp.use(flash());

require('./passport/passport-local');
toDoZApp.use(passport.initialize());
toDoZApp.use(passport.session());

toDoZApp.use((req,res,next)=>{
    res.locals={errors:req.flash('errors'),req}
    //console.log(req.flash('errors'))
    next();
})

toDoZApp.use('/',require('./routes/home'));
toDoZApp.listen(5000,()=>{console.log('hello todoz follower')});