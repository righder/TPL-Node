var express = require('express');
var router = express.Router();
const nodemailer = require('nodemailer')
var userModel = require('../models/user');
var user = userModel.find({});

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Vichayan' });
});

router.post("/", (req, res) => {

  var userDetails = new userModel({
    name: req.body.uname,
    email: req.body.email,
    phone: req.body.phone
  });
  userDetails.save()
  console.log("Record Inserted Successfully");

  let transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'righdergamer@gmail.com',
      pass: '7978455928'
    }
  });
  const message = {
    from: 'righdergamer@gmail.com', // Sender address
    to: req.body.email,         // List of recipients
    subject: 'Registered For Vichayan', // Subject line
    text: `${req.body.uname} Have a great time exploring Vichayan`// Plain text body
  }
  transport.sendMail(message, function (err, info) {
    if (err) {
      console.log(err)
    } else {
      console.log(info);
    }
  });



  return res.json({
    "status": true,
    "response": 200,
    "message": "Successful"
  });
});


module.exports = router;
