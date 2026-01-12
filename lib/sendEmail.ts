import nodemailer from 'nodemailer';

const sendEmail = async (options: { email: string; subject: string; message: string; html?: string }) => {
    // Check if credentials are properly set
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
        console.warn("EMAIL_USER or EMAIL_PASS not set in environment variables.");
        // We throw here so the error is caught in the API route and proper feedback is sent
        throw new Error("Server email configuration error.");
    }

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const message = {
        from: `"${process.env.SMTP_FROM_NAME || 'iConcur'}" <${process.env.EMAIL_USER}>`,
        to: options.email,
        subject: options.subject,
        text: options.message,
        html: options.html,
    };

    const info = await transporter.sendMail(message);

    console.log('Message sent: %s', info.messageId);
};

export default sendEmail;
