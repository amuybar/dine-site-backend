// functions/submitOrder.js
const dbQueries = require('../db/dbQueries');
// functions/submitOrder.js
const orderController = require('../controllers/orderController');

exports.handler = async (event, context) => {
  return orderController.submitOrder(event, context);
};

exports.handler = async (event, context) => {
  const { name, price, description, email } = JSON.parse(event.body);

  try {
    await dbQueries.insertOrder(name, price, description, email);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Order submitted successfully' }),
    };
  } catch (error) {
    console.error('Error submitting order:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to submit order' }),
    };
  }
};
