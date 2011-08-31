var express = require('express');

var server = express.createServer();

server.configure( 
    function() {
	server.use(express.static(__dirname + '/root/'));
	server.enable("jsonp callback");
    }
);

server.get('/motd', 
    function(req, res) {
    	res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.json('All your base are belong to us '+req.query.name+'.');
    }
);

server.get(/^.*$/, 
    function(req, res) {
	res.redirect('/index.html');
    }
);

var port = process.env.PORT || 9999;

server.listen(port);
