const nodemailer = require('nodemailer');


const sendEmail = options => {
    //1) Create a transporter
    const transporter = nodemailer.createTransport({
        host:process.env.EMAIL_H
        auth: {
            user: process.env.EMAIL_USERNAME,
            pass:process.env.EMAIL_PASSWORD
        }
        
    })



    //2)Define the email options



    //3)Actually send the email



}