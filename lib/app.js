var $ = require('jquery');

function currentListName() {
  var match = /\/([^/]+)/.exec(location.pathname);
  return match && match[1];
}

module.exports = function(listName){
  var app = document.createElement('ul');
  app.className = 'tasks';

  var listName = currentListName();
  if (listName) {
    $.get('/tasks/' + listName).then(function (data) {
      data.forEach(function(task) {
        var taskEl = document.createElement('li');
        taskEl.className = 'task';
        var name = document.createElement('span');
        name.className = 'name';
        name.innerText = task;
        taskEl.appendChild(name);
        app.appendChild(taskEl);
      });
    });
  }

  return app;
}
