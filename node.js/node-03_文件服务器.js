'use strict';

var fs = require('fs'),
    url = require('url'),
    path = require('path'),
    http = require('http');

// 从命令行参数获取root目录，默认是当前目录:
var root = path.resolve(process.argv[2] || '.');

console.log('Static root dir: ' + root);

//创建服务器:
var server = http.createServer(function (request,response){
    // 获得URL的path，类似 '/css/bootstrap.css':
    //url.parse()将一个字符串解析为url对象
    var pathname = url.parse(request.url).pathname;
    // 获得对应的本地文件路径，类似 '/srv/www/css/bootstrap.css':
    //root:'/srv/www/'，文件根目录
    //pathname:'/css/bootstrap.css'
    var filepath = path.join(root, pathname);
    //获取文件状态
    fs.stat(filepath, function(err, stats){
        if(!err && stat.isFile()){
            //没出错且文件存在
            console.log('200 ' + request.url);
            //发送200响应
            response.writeHead(200);
            //将文件流导向response
            fs.createReadStream(filepath).pipe(response);
        }else{
            //出错或文件不存在
            console.log('404' + request.url);
            //发送404响应
            response.writeHead(404);
            response.end('404 Not Found');
            
        }
    });
});

server.listen(8080);

console.log('Server is running at http://127.0.0.1:8080/');

//获取路径 -> 创建服务，在request参数中拿到要请求的文件url，根据url拼接本地的地址 
//-> 判断文件存在且无错 -> response响应200，根据本地文件url创建可读流并pipe到response
//-> 设置服务监听端口