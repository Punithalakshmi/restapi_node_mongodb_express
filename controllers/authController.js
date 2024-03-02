const User = require('../models/userModel');
const ErrorHandler = require('../utils/errorHandler');
const catchAsyncError = require('../middlewares/catchAsyncError');
const sendToken = require('../utils/jwt');

//api for user login
exports.loginUser = catchAsyncError(async (req, res, next) => { 
  const{email,password} = req.body;
   console.log(email,password); 
  if(!email || !password){
     //return next(new ErrorHandler('Please enter a email & password', 400));
      return next(new ErrorHandler('Please enter a email & password', 400));
      //console.log(error);
  }

   //finding the user database
   const user = await User.findOne({email}).select('+password');
   console.log('user',user);
  if(!user){
    return next(new ErrorHandler("Invalid email or password", 401))
  }

  if(!await user.isValidPassword(password)){
    return next(new ErrorHandler("Invalid Password",401))
  }
   // res.send();
   res.status(201).json({success:true,user});
});

exports.registerUser = catchAsyncError(async (req,res,next) => {

   const {name,email,password} = req.body;

   if(!name || !email || !password){
     return next(new ErrorHandler('Please enter valid user details',401));
   }
  
   let avatar;

   let BASE_URL = process.env.BASE_URL;

   if(process.env.NODE_ENV == 'production'){

    BASE_URL = `${req.protocol}://${req.get('host')}`;

   }

   if(req.file){
     avatar = `${BASE_URL}/uploads/user/${req.file.originalname}`;
   }

   const user = await User.create({
                             name:name,
                             email:email,
                             password:password,
                             avatar:avatar
                            });
    
    sendToken(user, 201, res);

})

exports.logoutUser =  (req,res,next) => {

      res.cookie('token',null,{expires:new Date(
                  Date.now()
                ),
                httpOnly:true
      })
    .status(200)
    .json({
          success:true,
          message:'LoggedOut'
    })

}

