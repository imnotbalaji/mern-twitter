var express = require('express');
var router = express.Router();

router.get('/',(req,res,next) => {
    res.json({
        message: "GET /api/tweets"
    })
});

module.exports = router;