const mongoose = require("mongoose")

module.exports = () =>{

    return mongoose.connect("mongodb+srv://kishanp12:kishnap12@cluster0.4pm3t.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
};