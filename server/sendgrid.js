require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sgMail = require('@sendgrid/mail'); // Import SendGrid package

const app = express();
// Initialize the app
app.use(cors());

app.use(express.json());
const port = 4000;

// Middleware to parse JSON and URL-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set SendGrid API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Route to handle email sending
app.post('/send-email', async (req, res) => {
  const { name, email, message, phone, eventType } = req.body;

  // Email options for SendGrid
  const msg = {
    to: process.env.EMAIL_USER, // The recipient email
    from: process.env.SENDGRID_FROM_EMAIL, // Verified sender email in SendGrid
    subject: `New Message from Contact Form for ${eventType}`,
    text: `
      You have received a new message from ${name} (${email}):

      ${message}
    `,
    html: `
      <h3>New message from contact form for ${eventType}</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  };

  try {
    // Send the email with SendGrid
    await sgMail.send(msg);
    console.log('Email sent successfully');
    return res.status(200).json({
      success: true,
      message: 'Email sent successfully',
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({
      success: false,
      message: 'Error sending email - backend',
      error: error.toString(),
    });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
