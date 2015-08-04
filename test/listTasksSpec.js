var createApp = require('../lib/app');
var mountApp = require('./mountApp');
var tasks = require('./tasksPage');
var createServer = require('mock-xhr-router');

describe('list of tasks', function(){
  var server;
  var taskLists;

  beforeEach(function () {
    server = createServer();
    taskLists = {};

    server.get('/tasks/:name', function (request) {
      return {
        status: 200,
        body: taskLists[request.params.name]
      };
    });
  });

  context('with a shopping list', function () {
    beforeEach(function () {
      taskLists.shopping = [
        'milk',
        'bread',
        'chocolate'
      ];
    });

    it('shows each task', function() {
      mountApp(createApp, {url: '/shopping'});

      return tasks.names().shouldHave({text: [
        'milk',
        'bread',
        'chocolate'
      ]});
    });

    it('removes a task when it is completed', function(){
      mountApp(createApp, {url: '/shopping'});

      return tasks.task('bread').completeButton().click().then(function(){
        return tasks.names().shouldHave({text: ['milk', 'chocolate']});
      })
    });
  })
});
