let controller=require('./controller')

class authController extends controller{
    async loginForm(req,res,next){ 
        try{
            res.render('auth/loginAndSinup')
         }catch(err){
             next(err);
        }
        
    }
}

module.exports=new authController;