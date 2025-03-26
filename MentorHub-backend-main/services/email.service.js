const path = require("path");
const ejs = require("ejs");
const nodemailer = require("nodemailer");
const config = require("../config");

const transport = nodemailer.createTransport(config.email);

transport
  .verify()
  .then(() => console.log("Connected to email server"))
  .catch(() => {
    console.error("Unable to connect to email server.");
  });

const sendEmail = async (to, subject, html) => {
  try {
    const msg = { from: config.email.from, to, subject, html };
    await transport.sendMail(msg);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

const sendConfirmationMail = async (to, name, meetingLink, date, time) => {
  const subject = "Booking Confirmation";

  const template = path.join(__dirname, "../template/confirmation.ejs");
  const data = await ejs.renderFile(template, {
    name,
    meetingLink,
    date,
    time,
  });

  return sendEmail(to, subject, data);
};

module.exports = {
  sendConfirmationMail,
};
