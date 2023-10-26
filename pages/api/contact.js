export default function (req, res) {
    require('dotenv').config()
    const PASSWORD = process.env.password
    const EMAIL = process.env.email

    let nodemailer = require('nodemailer')

    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.zoho.com",
        auth: {
          user: 'mailerlittleom@zohomail.com',
          pass: PASSWORD,
        },
        secure: true,
      })

    const mailData = {
        from: 'mailerlittleom@zohomail.com',
        to: EMAIL,
        subject: `Message From ${req.body.name}`,
        text: "treatment: " + req.body.treatment + "\n" + req.body.message + " | Sent from: " + req.body.email,
        html: `<div>treatment: ${req.body.treatment} <br/> ${req.body.message}</div><p>Sent from:
        ${req.body.email}</p>`
    }

    transporter.sendMail(mailData, function (err, info) {
        if(err)
          console.log(err)
        else
          console.log(info)
      })

    res.status(200)
  }