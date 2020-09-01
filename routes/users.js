var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  // res.send('respond with a resource');
  res.render('users', {
    name: "THOMAS",
    firstname: "Mathieu",
    data: [{
      language: "HTML",
      version: 5
    }, {
      language: "Javascript",
      version: "ES5"
    }, {
      language: "RUST",
      version: "1.46.0-nightly"
    }]
  });

});

module.exports = router;