var express = require('express');
var app = express();
var server = app.listen(4001, () => {console.log('Listenning to requests on port 4001...')})

app.use(express.static('public'))