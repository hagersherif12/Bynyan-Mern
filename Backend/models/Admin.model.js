// MONGOOSE
const { required } = require("joi");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
// schema
const adminSchema = new mongoose.Schema({
    userName:{
        type:String,
        // ?عشان بيضرب ايرور 500 من غير تفاصيل 
        required:[true , "user name is required "],
    },
    email:{
        type:String,
        required:[true , "email is required "]
    },
    password:{
        type:String,
        required:[true , "password is required "],
        minlength:[6,"password must be 6 char"],
        select :false,
    },
},{timestamps:true});
// hooks
// ?for dry and enapculation >>controller have only bussins logic 
// ?IF FUNCTION IS ARROW ?
adminSchema.pre("save",async function (next){
    if(!this.isModified("password")){
        return next() ;
    }
    this.password =await bcrypt.hash(this.password,10);

}) ;

// ?methods >> object have functiones 
adminSchema.methods.comparePasword= async function (matchedPass) {
    return await bcrypt.compare(matchedPass,this.password);
    
}
// model 
const Admin = mongoose.model("Admin",adminSchema);
// export
module.exports = Admin;