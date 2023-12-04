const fs = require("fs");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "avishek.shrestha16@gmail.com",
    pass: "",
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages.");
  }
});

const mailer = async (data) => {
  const messageOptions = {
    from: '"Avishek Shrestha" <avishek.shrestha@gmail.com>', //sender
    to: "avistha26@gmail.com", //receivers
    subject: "QR code from the QR Generator.", //subject line
    html: JSON.stringify(data), //html body
  };
  const info = await transporter.sendMail(messageOptions);
  return info?.messageId;
};

module.exports = mailer;
