// var App = require('../../client/components/App.js');
// var App = require('../../client/components/App.js');



var express = require('express');
var router = express.Router();



router.get('/', function(req, res){
  console.log("Router Working");
  res.render('index')
});

module.exports = router;