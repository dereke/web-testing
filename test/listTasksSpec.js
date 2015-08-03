var createApp = require('../lib/app');
var mountApp = require('./mountApp');
var tasks = require('./tasksPage');

describe('list of tasks to complete', function(){
  var taskList = [
    'Write tests',
    'Implement feature',
    'Refactor'
  ];

  it('shows each task', function(){
    var app = createApp({tasks: taskList});
    mountApp(app);

    return tasks.all().shouldHave({text: [
      'Write tests',
      'Implement feature',
      'Refactor'
    ]});
  });

  describe('complete', function(){
    beforeEach(function(){
      var app = createApp({tasks: taskList});
      mountApp(app);
    });

    it('each task has a complete button', function(){
      return tasks.all().find('button').shouldHave({text: ['Complete', 'Complete', 'Complete']})
    });

    it('removes a task once it has been completed', function(){
      return tasks.first().complete().click().then(function(){
        return tasks.all().shouldHave({text: [
          'Implement feature',
          'Refactor'
        ]});
      });
    });

  });
});
