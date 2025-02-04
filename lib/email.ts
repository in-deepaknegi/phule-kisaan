import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: "smtp.zoho.in",
    port: 465,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

export const sendVerificationEmail = async (user: any) => {
    // const verificationUrl = `${process.env.NEXT_PUBLIC_APP_URL}/verify?token=${token}`;

    const mailContent = `
    <h1>Thank You for Registering, ${user.name}!</h1>
    <p>We are excited to have you at the event. Please find your unique QR code for event entry below:</p>
    <p><strong>Details:</strong></p>
    <ul>
      <li>Name: ${user.name}</li>
      <li>Email: ${user.email}</li>
      <li>Phone: ${user.phone}</li>
      <li>City: ${user.city}</li>
    </ul>
    <p><img src="cid:qrCodeImage" alt="QR Code" /></p>
    <p>Save this QR code and present it at the event for easy entry.</p>
  `;
    await transporter.sendMail({
        from: `"Event Team" <${process.env.EMAIL_USER}>`,
        to: user.email,
        subject: "Your Event Registration QR Code",
        html: mailContent,
        attachments: [
            {
              filename: "qrCode.png",
              path: user.qrCodeUrl, 
              cid: "qrCodeImage", 
            },
          ],
    });
};