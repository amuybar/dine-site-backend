// functions/sendEmail.js
const emailService = require('../services/emailServices');
const emailController = require('../controllers/emailController');

exports.handler = async (event, context) => {
  return emailController.sendEmail(event, context);
};

exports.handler = async (event, context) => {
  const { to, subject, body } = JSON.parse(event.body);

  try {
    await emailService.sendConfirmationEmail(to, subject, body);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully' }),
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to send email' }),
    };
  }
};
