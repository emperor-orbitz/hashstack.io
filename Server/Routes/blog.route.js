var blogModel = require('../Models/blog.model');
var Router =require('express').Router();
var blogController =require("../Controllers/blog.controller")



Router.get('/user/:author/:title', function(req, res, next){

blogController.display(req, res)

})

module.exports =Router;

