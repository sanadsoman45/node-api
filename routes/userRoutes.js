const express = require('express');
const app = express();
const router = express.Router();
const {
  userlogin,
  getUserById,
  updateuserById,
  deleteUserById,
  createuser
} = require('../controllers/userController');
require('dotenv').config();
const { verifyToken } = require('../middlewares/authMiddleware');

//get/create all users based on method name
// router.route('/').get(userlogin).post(createuser);

//setting up auth middleware for authorizing the users.
app.use(verifyToken);

//get/patch/delete users by id based on method call
router
  .route('/:id')
  .get(getUserById)
  .patch(updateuserById)
  .delete(deleteUserById);

module.exports = router;
