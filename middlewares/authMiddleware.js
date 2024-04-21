const jwt = require('jsonwebtoken');
require('dotenv').config();

function verifyToken(req, res, next) {
  console.log('Access');
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).json({ error: 'Access denied' });
  }
  try {
    
    const decoded = jwt.verify(token, process.env.secret_key);
    req.userId = decoded.userId;
    console.log(decoded);
    next();
  } catch (error) {
    res.status(401).json({ errror: 'Invalid Token' });
  }
}

module.exports = {
  verifyToken
};
