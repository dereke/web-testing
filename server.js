var browserify = require('browserify-middleware');
var express = require('express');
var app = express();
app.use(express.static('public'));
app.get('/app.js', browserify('./lib/app.js', {standalone: 'tasky'}));

app.listen(3000, function(){
  console.log('listening on http://localhost:3000');
});

