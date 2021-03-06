const bcrypt = require('bcrypt');
const {User} = require('../db_connection/sequelize');  
const {registerValidation} = require("../validation/validations");
module.exports = async function register (req, res) {

    const {error} = registerValidation(req.body);
    if(error) return res.json({success:false,error:error.details[0].message});

    const emailExist = await User.findOne({
        where:{email:req.body.email}
    });
    if(emailExist !== null) return res.json({success:false,error:"Email already exists"});
    
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password,salt);
    let full_name = req.body.full_name;
    try{
        const response = await User.create({email:req.body.email,
          password:hashedPassword,
          full_name:req.body.full_name
        });
        return res.json({success:true,full_name:full_name});
      }catch (err) {
        return res.json({success:false,error:err});
      }
};
