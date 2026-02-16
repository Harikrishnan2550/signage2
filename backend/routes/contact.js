import express from "express";
import nodemailer from "nodemailer";

const router = express.Router();

router.post("/send-email", async (req, res) => {
  try {
    const { name, email, phone, service, message } = req.body;

    // 🔍 DEBUG: confirm env values are loaded
    console.log("SMTP HOST:", process.env.MAIL_HOST);
    console.log("SMTP PORT:", process.env.MAIL_PORT);
    console.log("SMTP USER:", process.env.MAIL_USER);
    console.log("SMTP PASS EXISTS:", !!process.env.MAIL_PASS);

    const transporter = nodemailer.createTransport({
      host: "smtp-relay.brevo.com", // hardcoded to avoid env issues
      port: 587,
      secure: false,
      auth: {
        user: process.env.MAIL_USER,  // MUST be exactly this
        pass: process.env.MAIL_PASS, // xsmtpsib-...
      },
    });

    // 🔍 Verify SMTP login
    await transporter.verify();
    console.log("✅ Brevo SMTP connected");

    await transporter.sendMail({
      from: "Next Level Signages <no-reply@nextlevelsignages.com>",
      to: "info@nextlevelsignages.com",
      replyTo: email,
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
    console.error("❌ Brevo Email Error:", error);
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

export default router;
