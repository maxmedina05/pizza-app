const nodemailer = require('nodemailer');
require('dotenv').config();

module.exports = function() {
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: process.env.SMTP_PORT,
    secure: true, // secure:true for port 465, secure:false for port 587
    auth: {
      user: 'el.pequeno.cesar.webapp@gmail.com',
      pass: 'P@ssword2017'
    }
  });
  
  function sendDeliveredMail(user, order) {
    var params = {
      from: 'el.pequeno.cesar.webapp@gmail.com',
      to: user.email,
      subject: 'Your Pizza was delivered!',
      text: 'Your ' + order.pizza.title + ' was delivered'
    };

    transporter.sendMail(params, (error, info) => {

      if (error) {
        return console.log(error);
      }
      console.log('Message %s sent: %s', info.messageId, info.response);
    });
  }

  return {
    sendDeliveredMail: sendDeliveredMail
  }
};
