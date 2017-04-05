var fs = require('fs'),
  path = require('path');

module.exports = function(app, config) {
  app.get('/langswitch/:locale', function(req, res, next){
    req.session.langswitch = req.params.locale;
    res.redirect('back');
  });

  app.get('/', function(req, res, next) {
    console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^');
    console.log({'path':'home', 'langswitch':req.session.langswitch});
    console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^');
    res.render('page/home', {'path':'home', 'langswitch':req.session.langswitch});
  });

  app.get('/home', function(req, res, next) {
    res.render('page/home', {'path':'home', 'langswitch':req.session.langswitch});
  });

  app.get('/about-us', function(req, res, next) {
    res.render('page/about-us', {'path':'about-us', 'langswitch':req.session.langswitch});
  });

  app.get('/services', function(req, res, next) {
    res.render('page/services', {'path':'services', 'langswitch':req.session.langswitch});
  });

  app.get('/products', function(req, res, next) {
    res.render('page/products', {'path':'products', 'langswitch':req.session.langswitch});
  });

  app.get('/recruitment', function(req, res, next) {
    res.render('page/recruitment', {'path':'recruitment', 'langswitch':req.session.langswitch});
  });

  app.get('/contact', function(req, res, next) {
    res.render('page/contact', {'path':'contact', 'langswitch':req.session.langswitch});
  });

  app.get('/login', function(req, res, next) {
    res.render('page/login', {'path':'login', 'langswitch':req.session.langswitch});
  });

  app.get('/privacy', function(req, res, next) {
    res.render('page/privacy', {'path':'privacy', 'langswitch':req.session.langswitch});
  });

  app.get('/terms-of-service', function(req, res, next) {
    res.render('page/terms-of-service', {'path':'terms-of-service', 'langswitch':req.session.langswitch});
  });

  app.get('/margin-rate', function(req, res, next) {
    res.render('page/margin-rate', {'path':'margin-rate', 'langswitch':req.session.langswitch});
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
