var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/pathways', function(req, res) {
  res.render('pathways');
});

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

/* GET home page. */
router.get('/mission', function(req, res) {
  res.render('mission_elements');
});

/* GET home page. */
router.get('/capabilities', function(req, res) {
  res.render('capabilities');
});

module.exports = router;
