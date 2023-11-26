var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a happy face, a bagful of treats and a resource');
});

module.exports = router;
