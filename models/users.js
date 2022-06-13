const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const userSchema=new Schema({
    name:{type : String , required:true},
    //img:{type : String},
    //balance:{type:Number,default:0},
    email:{type : String , required:true},
    pass:{type : String , required:true}
});
module.exports=mongoose.model('User',userSchema,'User')