var express = require('express');
var app = express();
var path = require('path');

// set the public folder to serve public assets
app.use(express.static(__dirname + '/public'));
//app.use(express.static(__dirname + '/views'));

// set up our one route to the index.html file
app.get('*', function(req, res) {
	res.sendFile(path.join(__dirname + '/public/views/index.html'));
	//res.sendFile(path.join(__dirname + '/views/index.html'));
});

// start the server on port 8080 (http://localhost:8080)
app.listen(5000);
console.log('Magic happens on port 5000.');