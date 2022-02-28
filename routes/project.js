const express = require('express');
const router = express.Router();

router.get('/',(req,res,next) => {
    res.render('Projects/index',{ myprojecttext: 'Here are some projects I have worked on recently. Want to see more? '
   });
});

module.exports = router