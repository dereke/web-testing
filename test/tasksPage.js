var browser = require('browser-monkey');

module.exports = browser.component({
  names: function(){
    return this.find('ul.tasks li .name');
  },

  task: function(name){
    return this.find('.task', {text: name}).component({
      completeButton: function(){
        return this.find('button.complete');
      }
    });
  }
});
