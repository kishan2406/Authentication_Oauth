const User = require("../models/user.models");

const jwt = require("jsonwebtoken");

// require("dotenv").configs();

const generateToken = (user) =>{

    return jwt.sign({user}, process.env.SECRECT_KEY)
}


const register = async(req, res) =>{

    try{
         let user = await User.findOne({email: req.body.email})

         //here it is checking the email
    if(user){
        return res.status(400).send({message : "Email is already exists"})
    }
    //if new user then create it or allow to register;

    user = await User.create(req.body);

    return res.status(400).send(user)

    }catch(err){
          res.status(400).send({message: err.message})
        
    }
}

const login = async (req, res) => {

    try{
        const user = await User.findOne({email: req.body.email}) 

    // }
           // checked if mail exist or not
        if(!user){
            return res.status.send("Wrong Email or Password")
        }
         // if mail exist check password
        const match = user.checkpassword(req.body.password)
         
        // if doesn't match
        if(!match){

            return res.status(400).send({message: "Wrong Email or Password"})
        }

        // if it match

        const token = generateToken(user)
        return res.status(400).send({user, token})

    }  catch(err) {
        res.status(400).send({message: err.message})

    } 
             
}

module.exports = {register, login}
    


