var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About this Page', 
  aboutme1:'My name is Jubin Johny. I am professional Web Designer and Web Developer. Since beginning my journey as a freelance designer nearly 2 years ago, I have done remote work for agencies, consulted for start-ups, and collaborated with talented people to create digital products for both business and consumer use.',
  var:'This about my page'
 });
});

router.get ('/', function(req,res,next) {
  res.render('index',{title:'Jubin Johny'});
});


module.exports = router;
