const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//login user
async function userlogin(req, res) {
  try {
    const { emailId, password } = req.body;
    const user = await User.findOne({ emailId });

    if (!user) {
      return res.status(401).json({ error: 'Authentication Failed' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Authentication Failed' });
    }

    const token = jwt.sign({ userId: user._id }, process.env.secret_key, {
      expiresIn: '1h'
    });
    return res.status(200).json({ 'AccessToken':token });
  } catch (error) {
    console.log(error);
  }
}

//register user
async function createuser(req, res) {
  const body = req.body;
  if (
    !body ||
    !body.firstName ||
    !body.lastName ||
    !body.emailId ||
    !body.mobNum ||
    !body.password
  ) {
    return res.status(400).json({ msg: 'All Fields are required..' });
  }

  const hashedPassword = await bcrypt.hash(body.password, 10);

  const result = await User.create({
    firstName: body.firstName,
    lastName: body.lastName,
    emailId: body.emailId,
    mobNum: body.mobNum,
    password: hashedPassword
  });
  return res.status(201).json({ msg: 'success', id: result._id });
}

module.exports = {
  userlogin,
  createuser
};
