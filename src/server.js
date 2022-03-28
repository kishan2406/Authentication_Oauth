const app = require("./index")

const connect = require("./configs/db")


app.listen(5000, async(req, res) => {
    try{

        await connect();
      
        console.log("listening port on 5000")
    }catch(err){

        console.log(err.message)
    }
    
})