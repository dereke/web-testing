var mountSite = require('./mountSite');
var tasksPage = require('./tasksPage');

describe('integration test', function(){
  it('shows each task', function(){
    var page = mountSite({url: '/shopping'});
    var tasks = tasksPage.scope(page);
    var allTasks = tasks.names();

    return Promise.all([
      allTasks.shouldHave({text: [
        'cows',
        'pigs',
        'vegetables'
      ]}),
      allTasks.shouldNotHave({text: 'Something else'})
    ]);
  });
});
