var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    router = express.Router();

require('dotenv').config();

//Config
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));

var SparkPost = require('sparkpost');
var client = new SparkPost(); // uses process.env.SPARKPOST_API_KEY
var from = 'test@' + process.env.SPARKPOST_SANDBOX_DOMAIN; // 'test@sparkpostbox.com'
var subject = req.body.subject;
var emailText = req.body.emailText;
var ccEmail = req.body.ccEmail;
  client.transmissions.send({
      options: {
        sandbox: false
      },
      content: {
        from: 'testing@sparkpostbox.com',
        subject: subject,
        html:'<html><body><p>Testing SparkPost - the world\'s most awesomest email service!</p></body></html>'
      },
      recipients: [
        {address: 'jackbull328@gmail.com'}
      ]
    })
    .then(data => {
      console.log('Woohoo! You just sent your first mailing!');
      console.log(emailText);
      console.log(data);
    })
    .catch(err => {
      console.log('Whoops! Something went wrong');
      console.log(err);
    });
  next();
});
app.get("/", function(req, res) {
  res.render('home.ejs');
});

app.listen(process.env.Port || 3000, function() {
  console.log("Email App Server is Running!")
})
