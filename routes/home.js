const express=require('express');
const router = express.Router();


router.get('/home',(req,res)=>{
    res.render('home')
})

router.use('/auth',require('./auth'))
router.use('/dashboard',require('./dashboard'))
router.use('/logout', (req, res, next)=> {
    req.logout((err)=> {
      if (err) { return next(err); }
      res.redirect('/home');
    });
  })
module.exports=router;