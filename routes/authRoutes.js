const express = require('express');
const authRouter = express.Router();
const {userlogin, createuser} = require('../controllers/authController');

authRouter.route('/register').post(createuser);
authRouter.get('/login',userlogin);

module.exports = authRouter;
