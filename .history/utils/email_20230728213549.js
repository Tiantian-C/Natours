const nodemailer = require('nodemailer');


const sendEmail = options => {
    //1) Create a transporter
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.EMAIL_USERNAME,
            pass:
        }
    })



    //2)Define the email options



    //3)Actually send the email



}