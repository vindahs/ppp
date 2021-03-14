var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/about_us', function(req, res, next) {
    res.render('about_us', { title: 'Express' });
});

router.get('/contact_us', function(req, res, next) {
    res.render('contact_us', { title: 'Express' });
});

router.get('/gallery', function(req, res, next) {
    res.render('gallery', { title: 'Express' });
});

router.get('/project', function(req, res, next) {
    res.render('projects', { title: 'Express' });
});

router.get('/services', function(req, res, next) {
    res.render('services', { title: 'Express' });
});

module.exports = router;
