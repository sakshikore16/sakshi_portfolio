import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5003;

app.use(cors());
app.use(express.json());

// Main contact submission route
app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Validation checks
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: 'All form fields are required' });
  }

  const emailRegex = /\S+@\S+\.\S+/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'Please provide a valid email address' });
  }

  console.log(`[Form Submission Recieved] Name: ${name}, Email: ${email}, Subject: ${subject}`);

  // Check if SMTP is configured. If not, log to console and simulate success.
  const isSmtpConfigured = 
    process.env.SMTP_HOST && 
    process.env.SMTP_USER && 
    process.env.SMTP_PASS &&
    process.env.SMTP_HOST !== 'smtp.example.com';

  if (!isSmtpConfigured) {
    console.warn('--- WARNING: SMTP Credentials not configured in .env ---');
    console.log('Simulating successful form submission. Below are the email logs:');
    console.log(`
=========================================
EMAIL TO OWNER (Sakshi Kore):
Subject: New Portfolio Inquiry: ${subject}
Content:
Name: ${name}
Email: ${email}
Message: ${message}
=========================================
AUTO-REPLY TO SENDER (${email}):
Subject: Received: "${subject}" - Sakshi Kore
Content:
Dear ${name},
Thank you for reaching out. I have received your message regarding "${subject}" and will respond shortly.
Best,
Sakshi Kore
=========================================
    `);
    
    return res.status(200).json({ 
      success: true, 
      message: 'Dev mode: Submission received successfully (logged to server console).' 
    });
  }

  // Configure Nodemailer transporter
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true', // true for 465, false for 587
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  // HTML Email template to Sakshi Kore
  const ownerEmailHtml = `
    <div style="font-family: 'Georgia', serif; padding: 20px; background-color: #f7f4ef; color: #1c1917; max-width: 600px; border: 1px solid #d6cebf;">
      <div style="border-bottom: 2px solid #bc5a42; padding-bottom: 10px; margin-bottom: 20px;">
        <span style="font-family: sans-serif; font-size: 0.75rem; font-weight: bold; color: #bc5a42; letter-spacing: 0.1em; text-transform: uppercase;">New Inquiry</span>
        <h2 style="margin: 5px 0 0 0; font-weight: normal; font-size: 1.8rem;">Portfolio Message Log</h2>
      </div>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
        <tr style="border-bottom: 1px solid #efe9de;">
          <td style="padding: 10px 0; font-weight: bold; width: 120px;">Sender:</td>
          <td style="padding: 10px 0;">${name}</td>
        </tr>
        <tr style="border-bottom: 1px solid #efe9de;">
          <td style="padding: 10px 0; font-weight: bold;">Email:</td>
          <td style="padding: 10px 0;"><a href="mailto:${email}" style="color: #bc5a42; text-decoration: none;">${email}</a></td>
        </tr>
        <tr style="border-bottom: 1px solid #efe9de;">
          <td style="padding: 10px 0; font-weight: bold;">Subject:</td>
          <td style="padding: 10px 0;">${subject}</td>
        </tr>
      </table>
      <div style="background-color: #ffffff; padding: 15px; border-left: 3px solid #c29f5f; font-size: 1.05rem; line-height: 1.6;">
        ${message.replace(/\n/g, '<br/>')}
      </div>
      <div style="margin-top: 30px; border-top: 1px solid #d6cebf; padding-top: 10px; font-size: 0.75rem; color: #6b5e52; text-transform: uppercase; font-family: sans-serif; letter-spacing: 0.05em;">
        Sent via portfolio.sakshikore.dev
      </div>
    </div>
  `;

  // HTML Email auto-reply template to Sender
  const senderEmailHtml = `
    <div style="font-family: 'Georgia', serif; padding: 25px; background-color: #f7f4ef; color: #1c1917; max-width: 600px; border: 1px solid #d6cebf; margin: 0 auto;">
      <div style="text-align: center; border-bottom: 1px solid #d6cebf; padding-bottom: 15px; margin-bottom: 20px;">
        <div style="width: 42px; height: 42px; border-radius: 50%; background: radial-gradient(circle, #bc5a42 40%, #c29f5f 100%); display: inline-flex; align-items: center; justify-content: center; font-family: sans-serif; font-weight: bold; color: #f7f4ef; font-size: 1.1rem; line-height: 1;">एसके</div>
        <h3 style="margin: 10px 0 0 0; font-weight: normal; font-size: 1.5rem; text-transform: uppercase; letter-spacing: 0.05em;">साक्षी कोरे</h3>
        <span style="font-family: sans-serif; font-size: 0.65rem; color: #6b5e52; text-transform: uppercase; letter-spacing: 0.1em;">portfolio message received</span>
      </div>
      
      <p style="font-size: 1.1rem; line-height: 1.6; margin-bottom: 15px;">Hello ${name},</p>
      
      <p style="font-size: 1.05rem; line-height: 1.6; color: #333; margin-bottom: 20px;">
        Thank you for getting in touch. I've successfully received your inquiry regarding <strong>"${subject}"</strong>.
      </p>
      
      <p style="font-size: 1.05rem; line-height: 1.6; color: #333; margin-bottom: 20px;">
        I'm currently reviewing the details and will write back to you shortly. In the meantime, feel free to inspect my project archives on GitHub or connect with me via LinkedIn.
      </p>

      <div style="margin: 25px 0; padding: 15px; background-color: #ffffff; border: 1px solid #efe9de; font-size: 0.95rem;">
        <strong style="display: block; margin-bottom: 5px; color: #bc5a42;">Message Log Summary:</strong>
        <span style="color: #6b5e52; font-style: italic;">"${message.length > 80 ? message.substring(0, 80) + '...' : message}"</span>
      </div>

      <div style="border-top: 1px solid #d6cebf; padding-top: 15px; margin-top: 25px; text-align: center; font-family: sans-serif; font-size: 0.75rem; color: #6b5e52;">
        <a href="https://github.com/sakshikore" style="color: #1c1917; text-decoration: none; margin: 0 10px; font-weight: bold;">GitHub</a> |
        <a href="https://linkedin.com/in/sakshikore" style="color: #1c1917; text-decoration: none; margin: 0 10px; font-weight: bold;">LinkedIn</a> |
        <a href="mailto:sakshikore@example.com" style="color: #1c1917; text-decoration: none; margin: 0 10px; font-weight: bold;">Email Inbox</a>
      </div>
    </div>
  `;

  try {
    // Send email to owner
    await transporter.sendMail({
      from: `"${name}" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      to: process.env.RECEIVER_EMAIL || process.env.SMTP_USER,
      replyTo: email,
      subject: `Portfolio Inquiry: ${subject}`,
      html: ownerEmailHtml
    });

    // Send auto-reply to sender
    await transporter.sendMail({
      from: `"Sakshi Kore" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      to: email,
      subject: `Received: "${subject}" - Sakshi Kore`,
      html: senderEmailHtml
    });

    console.log(`[Email Sent successfully] Inquiry confirmation dispatched.`);
    res.status(200).json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('[Mail Dispatch Error]:', error);
    res.status(500).json({ 
      message: 'SMTP Transport issue. Please ensure host connection and login parameters are correct.' 
    });
  }
});

// Basic server diagnostics
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'active', serverTime: new Date() });
});

app.listen(PORT, () => {
  console.log(`Backend server active on http://localhost:${PORT}`);
});
