var browserify = require('browserify-middleware');
var express = require('express');
var app = express();
app.use(express.static('public'));

app.get('/app.js', browserify('./lib/app.js', {standalone: 'tasky'}));

app.get('/tasks/shopping', function (req, res) {
  res.send([
    'cows',
    'pigs',
    'vegetables'
  ]);
});

app.get('*', function (req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(3000, function(){
  console.log('listening on http://localhost:3000');
});
