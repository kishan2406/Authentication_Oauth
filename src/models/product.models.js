const mongoose = require("mongoose");
// const { required } = require("nodemon/lib/config");

const productSchema = new mongoose.Schema(
    {
        title : {type:String, required: true},

        price : {type:Number, required: true},

        user_id: {
            type: mongoose.Schema.Types.ObjectId, 
            ref: "user",
            required: true,
        }
    }, {
        versionkey: false,
        timestamps: true,
    }
);

const Product = mongoose.model("product", productSchema)