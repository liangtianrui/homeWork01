/**
 *
 * Created by dllo on 17/8/3.
 */
var express = require('express');
var routes = express.Router();

//shoppingCar的二级页面
//拼接在地址后面的
routes.get('/1',function (req,res) {

    res.render('shoppingCar',{title : '购物车'})


})

module.exports = routes;
