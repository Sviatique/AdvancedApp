module.exports = function(config) {
  config.set({
    basePath: './',
    frameworks: ['jasmine'],
    files: [
        'build/index.js',
        'node_modules/angular-mocks/angular-mocks.js',
        'app/test/unit/**/*.js'
    ]
  });
};