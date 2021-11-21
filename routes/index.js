var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About this Page', 
  aboutme1:'My name is Jubin Johny. I am professional Web Designer and Web Developer. Since beginning my journey as a freelance designer nearly 2 years ago, I have done remote work for agencies, consulted for start-ups, and collaborated with talented people to create digital products for both business and consumer use.',
  aboutme2:'I have worked on a multitude of web and cloud based projects for a range of clients providing Web Design (Photoshop, Illustrator, InDesign) and Development (PHP, HTML, CSS, JS, Angular, jQuery, WordPress, Bootstrap, Responsive Layouts), e-commerce Solutions, Graphic Designs and Cloud based solutions (AWS, GCP, Azure, Digital Ocean). During my Mobile Solutions Degree, I studied Application Development on both Android and IOS along with Web Designing and UI/UX, and therefore have a keen understanding of wireframes, sitemaps and user experience design, which I put to good use on every project I work on.',
  aboutme3:'I am quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time. I currently live in Canada. I am always available to discuss your project over the phone or via e-mail.'
 });
});

router.get ('/', function(req,res,next) {
  res.render('index',{title:'Jubin Johny'});
});


module.exports = router;
