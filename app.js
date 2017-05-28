var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    router = express.Router();

//Config
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));

var SparkPost = require('sparkpost');
var client = new SparkPost(); // uses process.env.SPARKPOST_API_KEY
var from = 'test@' + process.env.SPARKPOST_SANDBOX_DOMAIN; // 'test@sparkpostbox.com'
var txObject = {
	campaign: 'first-mailing',
	from: from,
	subject: 'Hello from node-sparkpost',
	html: '<p>Hello world</p>',
	text: 'Hello world',
	substitutionData: {
		"<YOUR_SUBSTITUTION_DATA_KEY_VALUE_PAIRS_HERE>": "value"
	},
	recipients: [
		"<YOUR_LIST_OF_RECIPIENT_OBJECTS_HERE>"
	]
};
app.get("/", function(req, res) {
  res.render('home.ejs');
});

app.listen(process.env.Port || 3000, function() {
  console.log("Email App Server is Running!")
})
