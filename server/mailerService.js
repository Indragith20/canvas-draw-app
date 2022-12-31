/* eslint-disable no-undef */
import nodeMailer from 'nodemailer';
let transporter = nodeMailer.createTransport({
  host: "smtp.gmail.com",
  service: "gmail",
  secure: true,
  port: 587,
  auth: {
    user: process.env.FROM_MAIL_ADDRESS,
    pass: process.env.FROM_MAIL_PASSWORD,
  },
});


export function sendPasswordResetMail(email, content) {

  return new Promise((resolve, reject) => {
    // let transporter = nodeMailer.createTransport({
    //   host: "smtp.zoho.in",
    //   secure: true,
    //   port: 465,
    //   auth: {
    //     user: process.env.FROM_MAIL_ADDRESS,
    //     pass: process.env.FROM_MAIL_PASSWORD,
    //   },
    // });
    const mailOptions = {
      from: 'support-drawanything <iplrating2018@gmail.com>',
      to: email,
      subject: "Reset your password for Draw Anything Application",
      html: content, // plain text body
      priority: 'high'
    };
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        reject(err);
      } else {
        resolve({ message: 'Mail Sent Successfully', info: info })
      }
    })
  })

}