import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const router = express.Router();

router.post("/send-email", async (req, res) => {
  try {
    const { name, email, phone, service, message } = req.body;

    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      secure: process.env.MAIL_PORT == 465,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Website Contact" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_USER,
      subject: `${name} Has Requested a Project Discussion`,
      html: `
        <h2>New Business Enquiry</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Service:</b> ${service}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    return res.json({ success: true });
  } catch (error) {
    console.log("Email Error:", error);
    return res.status(500).json({ success: false });
  }
});

export default router;
