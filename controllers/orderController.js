const dbQueries = require('../db/dbQueries');

exports.submitOrder = (req, res) => {
  const { name, price, description, email } = req.body;
  dbQueries.insertOrder(name, price, description, email)
    .then(() => res.json({ message: 'Order submitted successfully' }))
    .catch(err => {
      console.error(err.message);
      res.status(500).json({ error: 'Failed to submit order' });
    });
};
