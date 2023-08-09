const nodemailer = require('nodemailer');

//new Email(user, url).sendWelcome();

module.exports = class Email {
  constructor() {
    this.to = user.email;
    this.firstName = user.name.split(' ')[0];
    this.url = url;
    this.from = `cmt <${process.env.EMAIL_FROM}>`;
  }

  createTransport() {
    if (process.env.NODE_ENV === 'production') {
      //sendgrid
      return 1;
    }
    return (transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    }));
  }

  send(template, subject) {
    //send the actual email

  }

  sendWelcome() {
    this.send('welcome','Welcome ')
  }
};

const sendEmail = async (options) => {
  //1) Create a transporter
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
  //2)Define the email options
  const mailOptions = {
    from: 'cmt <hello@cmt.io>',
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  //3)Actually send the email
  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;