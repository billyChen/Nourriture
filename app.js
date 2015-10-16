var express = require('express');
// var mongo = require('mongodb');
// var monk = require('monk');
// var db = monk('localhost:27017/ingredients');

var app = express();

app.get('/', function (req, res) {
  res.render('home.ejs')
});

app.listen(process.env.PORT || 5000);

module.exports = app;
