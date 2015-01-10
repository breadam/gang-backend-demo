'use strict';

var express = require('express');
var app = express();
var morgan = require('morgan');
var bodyParser = require('body-parser');
var cors = require('cors');
var http = require('http').Server(app);
var io = require('socket.io')(http);

var config = require("./app/config");

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser());

http.listen(config.port, function(){
	console.log('express listening');
});

io.on('connection', function (socket) {
	
	console.log('socket.io connected');
	
  socket.on('new-message', function (data) {
		
		console.log('new message received');
		
		socket.broadcast.emit('message',data);
		
  });
});
