var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/international', function(req, res) {
  var db = req.db;
  var collection = db.get('recettes');
  collection.find({},{},function(e,docs){
    res.render('international', {
      "recipes" : docs
    });
  });
});

module.exports = router;
