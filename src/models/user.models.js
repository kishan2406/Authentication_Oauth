const mongoose = require("mongoose")

const bcrypt = require("bcrypt")

const userSchema = new mongoose.Schema(
    {
        email : {type:String, required: true, unique: true},

        password : {type:String, required: true},

        role : [{type: String}]
    }, {
        versionkey: false,
        timestamps: true,
    }
);

userSchema.pre("save",function(next){

    const hash = bcrypt.hashSync(this.password,8);

    this.password = hash;
    return next()
});

userSchema.method.checkPassword = function(password){

    return bcrypt.compareSync(Password, this.password);

}
const User = mongoose.model("user", userSchema)

model.exports = User;