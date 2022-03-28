const express = require("express");

const authenticate = require("../middlewares/authenticate");

const authorise = require("../middlewares/authorise");


const router = express.Router();

const Product = require("../models/product.models")

router.post("", async(req, res) => {

    try{
        const product = await Product.create(req.body)
        return res.status(200).send(product)

    }catch(err){

        return res.send(400).send(message, err.message)
    }
})
//start from here for OAUTH
router.patch("/:id", authenticate,authorise([admin, seller]),  async(req, res) => {

    
    try{
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new:this.true})
        return res.status(200).send(product)

    }catch(err){

        return res.send(400).send(message, err.message)
    }

})

route.get("", async(req,res) =>{
    try{
         const product = await Product.find()
         return res.status(200).send(product)

    }catch(err){
        return res.status(400).send({message : err.message})
    }
})

module.exports = router;