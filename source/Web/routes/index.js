var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET nourriture page. */
router.get('/nourriture', function(req, res, next){
	res.render('nourriture', { title: 'Nourriture' });
});

router.get('/result', function (req, res) {
  res.render('search_result');
});

router.post('/query_search', function (req, res) {
  request.post({
    url: 'http://localhost:5000/search',
    method: 'POST',
    form: {
        search: req.body.q
    }
}, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var result = body;
      console.log("==============================BODY==============================")
      console.log(body);
    }
    res.send(body);
  });
});

/* GET connection page. */
router.get('/welcome', function(req, res, next){
	res.render('welcome', { title: 'bienvenu' });
});

router.get('/addIngredients', function(req, res, next){
	res.render('addIngredients', { title: 'Add your ingredients !!!' });
});

router.get('/addRecipe', function(req, res, next){
	res.render('addRecipe', { title: 'Add your recipe !!!' });
});

router.get('/logIn', function(req, res, next) {
	res.render('logIn', { title: 'LogIn'});
});

router.get('/createUser', function(req, res, next){
	res.render('createUser', { title: 'Create your profil'});
});

// app.route('/monProfil/:id', function() {
// 	request('https://nourritureapi.herokuapp.com/getUser/:id', function (req, res, body){
// 		console.log(body);
// 	});
// });

module.exports = router;
