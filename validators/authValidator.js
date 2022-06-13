const Validator =require('./validator')
const { check } = require('express-validator');

class AuthValidator extends Validator {
    signup(){
        const err=[
            check('name', 'Are you sure to enter your name?').not().isEmpty(),
            check('email' , 'If you enter your mail please check that enter its format correctly').isEmail(),
            check('pass', 'please check your password must be more than 6 charecter').isLength({min:6})
        ]
        return err;
    }
    login(){
        const err=[
            check('emaillogin' , 'enter your mail correctly').isEmail(),
            check('passlogin', 'enter your pass').not().isEmpty(),
        ]
        return err;
    }
}

module.exports =new AuthValidator;