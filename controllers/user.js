const User = require("../models/user");

async function handlegetAllUsers(req,res){
    const allDbUsers = await User.find({});
    return res.json(allDbUsers);
}

async function getUserById(req,res){
    const user = await user.findById(req.params.id);
    return (user)?res.status(200).json(user):res.status(404).json({error:"User Not Found.."});
}

async function updateuserById(req,res){
    await User.findByIdAndUpdate(req.params.id, {lastName:req.body.lastName});
    return res.json({status:"Success"});
}

async function deleteUserById(req,res){
    await User.findByIdAndDelete(req.params.id);
    return res.json({status:"Success"});
}

async function createuser(req,res){
    const body = req.body;
    if(!body || !body.firstName || !body.lastName || !body.emailId || !body.mobNum){
        return res.status(400).json({msg:"All Fields are required.."});
    }

    const result = await User.create({
        firstName:body.firstName,
        lastName: body.lastName,
        emailId:body.emailId,
        mobNum:body.mobNum
    });
    return res.status(201).json({msg:"success", id:result._id});
}

module.exports = {
    handlegetAllUsers,
    getUserById,
    updateuserById,
    deleteUserById,
    createuser
}