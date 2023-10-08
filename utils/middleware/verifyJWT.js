const jwt = require('jsonwebtoken');

/*
*-------------------------------
*/
module.exports = async (req, res, next) => {
  const token = req.headers['authorization'];
  if(!token) return res.status(403).send({statusText: 'FAIL', statusValue: 403, message: 'UNAUTHORIZED'});
  jwt.verify(token, process.env.JWTToken, (err, decoded) => {

    if(err) return res.status(401).send({statusText: 'FAIL', statusValue: 401, message: 'Failed to authenticate'});
    
    req.decoded = decoded;
    next();
  });

};