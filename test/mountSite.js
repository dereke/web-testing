var mount = require('./mount');

module.exports = function(options){
  var url = options && options.url || '/';

  var iframe = document.createElement('iframe');
  iframe.src = url;

  var div = mount();
  div.appendChild(iframe);

  return iframe;
};
