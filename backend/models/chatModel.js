const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
  message: {
    type: String,
    required: [true, 'Please type a message to send']
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
  time: {
    type: String,
    default: new Date(Date.now()).toLocaleTimeString()
  }
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
