var browser = require('browser-monkey');
var createApp = require('../lib/app');
var tasks = browser.extend({
  all: function(){
    return this.find('ul.tasks li');
  },

  first: function(){
    return this.find('ul.tasks li:first-child').component({
      complete: function(){
        return this.find('button.complete');
      }
    });
  }
});

function mountApp(app){
  var testContainer = document.querySelector('div#test');
  if (testContainer) {
    testContainer.parentNode.removeChild(testContainer);
  }
  testContainer = document.createElement('div');
  testContainer.id = 'test';
  testContainer.appendChild(app);
  document.body.appendChild(testContainer);
}

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

  it('removes a task once it has been completed', function(){
    var app = createApp({tasks: taskList});
    mountApp(app);

    return tasks.first().complete().click().then(function(){
      return tasks.all().shouldHave({text: [
        'Implement feature',
        'Refactor'
      ]});
    });
  });
});
