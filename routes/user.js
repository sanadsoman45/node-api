const express = require('express');
const router = express.Router();
const {handlegetAllUsers,getUserById, updateuserById, deleteUserById,createuser}=  require("../controllers/user");

//get/create all users based on method name
router.route('/').get(handlegetAllUsers).post(createuser);

//get/patch/delete users by id based on method call
router.route("/:id").get(getUserById).patch(updateuserById).delete(deleteUserById);


module.exports = router;
