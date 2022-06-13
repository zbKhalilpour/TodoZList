const express = require('express');
const router = express.Router();

router.use((req,res,next)=>{
    if(req.isAuthenticated()){
        return next();
    }
    return res.redirect('/')
})

router.get('/',(req,res)=>{
    console.log('dashboard')
    res.render('dashboard')
});

module.exports=router;