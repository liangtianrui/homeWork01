/**
 * Created by dllo on 17/8/5.
 */
var express = require('express');
var routes = express.Router();
var mysql = require('mysql'); // 引入mysql
var http = require('http');


routes.post('/', function (request, res) {
    // console.log(request);

//连接数据库需要的参数
    var options = {
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: ''
    }
//返回结果函数
    function handleError(message, error) {
        if (error) {
            console.log(message + '失败');
            console.error(error);
            return false;
        } else {

            console.log(message + '成功');
            return true;

        }

    }

//创建连接
    var connect = mysql.createConnection(options);

//建立连接
    connect.connect(function (error) {
        handleError('连接', error);
    })

//使用数据库
    var useDBSQL = 'use city';
    connect.query(useDBSQL, function (error) {
        handleError('使用', error);
    })

    var selectSQL = 'select * from user where username = \'1234\'';

    //查询数据库
    connect.query(selectSQL, function (error, results) {
        if (!handleError('查询', error)) {
            return
        }
        
        var sqlusername = results[0]['username'];//数据库中的username
        var sqlpassword = results[0]['password'];//数据库中的password
        var username = request.body.username;
        var password = request.body.password;
        console.log(sqlusername,sqlpassword,username,password);
        if(sqlusername == username){
            if(sqlpassword == password){
                res.render('loginSuccess', {title: '登录成功'});
            } else {
                res.render('loginSuccess', {title: '密码错误'});
            }

        } else {
            res.render('loginSuccess', {title: '用户不存在'});
        }




            })



});


module.exports = routes;
