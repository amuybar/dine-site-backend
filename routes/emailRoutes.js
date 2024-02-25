const express = require('express');
const router = express.Router();
const emailController = require('../controllers/emailController');

router.post('/', emailController.submitEmail);
router.post('/send-email', emailController.sendEmail);

module.exports = router;
