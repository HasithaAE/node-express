const nodemailer = require('nodemailer');
const express = require('express');
const app = express();


// Set up nodemailer transporter
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'maude.wilkinson@ethereal.email',
    pass: 'PRnrMkPG3p9YsbB2yy',
  },
});

// Function to send the email
function sendEmail(data) {
  const { username, address, request } = data;
  const mailOptions = {
    from: 'do_not_reply@northpole.com',
    to: 'santa@northpole.com',
    subject: 'Pending Requests',
    html: `<p>Child Username: ${username}</p>
           <p>Child Address: ${address}</p>
           <p>Request: ${request}</p>`,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log(`Email sent: ${info.response}`);
    }
  });
}

// Function to get pending requests and send the email
function sendPendingRequests() {
  // Code to get all pending requests from the database or any other storage
  const pendingRequests = [
    {
      username: 'charlie.brown',
      address: '219-1130, Ikanikeisaiganaibaai, Musashino-shi, Tokyo',
      request: 'I want a red bicycle for Christmas!',
    },
    // Add more pending requests here...
  ];

  // Send an email for each pending request
  pendingRequests.forEach((request) => {
    sendEmail(request);
  });
}

// Set up interval to send email every 15 seconds
setInterval(sendPendingRequests, 15000);

// Start the Express.js server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
