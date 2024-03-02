const sendToken = (user, statusCode, res) => {
  
    //Creating the Token
    const token = user.getJwtToken();

    //setting the cookies
    const options = {
        expires: new Date(
            Date.now() + process.env.COOKIE_EXPIRES_TIME * 24 * 60 * 60 * 1000
        ),
        httpOnly:true
    }

    res.status(statusCode)
       .cookie('token',token,options)
       .json({
              success:true,
              token:token,  
              user:user
            })
}