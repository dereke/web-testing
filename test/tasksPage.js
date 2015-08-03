var browser = require('browser-monkey');

module.exports = browser.extend({
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

