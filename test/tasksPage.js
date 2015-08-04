var browser = require('browser-monkey');

module.exports = browser.component({
  names: function(){
    return this.find('ul.tasks li .name');
  }
});
