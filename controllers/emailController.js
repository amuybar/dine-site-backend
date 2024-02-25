const dbQueries = require('../db/dbQueries');
const emailService = require('../services/emailServices');

exports.sendEmail = async (req, res) => {
  const { to, subject, body } = req.body;
  try {
    await emailService.sendConfirmationEmail(to, subject, body);
    res.json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
};

exports.submitEmail = (req, res) => {
  const { email } = req.body;
  dbQueries.insertEmail(email)
    .then(() => res.status(201).send('Email subscription successful'))
    .catch(err => {
      console.error(err.message);
      res.status(500).send('Failed to subscribe to newsletter');
    });
};
