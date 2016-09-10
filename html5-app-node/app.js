var express = require('express');
var path = require('path');
var router = require('./routes/router');

var app = express();

app.set('port', process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', router);



app.use(function (req, res, next) {
    res.status(404).type('html');
    res.send('<h1>没找到页面，检查一下你的口袋</h1>');
})

app.use(function (err, req, res, next) {
    res.status(500).type('html');
    res.send('<h1>你相信吗？服务器出错了</h1>');
})

app.listen(app.get('port'), function () {
    console.log('server listening on the port ' + app.get('port'));
})