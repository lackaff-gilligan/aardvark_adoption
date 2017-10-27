var express = require('express');
var router = express.Router();

var pg = require('pg');
var config = {
    database: 'my_practice', // the name of the database
    host: 'localhost', // where is the database?
    port: 5432, // the port number of the database, 5432 is the default
    max: 10, // how many connections at one time
    idleTimeoutMillis: 30000 // close idle connections to db after 3 seconds
}

var pool = new pg.Pool(config);


module.exports = router;