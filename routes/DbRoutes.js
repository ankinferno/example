var express = require('express');
let router = express.Router();
let service = require('../service/Dbservice');
let User = require('../models/User');

router.post('/create', function(req, res) {
    let { name, pass } = req.body;

    let TempUser = new User({ username: name, password: pass });
    service.AddUser(TempUser).then(user => {
        res.send(user);
    });


});


router.get('/show', function(req, res) {
    service.FindUser().then(users => {
        console.log('here is x : ', users);
        res.send(users);
    });


});

module.exports = router;