const nodemailer = require('nodemailer');

const { EMAIL_USERNAME, EMAIL_PASSWORD } = require('../backend_api_key.json'); 

const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
          user: EMAIL_USERNAME,
          pass: EMAIL_PASSWORD,
      },
});

function send_mail(mail_data)
{
      transporter.sendMail( mail_data );
}

module.exports = send_mail;

