var fs = require("fs");
var host = "127.0.0.1";
var port = 1332;
var express = require("express");
var path = require('path');

var app = express();

app.use(express.static(__dirname + "/public")); //use static files in ROOT/public folder

app.get("/app", function(request, response){ //root dir
    response.sendFile(path.join(__dirname+'/home.html'));
});

app.get("/login", function(request, response){ //root dir
    response.sendFile(path.join(__dirname+'/login.html'));
});

app.listen(port, host);