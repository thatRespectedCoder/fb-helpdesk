const Conversation = require('../models/Conversation');

const createConversation = async (req, res) => {
  try {
    const { clientId, agentId } = req.body;

    // Create new conversation
    const newConversation = new Conversation({
      clientId,
      agentId,
      messages: []
    });

    // Save conversation to database
    await newConversation.save();

    res.status(201).json({ message: 'Conversation created successfully', conversation: newConversation });
  } catch (error) {
    console.error('Error creating conversation:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const addMessage = async (req, res) => {
  try {
    const { conversationId, sender, content } = req.body;

    // Find conversation by ID
    const conversation = await Conversation.findById(conversationId);
    if (!conversation) {
      return res.status(404).json({ message: 'Conversation not found' });
    }

    // Add new message to conversation
    conversation.messages.push({ sender, content });
    await conversation.save();

    res.status(200).json({ message: 'Message added successfully', conversation });
  } catch (error) {
    console.error('Error adding message:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { createConversation, addMessage };
