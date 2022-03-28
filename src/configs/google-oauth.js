var GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;

const passport = require("passport")
const {v4: uuid } = require("uuid");

const User = require("../models/user.models")

require("dotenv").configs()
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/auth/google/callback"
    
  },
  function(request, accessToken, refreshToken, profile,cb) {

    // //email
    // console.log(profile._json.email)
    // //password
    // console.log(uuidv4())


    const user = await User.findOne({email : profile?._json?.email}),lean().exec()

    if(!user){
      user = await User.create({
        email: profile._json.email,
        password : uuidv4(),
        role : ["customer"]
      })

    }
    console.log(user)
      return cb(null, "user");
    
  }
));

module.exports = passport;
