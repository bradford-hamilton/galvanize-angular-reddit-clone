var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('*', function(request, response, next) {
  response.sendFile('index.html');
});

app.listen(process.env.PORT || 1337);
