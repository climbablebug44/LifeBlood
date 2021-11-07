const nodemailer = require('nodemailer');

const { EMAIL_USERNAME, EMAIL_PASSWORD } = require('../backend_api_key.json'); 

//EMAIL_USERNAME = "lifeblood.synergy@gmail.com"
//EMAIL_PASSWORD = "eYzx345ituvy@903"

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

/*
const verificationToken = user.generateVerificationToken();

       const url = `http://localhost:3000/api/verify/${verificationToken}`
       transporter.sendMail({
         to: email,
         subject: 'Verify Account',
         html: `Click <a href = '${url}'>here</a> to confirm your email.`
       })

UserSchema.methods.generateVerificationToken = function () {
    const user = this;

    const verificationToken = jwt.sign(
        { ID: user._id },
        process.env.USER_VERIFICATION_TOKEN,
        { expiresIn: "7d" }
    );
    return verificationToken;
};
*/
