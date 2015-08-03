module.exports = function mountApp(app){
  var testContainer = document.querySelector('div#test');
  if (testContainer) {
    testContainer.parentNode.removeChild(testContainer);
  }
  testContainer = document.createElement('div');
  testContainer.id = 'test';
  testContainer.appendChild(app);
  document.body.appendChild(testContainer);
}
