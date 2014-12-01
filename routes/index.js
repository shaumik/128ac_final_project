var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index.html', { title: 'Home' });
});

router.get('/comic', function(req, res) {
  res.render('comic.html', { title: 'comic' });
});

router.get('/comedy', function(req, res) {
	res.render('comedy.html', {title: 'comedy'});
	
});


module.exports = router;
