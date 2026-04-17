import { Request, Response } from 'express';
import { Resend } from 'resend';
RESEND_API_KEY=re_6burMroo_JFE38CHYc4kdmXNXs7ZDYXJ2


export default async function contactHandler(req: Request, res: Response) {
  // Ensure we only process POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { fullName, email, service, message } = req.body;

  if (!fullName || !email || !service || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  // Check for Resend API key
  const resendApiKey = process.env.RESEND_API_KEY;

  if (!resendApiKey) {
    console.error("RESEND_API_KEY is missing in environment variables.");
    return res.status(500).json({ 
      error: "Server configuration error. Please ensure the Resend API key is set in the environment variables." 
    });
  }

  try {
    const resend = new Resend(resendApiKey);

    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      replyTo: email,
      to: "jerrodjey@gmail.com",
      subject: `New Project Inquiry: ${service}`,
      text: `Name: ${fullName}\nEmail: ${email}\nService: ${service}\n\nMessage:\n${message}`,
      html: `
        <h3>New Project Inquiry</h3>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return res.status(500).json({ error: "Failed to send email via Resend. Please try again later." });
    }

    // Return the response like express normally would
    return res.json({ success: true, data });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ error: "Failed to send email. Please try again later." });
  }
}
