const Chat = require('../models/chatModel');
const factory = require('./handlerFactory');

exports.createChat = factory.createOne(Chat);
exports.getChat = factory.getOne(Chat);
exports.deleteChat = factory.deleteOne(Chat);
// exports.getAllChats = factory.getAll(Chat);
// exports.updateChat = factory.updateOne(Chat);
