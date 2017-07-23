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
      text: 'Your ' + order.pizza.title + ' was delivered',
      html: '<div style="font-family: "Roboto","Helvetica Neue",Helvetica,Arial,sans-serif;font-size: 13px;line-height: 1.846; border: 1px #BDBDBD solid; border-radius: 6px; padding: 16px 32px; margin-bottom: 8px; background-color: #FFF;"> <span style="background-color: #F44336; color: #FFF;padding: 8px;font-size: 24px;">El Pequeño Cesar</span> <p class="background-color: #F5F5F5; padding-left: 16px"> Your '+ order.pizza.title +' was delivered </p> </div>'
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
