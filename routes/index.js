var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index.html', { title: 'Home' });
});

/*GET rest of the pages lol */
router.get('/comic', function(req, res) {
  res.render('comic.html', { title: 'comic' });
});

router.get('/comedy', function(req, res) {
	res.render('comedy.html', {title: 'comedy'});
	
});

router.get("/hiphop", function(req,res){
	res.render('hiphop.html', {title:'hiphop'});
});


router.get("/bio", function(req,res){
	res.render('bio.html', {title:'bio'});
});

module.exports = router;
