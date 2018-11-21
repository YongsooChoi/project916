var express = require('express');
var mysql      = require('mysql');
var dbconfig   = require('../config/config.js');
var connection = mysql.createConnection(dbconfig);
var app = express();

var router = express.Router();

/* GET farmers listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

app.get('/farmers', function(req, res){

	  connection.query('SELECT * FROM farmers', function(err, rows) {
	    if(err) throw err;

	    console.log('The solution is: ', rows);
	    res.send(rows);
	  });
	});


module.exports = router;
