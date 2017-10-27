// requires
var express = require('express');
var bodyParser = require('body-parser');
var aardvarkRouter = require('./routes/aardvarkRouter.js');
// global
var app = express();
var port = process.env.PORT || 5002;
// uses
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use('/aardvark', aardvarkRouter);
// start up server
app.listen(port, function(){
    console.log('Server running on port:', port);  
});