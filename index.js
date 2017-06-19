/*global require, console*/
//set the express and init the http and io
var express = require('express');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;
var path = require('path');


//set the view engine and path
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//use the middlewear the static files
app.use(express.static(path.join(__dirname, 'static')));


app.get('/', function (req, res) {
    
    res.render('index');
    
});



io.on('connection', function (socket) {
    
 socket.on('new message', function (data) {
    // we tell the client to execute 'new message'
    socket.broadcast.emit('new message', data);
    socket.emit('new message', data);
  });
    

});


http.listen(port, function () {
  console.log('Server listening at port %d', port);
});

