/**
 * Created by dllo on 17/8/5.
 */
var express =require('express');
var routes = express.Router();

routes.get('/',function (req,res) {

    res.render('loginSuccess',{title: 'LoginSuccess'});

})


module.exports = routes;


