const express = require('express');
const router = express.Router();
const {
  getAllUsers,
  getUserById,
  updateuserById,
  deleteUserById,
} = require('../controllers/userController');
require('dotenv').config();


router.route('/').get(getAllUsers);

//get/patch/delete users by id based on method call
router
  .route('/:id')
  .get(getUserById)
  .patch(updateuserById)
  .delete(deleteUserById);

module.exports = router;
