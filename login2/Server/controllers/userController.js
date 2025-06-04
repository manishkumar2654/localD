
const UserModal= require("../models/userModel");





const userRegistration=async(req, res) =>{
    const {name, contact, email, password } = req.body;
    try {
        const User=await UserModal.create({
           name:name,
           contact:contact,
           email:email,
           password:password 
        })

      res.status(200).send("user succesfuly create111")

    } catch (error) {
        console.log(error);
    }
    
    
}

const userLogin =async(req, res)=>{
    const { email, password }= req.body;

    try {
        const User= await UserModal.findOne({email:email});


        if(!User){
            res.status(401).send({msg:"invalid email!!!"});
        }
        
        if(User.password!=password) {

            res.status(401).send({msg:"invalid passwords!!!"});
        }
        res.status(200).send({User:User, msg:"login succesfuly "});

    } catch (error) {
       console.log(error);
        
    }

    console.log(req.body);
    
    
}



module.exports={
    userRegistration,
    userLogin
}