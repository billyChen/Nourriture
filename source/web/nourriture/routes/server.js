var express = require('express');
var router = express.Router();
var fs = require("fs");


// List all ingredients
router.get('/listIngredients', function(req, res, next) {
 fs.readFile("../public/ingredients.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
});

// Add ingredients
router.get('/addIngredients/:name', function (req, res) {
   fs.readFile( "../public/country.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       data["ingredients"][req.params.name] = req.params.name;
       res.end( JSON.stringify(data));
   });
});

// Show ingredients
router.get('/showIngredients/:id', function (req, res) {
   fs.readFile( "../public/country.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       // var user = users["user" + req.params.id]
       console.log( user );
       res.end( JSON.stringify(user));
   });
});

// Delete ingredients
app.get('/deleteUser/:name', function (req, res) {
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       delete data[req.params.name];
       res.end( JSON.stringify(data));
   });
});
module.exports = router;
