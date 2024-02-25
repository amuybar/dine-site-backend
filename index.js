const express = require('express');
const cors = require('cors');
const emailRoutes = require('./routes/emailRoutes');
const orderRoutes = require('./routes/orderRoutes');
const PORT = process.env.PORT || 3004;

const app = express();
app.use(cors());
app.use(express.json());

// Route handlers
app.use('/api', emailRoutes);
app.use('/api/orders', orderRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
