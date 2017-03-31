var fs = require('fs'),
  path = require('path');

module.exports = function(app, config) {

  app.get('/', function(req, res, next) {
    res.render('page/home', {'path':'home'});
  });

  app.get('/home', function(req, res, next) {
    res.render('page/home', {'path':'home'});
  });

  app.get('/about-us', function(req, res, next) {
    res.render('page/about-us', {'path':'about-us'});
  });

  app.get('/services', function(req, res, next) {
    res.render('page/services', {'path':'services'});
  });

  app.get('/products', function(req, res, next) {
    res.render('page/products', {'path':'products'});
  });

  app.get('/recruitment', function(req, res, next) {
    res.render('page/recruitment', {'path':'recruitment'});
  });

  app.get('/contact', function(req, res, next) {
    res.render('page/contact', {'path':'contact'});
  });

  app.get('/login', function(req, res, next) {
    res.render('page/login', {'path':'login'});
  });

  app.get('/privacy', function(req, res, next) {
    res.render('page/privacy', {'path':'privacy'});
  });

  app.get('/terms-of-service', function(req, res, next) {
    res.render('page/terms-of-service', {'path':'terms-of-service'});
  });

  app.get('/margin-rate', function(req, res, next) {
    res.render('page/margin-rate', {'path':'margin-rate'});
  });

  app.get('/resume-template', function(req, res, next) {

    var options = {
      root: global.config.root + '/resources/',
    };

    res.sendFile('resume.xls', options, function(err) {
      if (err) res.status(err.status).end();
    });
  });

  app.get('/certification', function(req, res, next) {

    var options = {
      root: global.config.root + '/resources/',
    };

    res.sendFile('ninsyo2009.pdf', options, function(err) {
      if (err) res.status(err.status).end();
    });
  });
};
