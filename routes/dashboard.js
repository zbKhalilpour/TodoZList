const express = require('express');
const router = express.Router();

const dashboardController=require('controllers/dashboardController');

router.use((req,res,next)=>{
    if(req.isAuthenticated()){
        return next();
    }
    return res.redirect('/home')
})

router.get('/',(req,res)=>{
    console.log('dashboard')
    res.render('dashboard')
});
router.post('/addtxt',(req,res)=>{
    console.log(req.body);
        res.json({
        data : 'txt was created successfuly',
        success: true
        })
})


module.exports=router;