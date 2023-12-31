const nodemailer = require('nodemailer');
const pug = require('pug');
const htmlToText = require('html-to-text');

//new Email(user, url).sendWelcome();

module.exports = class Email {
  constructor() {
    this.to = user.email;
    this.firstName = user.name.split(' ')[0];
    this.url = url;
    this.from = `cmt <${process.env.EMAIL_FROM}>`;
  }

  newTransport() {
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

  //send the actual email
  async send(template, subject) {
    //1) Render HTML based on a pug template
    const html = pug.renderFile(`${__dirname}/../views/emails/${template}.pug`, {
      firstName: this.firstName,
      url: this.url,
      subject
    });

    //2)Define email options
    const mailOptions = {
      from: this.from,
      to: this.to,
      subject,
      html,
      text: htmlToText.fromString(html)
    };

    //3)Create a transport and send email
    await this.newTransport().sendMail(mailOptions);;
  }

  asynsendWelcome() {
    await this.send('welcome', 'Welcome to the Natours Family!');
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

  //3)Actually send the email
 
};

module.exports = sendEmail;
