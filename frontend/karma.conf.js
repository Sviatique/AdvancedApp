module.exports = function(config) {
  config.set({
    basePath: './',
    frameworks: ['jasmine'],
    files: [
        'build/index.js',
        'build/templates.js',
        'node_modules/angular-mocks/angular-mocks.js',
        'test/unit/**/*.js'
    ],
      reporters: ['html'],
      browsers: ['Chrome']
  });
};