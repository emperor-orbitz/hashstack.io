var express = require('express');
var controller = require("../Controllers/auth.controller");
var router = express.Router();
var passport = require("passport");


/*
*          AUTH ROUTES
*/


router.post('/auth/isloggedin',
passport.authenticate("jwt", {session:false}),
 (req, res, next) => {   
    controller.isloggedin(req, res, next);
    
})



router.post('/auth/login',  (req, res, next) => {   
controller.login(req, res, next);

})

router.post('/auth/register',  (req, res, next) => {

controller.register(req, res);
})

router.get('/auth/verify_mail/:userid', (req, res, next) => {

controller.verify_mail(req, res, next);
})


router.post('/auth/send_mail/:userid', (req, res, next) => {
controller.send_mail(req, res, next);

})


router.get('/auth/api', (req, res, next) => {
controller.api(req, res, next);

})


module.exports = router;