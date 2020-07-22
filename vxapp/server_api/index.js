// console.log('hello world')
const express = require('express'); // 后端开发框架
const apiMocker = require('mocker-api');
const fs = require('fs');   //文件系统 node内置
const path = require('path');   //路径系统 node内置
const app = express();

// localhost 127.0.0.1 :8080
// 阿里云服务器 IP :3306 mysql端口  :27017 momgodb端口

app.get('/',(req,res) => {
    fs.createReadStream('./home.html').pipe(res);
    // res.end('hello world');
})

apiMocker(app, path.resolve('./mocker/mocker.js'));

app.listen(1314);   // 在某个端口启动