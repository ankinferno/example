var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.send('hello tehre from route ROOT => /');
});

module.exports = router;