var express = require('express');
var router = express.Router();

router.get('/pathways', function(req, res) {
  res.render('pathways');
});

router.get('/', function(req, res) {
  res.render('index');
});

router.get('/mission-arm', function(req, res) {
  res.render('mission_arm');
});

router.get('/mission-moon', function(req, res) {
  res.render('mission_moon');
});

router.get('/mission-enhanced', function(req, res) {
  res.render('mission_enhanced');
});

router.get('/capabilities', function(req, res) {
  res.render('capabilities');
});


module.exports = router;
