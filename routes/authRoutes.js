const express = require('express');
const authRouter = express.Router();
const {userlogin, createuser} = require('../controllers/authController');

authRouter.post('/register',createuser);
authRouter.post('/login',userlogin);

module.exports = authRouter;
