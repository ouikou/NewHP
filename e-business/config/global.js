var fs = require('fs'),
  path = require('path'),
  rootPath = path.normalize(__dirname + '/..');

module.exports = {

  test: {
    root: rootPath,
    app: {
      name: 'EBusiness - HomePage [TEST]',
      env: 'test',
      port: 8080
    }
  },

  development: {
    root: rootPath,
    app: {
      name: 'EBusiness - HomePage [DEV]',
      env: 'development',
      port: 8081
    }
  },

  production: {
    root: rootPath,
    app: {
      name: 'EBusiness - HomePage',
      env: 'production',
      port: 80
    }
  }
};