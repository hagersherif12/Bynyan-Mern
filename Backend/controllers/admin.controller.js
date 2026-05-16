// model 
const Admin = require("./../models/Admin.model")
// joi schmea
const adminSchema= require("./validation/admin.validation")
// jwt 
const jwt = require("jsonwebtoken");
// login controller

const signToken = (id)=>{
    return jwt.sign({id},process.env.SK_KEY,{expiresIn:"7d"});
};
// export