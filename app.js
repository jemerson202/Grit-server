var path = require('path');
var express = require('express');
var fs = require('fs');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var nodemailer = require('nodemailer');
var mg = require('nodemailer-mailgun-transport');
var bodyParser = require('body-parser');
var nconf = require ('nconf');
var auth = require('./config.json');
var cors = require('cors');


const port = process.env.PORT || 8000;

const app = express();
var server = require('http').createServer(app);

app.use(express.static(__dirname + '/src'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());


var accessLogStream = fs.createWriteStream(__dirname + '/access.log', { flags: 'a' });
app.use(logger('dev'));
app.use(logger('combined', { stream: accessLogStream}));

app.get('/', (req,res)=> {
  res.sendFile(path.join(__dirname +'/client/src/index.js'));
  }
);

//handle contact form POST data
app.post('/contact',(req,res)=>{
  var name = req.body.name;
  var email = req.body.email;
  var phone = req.body.phone;
  var participant = req.body.participant;
  var comment = req.body.comment;
  var isError = false;

  if(name) {
    isError = true;
  }

  console.log('\nCONTACT FORM DATA: '+ name + ' '+email + ' '+ comment+'\n');

  var transporter = nodemailer.createTransport(mg(auth));

  var mailOptions = {
    from: 'cplattkuhn@gmail.com',//change this out for YWCA contact info
    to: 'cplattkuhn@gmail.com',//change this out for YWCA contact info
    subject: 'Interest in being involved with GRIT (website contact form submission)',
    text: 'Hello, my name is '+name+'. I am interested in GRIT. My phone number is: '+phone+'. My email is: '+email+'. I am interested in being a '+ participant +'. Additional comments: '+comment+'. ',
    err: isError,
  };

var response = 'submission is successful';

  transporter.sendMail(mailOptions, (error, info)=> {
    if (error) {
      console.log('\nError: ' + error+'\n');
    } else {
      console.log('\nRESPONSE SENT: ' + info.response+'\n');
    }

  });

});


app.listen(port,()=>{console.log('listening on http://localhost:'+ port)
console.log(__dirname)});


module.exports = app;
