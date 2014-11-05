var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.get('/pathways', function(req, res){
	res.render('pathways');
});

module.exports = router;
