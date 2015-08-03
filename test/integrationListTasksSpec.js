var createApp = require('./serverApp');
var mountApp = require('./mountApp');
var tasksPage = require('./tasksPage');

describe('integration test', function(){
  it('shows each task', function(){
    var app = createApp();
    mountApp(app);
    var tasks = tasksPage.scope(app);
    var allTasks = tasks.all();

    return Promise.all([
      allTasks.shouldHave({text: [
        'Register domain name',
        'Provision server',
        'Deploy application'
      ]}),
      allTasks.shouldNotHave({text: 'Something else'})
    ]);
  });
});
