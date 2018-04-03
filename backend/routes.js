const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();
const MongoStore = require('connect-mongo')(session);
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const settings = require('../config/settings');
const authenticate = require('./authenticate')

/*
This backend is messy and should be split up into different
files in the future.
*/

// YOUR API ROUTES HERE
router.use('/', (req, res) => {
  res.json({success: true});
});
// Middleware
router.use(morgan('dev'));
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));


/*
Connect with the Mongo Database
*/
mongoose.connect('mongodb://localhost:27017/new')
var db = mongoose.connection;
db.on('error', console.error.bind(console, '# MongoDB - connection error: '));
router.use(session({
    secret: 'mySecretString',
    saveUninitialized: false,
    resave:false,
    store: new MongoStore({mongooseConnection: db, ttl: 2 * 24 * 60 * 60})
    //ttl: 2 days * 24 hours * 60 minutes * 60 seconds
  }))

/*
This people model contains either
sponsors or staff members displayed
in the about us page.
*/
const User = require('./models/people');
/*
Routes for the About Us and About Form Pages
----------------------------------------------
*/
router.post('/person', function(req, res){
    var per = req.body;
    User.create(per, function(err, per){
      if(err){
        throw err;
      }
      res.json(per);
    })
  });

  router.post('/sponsor', function(req, res){
    var per = req.body;
    User.create(per, function(err, per){
      if(err){
        throw err;
      }
      res.json(per);
    })
  });

// GET person
router.get('/person',authenticate.auth, function(req, res){
    User.find({'isSponsor': false},function(err, p){
      if(err){
        throw err;
      }
      console.log({user:req.currentUser})
      res.json(p)
    })
  });

router.get('/sponsors', function(req, res){
    User.find({'isSponsor': true},function(err, p){
      if(err){
        throw err;
      }
      res.json(p)
    })
  });

router.delete('/person/:_id', function(req, res){
    var query = {_id: req.params._id};
    User.remove(query, function(err, pp){
      if(err){
        console.log("# API DELETE: ", err);
      }
      res.json(pp);
    })
  });

  router.delete('/sponsor/:_id', function(req, res){
    var query = {_id: req.params._id};
    User.remove(query, function(err, pp){
      if(err){
        console.log("# API DELETE: ", err);
      }
      res.json(pp);
    })
  });
<<<<<<< HEAD

module.exports = router;
=======
/*
------------------------------------------------
*/

/*
This Account model contains either
user accounts for the website.
*/
  const Account = require('./models/account');

/*
Routes for Sign Up
-------------------------------------------------
*/
  router.post('/signup', function(req, res){
    var per = req.body;
    per.password = bcrypt.hashSync(per.password,10);
    console.log(per);
    Account.create(per, function(err, anything){
      if(err){
        throw err;
      }
      res.json(anything);
    })
  });
/*
------------------------------------------------
*/
/*
Routes for Sign In
-------------------------------------------------
*/
  router.post('/signIn', function(req, res) {
    Account.findOne({
      email: req.body.email
    }, function(err, user) {
      if (err) throw err;

      if (!user) {
        console.log("Not good user")
        res.status(401).send({success: false, msg: 'Authentication failed. User not found.'});
      } else {
        // check if password matches
        bcrypt.compare(req.body.password, user.password, function(err, check) {
          if(!check || err) {
            console.log("BAD");
            res.status(401).send({success: false, msg: 'Authentication failed. Wrong password.'});
          } else {
          //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
          //NEED TO CHANGE SO IT DOES NOT SIGN AND RETURN PASSWORD
          //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

          const safeUser = {
            "_id": user._id,
            "email": user.email,
            "firstName": user.firstName,
            "lastName": user.lastName,
            "accountType": user.accountType
          }

          let token = jwt.sign(safeUser, settings.secret);
          // return the information including token as JSON
         //console.log(user.toJSON())
          res.json({token});
            console.log("GOOD");
          }
          // res == true
      });
      }
    });
  });
/*
------------------------------------------------
*/

module.exports = router;
>>>>>>> aboutUs, programs page, and Login
