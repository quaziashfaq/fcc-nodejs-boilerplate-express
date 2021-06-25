require('dotenv').config();
var express = require('express');
var app = express();

var bodyParser = require('body-parser');

console.log("Hello World");


app.use(
  bodyParser.urlencoded({extended: false})
);

app.use(
  (req, res, next) => {
    console.log(req.method + " " + req.path + " - " + req.ip);
    next();
  }
);
app.use('/public', express.static(__dirname + '/public'));


app.get('/', 
  (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
  });


app.get('/json', 
  (req, res) => {
    message = "Hello json";
    console.log(process.env);
    if (process.env['MESSAGE_STYLE'] == "uppercase"){
      message = message.toUpperCase();
      console.log(message);
    }
    res.json({"message": message});
  });

app.get('/now', 
  (req, res, next) => {
    d = new Date();
    console.log(d);
    req.time = d.toString();  
    console.log(req.time);
    next();
  },
  (req, res) => {
    res.json({
      "time": req.time
    });
  }
);

app.get('/:word/echo', 
  (req, res) => {
    res.json({"echo": req.params.word});
  }
);


app.route('/name')
  .get((req, res) => {
    name = req.query.first + " " + req.query.last;
    res.json({"name": name});
  })
  .post((req, res) => {
    name = req.body.first + " " + req.body.last;
    res.json({"name": name});
  });



 module.exports = app;
