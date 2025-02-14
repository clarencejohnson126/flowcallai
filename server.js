import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();

const app = express();

// Middleware
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
  methods: ['POST', 'GET'],
  allowedHeaders: ['Content-Type']
}));
app.use(bodyParser.json());

// Email configuration
const transporter = nodemailer.createTransport({
  host: "smtp-mail.outlook.com",
  port: 587,
  secure: false,
  auth: {
    user: "thinkbig@rebelz-ai.com",
    pass: process.env.SMTP_PASS
  },
  tls: {
    ciphers: 'SSLv3'
  }
});

// Verify email configuration
transporter.verify(function (error, success) {
  if (error) {
    console.log("Email configuration error:", error);
  } else {
    console.log("Server is ready to send emails");
  }
});

// Newsletter subscription endpoint
app.post('/api/newsletter', async (req, res) => {
  const { email } = req.body;

  try {
    // Send notification email to admin
    await transporter.sendMail({
      from: {
        name: "FlowCall.AI",
        address: "thinkbig@rebelz-ai.com"
      },
      to: "thinkbig@rebelz-ai.com",
      subject: "Neue Newsletter-Anmeldung",
      text: `Neue Newsletter-Anmeldung von:\n\nEmail: ${email}\n\nZeitpunkt: ${new Date().toLocaleString('de-DE', { timeZone: 'Europe/Berlin' })}`
    });

    // Send confirmation email to subscriber
    await transporter.sendMail({
      from: {
        name: "FlowCall.AI",
        address: "thinkbig@rebelz-ai.com"
      },
      to: email,
      subject: "Newsletter-Anmeldung bestätigt - FlowCall.AI",
      text: `Hallo,\n\nVielen Dank für deine Anmeldung zum FlowCall.AI Newsletter!\n\nWir werden dich über die neuesten Entwicklungen und Erfolgsgeschichten auf dem Laufenden halten.\n\nMit freundlichen Grüßen,\nDein FlowCall.AI Team`
    });

    res.status(200).json({ message: "Newsletter subscription successful!" });
  } catch (error) {
    console.error("Error processing newsletter subscription:", error);
    res.status(500).json({ message: "Error processing subscription." });
  }
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, company, phone, message } = req.body;

  try {
    // Send confirmation email to user
    await transporter.sendMail({
      from: {
        name: "FlowCall.AI",
        address: "clarencejohnson@hotmail.de"
      },
      to: email,
      subject: "Ihre Anfrage bei FlowCall.AI",
      text: `Hallo ${name},\n\nVielen Dank für Ihre Anfrage. Wir werden uns schnellstmöglich bei Ihnen melden.\n\nMit freundlichen Grüßen,\nIhr FlowCall.AI Team`
    });

    // Send notification email to admin
    await transporter.sendMail({
      from: {
        name: "FlowCall.AI",
        address: "clarencejohnson@hotmail.de"
      },
      to: "clarencejohnson@hotmail.de",
      subject: "Neue Kontaktanfrage",
      text: `Neue Anfrage von:\n\nName: ${name}\nEmail: ${email}\nUnternehmen: ${company}\nTelefon: ${phone}\nNachricht: ${message}`
    });

    res.status(200).json({ message: "Emails sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Error sending email." });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});