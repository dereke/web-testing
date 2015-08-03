module.exports = function(data){
  var app = document.createElement('ul'); 
  app.className = 'tasks';

  data.tasks.forEach(function(task){
    var taskEl = document.createElement('li');
    var label = document.createTextNode(task);
    var completeEl = document.createElement('button');
    completeEl.className = 'complete';
    completeEl.innerText = 'Complete';
    completeEl.onclick = function(){
      taskEl.parentNode.removeChild(taskEl);
    };
    taskEl.appendChild(label);
    taskEl.appendChild(completeEl);
    app.appendChild(taskEl);
  });

  return app;
}
