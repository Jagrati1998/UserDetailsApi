const express = require('express');
const router = express.Router();
const Users = require('../models/user');
router.get('/users', (req, res, next) => {

    Users.find(function (err, contacts) {
        res.json(contacts);
    })
});
router.get('/users/:id', (req, res, next) => {

    Users.find({ _id: req.params.id }, function (err, result) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(result);
        }

    });

});
router.put('/users/:id', (req, res, next) => {
    Users.findByIdAndUpdate({ _id: req.params.id }, { $set: req.body }, function (err, result) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(result);
            console.log('r in save');
        }

    });
});

router.post('/users', (req, res, next) => {
    var newUser = new Users({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone: req.body.phone
    });
    newUser.save((err, doc) => {
        if (!err) {
            res.send(doc)
        }
        else {
            console.log('Error in save Data' + JSON.stringify(err, undefined, 2));
           
        }
    });

});



router.delete('/users/:id', (req, res, next) => {
    Users.remove({ _id: req.params.id }, function (err, result) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(result);
        }


    });
});
module.exports = router;
