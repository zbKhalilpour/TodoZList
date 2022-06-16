let controller=require('./controller');

class dashboardController extends controller{
async addtxt(req,res,next){
    try{
        console.log(req.body);
        res.json({
        data : 'txt was created successfuly',
        success: true
        })

    }catch(err){
        next(err);
    }
}
}
module.exports= new dashboardController;

