const express = require('express');
const router = express.Router();

const authController=require('controllers/authController');

router.get('/login',authController.loginForm.bind(authController));


module.exports=router;