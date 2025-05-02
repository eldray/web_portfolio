const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json());

// Nodemailer transporter configuration
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const rateLimit = require("express-rate-limit");
app.use(
  "/api/contact",
  rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 10, // Limit to 10 requests per IP
  })
);

// Contact form endpoint
app.post("/api/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Validate input
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  // Email options
  const mailOptions = {
    from: email,
    to: process.env.RECEIVER_EMAIL,
    subject: `New Contact Form Submission: ${subject}`,
    text: `
            Name: ${name}
            Email: ${email}
            Subject: ${subject}
            Message: ${message}
        `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Message sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send message" });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
