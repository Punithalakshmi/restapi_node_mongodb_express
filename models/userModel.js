const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    name:{
            type:String,
            required:[true,'Please enter name']
         },
    email:{
        type:String,
        required:[true,'Please enter email'],
        unique:true,
        validate:[validator.isEmail,'Please enter a valid email address']
    },
    password:{
        type:String,
        required:[true,'Please enter password'],
        maxlength:[6,'Password cannot exceed 6 characters'],
        select:false
    },
    avatar:{
        type:String
    }     
});

userSchema.methods.isValidPassword = async function(enteredPassword) {
    return bcrypt.compare(enteredPassword,this.password);
}

userSchema.methods.getJwtToken = function(){
   return jwt.sign({id:this.id},process.env.JWT_SECRET,{expiresIn:process.env.JWT_EXPIRES_TIME})
}

let model =  mongoose.model('User', userSchema);


module.exports = model;