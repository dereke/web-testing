module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['browserify', 'mocha'],
    files: [
      'test/**/*Spec.js'
    ],
    exclude: [
      'test/**/*.sw?'
    ],
    preprocessors: {
      'test/**/*Spec.js': ['browserify']
    },
    browserify: {
      debug: true
    },
    proxies: {
      '/': 'http://localhost:3000/'
    },
    urlRoot: '/karma/',
    browserNoActivityTimeout: 180000,
    reporters: ['mocha'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_WARN,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  });
};
