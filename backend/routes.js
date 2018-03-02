const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();
const MongoStore = require('connect-mongo')(session);
const router = express.Router();

// YOUR API ROUTES HERE
router.use('/', (req, res) => {
  res.json({success: true});
});
// Middleware
router.use(morgan('dev'));
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
/*
router.use(session({
  secret: process.env.SECRET,
  store: new MongoStore({ mongooseConnection: mongoose.connection }),
  resave: true,
  saveUninitialized: false
}));
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

const User = require('./models/people');

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
router.get('/person', function(req, res){
    User.find({'isSponsor': false},function(err, p){
      if(err){
        throw err;
      }
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

module.exports = router;
