// permittedRoles = ["seller", "admin"]

const authorise = (permittedRoles) =>{
 
    return (req,res, next) => {
       
        // getting the user
        const user = req.user

        let isPermitted = false;

        // checking if he has permittted role
    permittedRoles.map(role => {
       if(user.role.includs(role)){
           isPermitted = true;

       }
    })
    // if permitted, he can go ahead                              
         if(isPermitted) {
        return next()

         }
         else{
             return res.status(401).send({message: "you are not authorise to perform this operate"})
         }
    }
} 

module.exports = authorise