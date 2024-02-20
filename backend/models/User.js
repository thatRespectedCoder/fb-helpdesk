const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  facebookId: {
    type: String,
    unique: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Indexing for faster query operations
userSchema.index({ username: 1 });
userSchema.index({ email: 1 });
userSchema.index({ facebookId: 1 });

const User = mongoose.model('User', userSchema);

module.exports = User;
