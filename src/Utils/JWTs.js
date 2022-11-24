var jwt=require("jsonwebtoken")
module.exports.createjwts = (user,key,time) => {
    // if(!user.Activated)return ("Deactivated");
    const Token = jwt.sign({_id:user._id,Name:user.Name,Email:user.Email,
         Password:user.Password,Roles:user.Roles }, key, {expiresIn: time})
    return Token
};
module.exports.verifyjwts = (token,key) => {
    try{
        const decoded = jwt.verify(token,key) 
        return decoded
    }catch(err){
        return null
    }
};
