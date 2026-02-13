const nodemailer = require('nodemailer');
require('dotenv').config();

const sendEmail = async (content) => {
  const user = process.env.USER;
  const pass = process.env.PASS;

  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: user,
      pass: pass,
    },
  });

  // Professional HTML email template
  const htmlTemplate = `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8">
    <title>Enquiry Regarding ${content.service}</title>
  </head>
  <body style="margin:0; padding:0; font-family: Arial, sans-serif; background-color:#f4f4f4;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f4; padding:20px;">
      <tr>
        <td align="center">
          <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff; border-radius:8px; overflow:hidden; box-shadow:0 2px 6px rgba(0,0,0,0.1);">
            <!-- Header -->
            <tr>
              <td style="background-color:#0d9488; padding:20px; text-align:center; color:#ffffff; font-size:20px; font-weight:bold;">
                Enquiry Regarding: ${content.service}
              </td>
            </tr>
            <!-- Body -->
            <tr>
              <td style="padding:30px; color:#333333; font-size:16px; line-height:1.5;">
                <p><strong>Name:</strong> ${content.name}</p>
                <p><strong>Message:</strong> ${content.message}</p>
                <p><strong>Phone:</strong> ${content.phone}</p>
                <p><strong>Email:</strong> ${content.email}</p>
              </td>
            </tr>
            <!-- Footer -->
            <tr>
              <td style="background-color:#f4f4f4; padding:15px; text-align:center; font-size:12px; color:#777777;">
                © 2026 Your Company. All rights reserved.
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
  </html>
  `;

  const mailOptions = {
    from: user,
    to: user,
    subject: `Enquiry Regarding: ${content.service}`,
    html: htmlTemplate, // use HTML instead of text
  };

  try {
    const result = await transport.sendMail(mailOptions);
    console.log('Email sent:', result.response);
  } catch (error) {
    console.log('Error sending email', error);
  }
};

module.exports = sendEmail;