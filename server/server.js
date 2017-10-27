// require express - gives me a function
var express = require('express');
// create an instance of express by calling the function above - gives me an object
var app = express();
// a way of redirecting internet traffic
var port = process.env.PORT || 5000;
// body parser is a module that helps us by turning our response body into an object
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));// <- req.body won't work without this
// require the router 
var aardvarkRouter = require('./routes/aardvarkRouter.js');
app.use('/aardvark', aardvarkRouter);
// express static file serving - public is the folder name
app.use(express.static('server/public'));
// start up server
app.listen(port, function(){
    console.log('Server running on port:', port);  
});