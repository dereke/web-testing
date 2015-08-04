var mount = require('./mount');

module.exports = function(createApp, options) {
  var div = mount(options);
  div.appendChild(createApp());
};
