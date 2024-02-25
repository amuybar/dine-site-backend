const nodemailer = require('nodemailer');

exports.sendConfirmationEmail = async (to, subject, body) => {
  try {
    // Configure nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'odaribq@gmail.com',
        pass: 'lvtb rffi xioo jyoi'
      }
    });

    // Construct email options
    const mailOptions = {
      from: 'odaribq@gmail.com', // Update with your email
      to,
      subject,
      text: body,
      replyTo: 'noreply@example.com'
    };

    // Send email
    await transporter.sendMail(mailOptions);
  } catch (error) {
    throw error;
  }
};
