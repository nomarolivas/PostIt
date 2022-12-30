var express = require('express');
const {isLoggedIn} = require('../middleware/protectors');
const {getRecentPosts, getPostByID, getCommentsForPostById} = require('../middleware/posts');
var router = express.Router();

/* GET home page. */
router.get('/', getRecentPosts ,function(req, res) {
  res.render('index', { title: 'CSC 317 App', name:"Nomar Olivas" });
});

router.get("/login", function(req, res) {
  res.render('login');

});


router.get("/register", function(req, res) {
  res.render('registration', {js:["validation.js"]});

});


router.get("/postimage", isLoggedIn, function(req, res) {
  res.render('postimage');
});

router.get("/posts/:id(\\d+)", getPostByID, getCommentsForPostById ,function(req, res) {
  res.render('viewpost');

});



module.exports = router;
