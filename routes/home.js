const express=require('express');
const router = express.Router();


router.get('/home',(req,res)=>{
    res.render('home')
})

router.use('/auth',require('./auth'))

module.exports=router;