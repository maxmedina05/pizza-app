const nodemailer = require('nodemailer');
require('dotenv').config();

console.log(process.env.SMTP_HOST);

let transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: true, // secure:true for port 465, secure:false for port 587
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD
    }
});

let mailOptions = {
  from: process.env.GMAIL_USER,
  to: 'maxmedina05@gmail.com',
  subject: 'El Pequeno Cesar Pizza delivered',
  text: 'Hello World!',
  html: 'Hello World!'
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
});

// module.exports = function() {
// };
