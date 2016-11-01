
var morgan = require('morgan');
var dishRouter = require('./dishRouter');
var express = require('express');

var hostname = 'localhost';
var port = 3000;

var app = express();

app.use(morgan('dev'));
app.use('/dishRouter', dishRouter);

app.use('/dishes', dishRouter);

app.use(express.static(__dirname + '/public'));

app.listen(port, hostname, function() {
    console.log(`Server running at http://${hostname}:${port}/`);
});
