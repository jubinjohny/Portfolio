var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/',(req,res,next) => {
  res.render('contact',{ employment: 'To apply for a job with my team, please feel free to send me your Linkedin profile link or CV to : '
});
});

module.exports = router;
