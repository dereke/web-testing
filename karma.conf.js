module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['browserify', 'mocha'],
    files: [
      'test/globals.js',
      'test/**/*Spec.js'
    ],
    exclude: [
      'test/**/*.sw?'
    ],
    preprocessors: {
      'test/globals.js': ['browserify'],
      'test/**/*Spec.js': ['browserify']
    },
    browserify: {
      debug: true,
      transform: ['html2js-browserify']
    },
    proxies: {
      '/google': 'http://google.co.uk'
    },
    urlRoot: '/',
    browserNoActivityTimeout: 180000,
    reporters: ['mocha'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  });
};
