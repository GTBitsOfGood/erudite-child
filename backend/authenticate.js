const jwt = require('jsonwebtoken');
const settings = require('../config/settings');
const Account = require('./models/account');
/*
Protect server side routes with this function. 
Right now it is only passing email, fist name,
and last name to req.currentUser. req.currentUser
can be used later because it contains the returned
data from the mongodb.  
*/
module.exports.auth = function (req, res, next) {
  const authorizationHeader = req.headers['authorization'];
  let token;

  if (authorizationHeader) {
    token = authorizationHeader.split(' ')[1];
  }

  if (token) {
    jwt.verify(token, settings.secret, (err, decoded) => {
      if (err) {
        res.status(401).json({ error: 'Failed to authenticate' });
      } else {      

        Account.findOne({
            email: decoded.email},
            'email firstName lastName'
          , function(err, user) {
            console.log("made it here")  
            if (err) throw err;
        
            if (!user) {
                res.status(404).json({ error: 'No such user' });  
            } else {
                req.currentUser = user;
                next();
            }
          });
      }
    });
  } else {
    res.status(403).json({
      error: 'No token provided'
    });
  }
}
