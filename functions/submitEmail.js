// functions/submitEmail.js
const dbQueries = require('../db/dbQueries');
// functions/submitEmail.js
const emailController = require('../controllers/emailController');

exports.handler = async (event, context) => {
  return emailController.submitEmail(event, context);
};


exports.handler = async (event, context) => {
  const { email } = JSON.parse(event.body);

  try {
    await dbQueries.insertEmail(email);
    return {
      statusCode: 201,
      body: JSON.stringify({ message: 'Email subscription successful' }),
    };
  } catch (error) {
    console.error('Error subscribing to newsletter:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to subscribe to newsletter' }),
    };
  }
};
