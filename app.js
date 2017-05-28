var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    router = express.Router();

//Config
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
  res.render('home.ejs');
});

app.listen(process.env.Port || 3000, function() {
  console.log("Email App Server is Running!")
})
