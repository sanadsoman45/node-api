const express = require('express');
const app = express();
const router = express.Router();
const {
  getAllUsers,
  getUserById,
  updateuserById,
  deleteUserById,
} = require('../controllers/userController');
require('dotenv').config();
const { verifyToken } = require('../middlewares/authMiddleware');

//get/create all users based on method name
// router.route('/').get(userlogin).post(createuser);

//setting up auth middleware for authorizing the users.
router.use(verifyToken);


router.route('/').get(getAllUsers);

//get/patch/delete users by id based on method call
router
  .route('/:id')
  .get(getUserById)
  .patch(updateuserById)
  .delete(deleteUserById);

module.exports = router;
