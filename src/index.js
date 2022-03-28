const express = require("express")

const userController = require("./controllers/user.controllers")

const productController = require("./controllers/product.controllers")

const {register,login, generateToken} = require("./controllers/auth.controllers")

const passport = require("./configs/google-oauth")
const res = require("express/lib/response")

const app = express();

app.use(express.json());

app.use("/users", userController);

app.post("/register, register")

app.post("/login", login)

app.use("/products", productController)

app.get("/auth/google/callback",
passport.authenticate("google",{scope: ["profile", "email"]}))

app.get("/auth/google/callback",
passport.authenticate("google",{failureRedirect: "/login"})),
function(req, res){
    const token = generateToken(req.user)
    return res.status(200).send({user:req.use, token})
}

module.exports = app

