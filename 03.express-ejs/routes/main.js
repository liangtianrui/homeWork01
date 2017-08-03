/**
 * Created by dllo on 17/8/3.
 */
var express = require('express');
var routes = express.Router();

routes.get('/',function (req,res) {
    res.render('main');
})

module.exports = routes;