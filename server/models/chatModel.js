const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
  message: {
    type: String,
    required: [true, 'Please type a message to send']
  },
  sender: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  },
  receiver: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  },
  time: {
    type: Date,
    default: new Date(Date.now()).toLocaleTimeString()
  }
});

const Chat = mongoose.model('Chat', chatSchema);

module.exports = Chat;
