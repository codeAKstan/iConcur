import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  // Configure your email service here
  // For development/testing, you can use Ethereal Email or similar
  // For production, use SendGrid, AWS SES, or standard SMTP
  service: 'gmail', // Or 'hotmail', 'yahoo', etc. or host/port configuration
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendWelcomeEmail = async (email: string, name: string) => {
  try {
    const info = await transporter.sendMail({
      from: process.env.EMAIL_FROM || '"iConcur Team" <noreply@iconcur.com>',
      to: email,
      subject: 'Welcome to iConcur!',
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>Welcome to iConcur, ${name}!</h2>
          <p>We are thrilled to have you on board. iConcur is here to simplify your agreement process.</p>
          <p>You can now log in to your dashboard and start drafting or analyzing contracts.</p>
          <br/>
          <p>Best regards,</p>
          <p>The iConcur Team</p>
        </div>
      `,
    });
    console.log('Message sent: %s', info.messageId);
    return info;
  } catch (error) {
    console.error('Error sending welcome email:', error);
    // Don't throw error to prevent blocking the signup flow if email fails
    return null;
  }
};
