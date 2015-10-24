var express = require('express');
var router = express.Router();
var fs = require("fs");

// ************************************ INGREDIENTS ************************************

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
   fs.readFile( "../public/ingredients.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       var ingredients = data['ingredients'][req.params.id];
       console.log( ingredients );
       res.end( JSON.stringify(ingredients));
   });
});

// Delete ingredients
router.get('/deleteIngredients/:id', function (req, res) {
   fs.readFile("../public/ingredients.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       delete data['ingredients'][req.params.id];
       res.end( JSON.stringify(data));
   });
});

// ************************************ RECIPES ************************************

// List all recipes
router.get('/listRecipes', function(req, res, next) {
 fs.readFile("../public/Recipes.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
});

// Add recipes
router.get('/addRecipes/:name', function (req, res) {
   fs.readFile( "../public/Recipes.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       data["recipes"][req.params.name] = req.params.name;
       res.end( JSON.stringify(data));
   });
});

// Show recipes
router.get('/showRecipes/:id', function (req, res) {
   fs.readFile( "../public/Recipes.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       var ingredients = data['recipes'][req.params.id];
       console.log( ingredients );
       res.end( JSON.stringify(ingredients));
   });
});

// Delete recipes
router.get('/deleteRecipes/:id', function (req, res) {
   fs.readFile("../public/Recipes.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       delete data['Recipes'][req.params.id];
       res.end( JSON.stringify(data));
   });
});

module.exports = router;
