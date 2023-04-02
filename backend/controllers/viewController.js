const path = require('path');
const catchAsync = require('../utils/catchAsync');
const Chat = require('../models/chatModel');

exports.getChat = catchAsync(async (req, res, next) => {
  res.status(200).sendFile(path.join(__dirname, '../build', 'index.html'));
});
