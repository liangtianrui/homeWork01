/**
 * Created by dllo on 17/8/2.
 */
//题目: 编写一个服务器,读取图片
    //1. 先创建服务器
    //2. 创建需要访问文件
    //3. 读取文件 设置格式为 'binary'
    //4. 获取url, 根据url的pathname进行读取文件
    //5. 引入url模块  进行request.url的解析
    //6. 判断路径是否正确, 正确返回200; 错误返回404
    //7. 拼接绝对路径  __dirname + pathname
    //8. 读取, response.end() 格式 'binary'


var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');


var server = http.createServer(function (request, response) {

    var urlObj = url.parse(request.url);
    // console.log(urlObj);
    var pathname = urlObj.pathname;
    console.log(pathname);
    var fileUrl = path.join(__dirname, pathname);
    console.log(fileUrl);
    fs.readFile(fileUrl, 'binary', function (err, data) {
        if (pathname == '/img.jpg') {
            response.end(data,'binary');
        } else {
            response.statusCode = 404;
            response.end('文件未找到');
        }


    })
})

server.listen(3000, function () {

});