const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
  message: {
    type: String,
    required: [true, 'Please type a message to send']
  },
  messageType: {
    type: String,
    enum: ['text', 'image', 'video'],
    default: 'text'
  },
  sender: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: [true, 'There has to be a sender']
  },
  receiver: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: [true, 'There has to be a receiver']
  },
  conversationID: {
    type: String,
    default: ''
    // required: [true, 'A conversation ID is required']
  },
  timeStamp: {
    type: String,
    default: new Date(Date.now()).toLocaleTimeString()
  },
  messageStatus: {
    type: String,
    enum: ['sending', 'sent', 'delivered', 'read'],
    default: 'sending'
  },
  metadata: { type: Object }
});

chatSchema.pre('save', function(next) {
  this.conversationID = `${this.sender._id}_${this.receiver._id}`;
  next();
});

chatSchema.pre(/^find/, function(next) {
  this.populate({
    path: 'sender',
    select: 'name'
  }).populate({
    path: 'receiver',
    select: 'name'
  });
  next();
});

const Chat = mongoose.model('Chat', chatSchema);

module.exports = Chat;
