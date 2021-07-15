var nodemailer = require("nodemailer");

var smtpTransport = nodemailer.createTransport({
  host: "smtp.gmail.com",
  secureConnection: false,
  port: 587,
  auth: {
    user: "<Email Id>", // your actual email
    pass: "<Password>", // your actual password
  },
});

// send email without attachment
var mailOptions = {
  from: "<YOUR EMAIL ID>",
  to: "<RECIEVER EMAIL ID>",
  //   bcc : "<BCC RECIEVER ID>", // bcc is optional.
  subject: "<Subject>",
  text: "<Body>",
  //   html: "<HTML>"
};

smtpTransport.sendMail(mailOptions, function (error, res) {
  if (error) {
    //console.log(error);
    res.end("error");
  } else {
    //console.log("Message sent: " + response.message);
    res.end("sent");
  }
});

// send email with attachment
// var mailOptions={
//                   from: "<YOUR EMAIL ID>",
//   to: "<EMAIL ID TO WHOM YOU WANT TO SEND>",
//                   subject : "email with attachment" ,
//                   text : "This is the body part",
//                   attachments : [{
//                                    filename and path
//                                    path: '<FILEPATH>'
//                      }]
// }
// smtpTransport.sendMail(mailOptions, function(error, response){
//                 if(error){
//                      console.log(error);
//                    res.end("error");
//               }else{
//                    console.log("Message sent: " + response.message);
//                  res.end("sent");
//              }
// });
