const express = require('express');
const router = express.Router();
const { createConversation, addMessage } = require('../controllers/conversationController');

// Create conversation route
router.post('/conversation/create', createConversation);

// Add message to conversation route
router.post('/conversation/:id/add-message', addMessage);

module.exports = router;
