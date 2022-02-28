var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About this Page', 
  aboutme1:'I am Jubin Johny, a professional Web Designer and Web Developer. Since the beginning of my journey as a freelance designer nearly 3 years ago, I have done remote work for agencies, consulted for start-ups, and collaborated with talented people to create digital products for both business and consumer use.',
  aboutme2:'I have worked on a multitude of web and cloud based projects for a range of clients providing Web Design (Photoshop, Illustrator, InDesign) and Development (PHP, HTML, CSS, JS, Angular, jQuery, WordPress, Bootstrap, Responsive Layouts), E-commerce Solutions, Graphic Designs and Cloud based solutions (AWS, GCP, Azure, Digital Ocean). During my Mobile Solutions Degree, I have learnt Application Development on both Android and IOS along with Web Designing and UI/UX, and therefore have a keen understanding of wireframes, sitemaps and user experience design, which I put to good use on every project I work on.',
  aboutme3:'I am quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time. I currently live in Canada. I am always available to discuss your project over the phone or via e-mail.'
 });
});

router.get ('/', function(req,res,next) {
  res.render('index',{title:'Jubin Johny',serv1:'My approach to website design is to create a website that strengthens your company’s brand while ensuring ease of use and simplicity for your audience.',
  serv2:'Every business has unique problems that can be fixed with the right software solution. My approach is to create an app design that strengthens your company’s brand while ensuring ease of use.',
  serv3:'SEO is the practice of improving and promoting a website in order to increase the number of visitors it receives.',
  serv4:'An eCommerce solution is a feature-filled, customisable online storefront and shopping cart that will be directly integrated into your website.',
  serv5:'Social media integration enables your website to post updates to Facebook, displays a Twitter feed, and links to your social media accounts.',
  serv6:'I can help you with all your Cloud Native DevOps infrastructure migration. Monitoring, securing and taking part of the form in automating and supporting to ensure CI/CD in product development.'
 });
});


module.exports = router;
