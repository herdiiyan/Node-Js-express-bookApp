var express = require('express'),
    app = express(),
    port = process.env.PORT || 3020,
    bodyParser = require('body-parser'),
    controller = require('./controller/bukuController');
var cors = require('cors');

app.use(cors());

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

var routes = require('./router/routes');
routes(app);

app.listen(port);
console.log('Learn Node JS With Kiddy, RESTful API server started on: ' + port);