var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET nourriture page. */
router.get('/nourriture', function(req, res, next){
	res.render('nourriture', { title: 'Nourriture' });
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
