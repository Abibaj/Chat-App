const express = require('express');
const chatController = require('../controllers/chatController');
const authController = require('../controllers/authController');

const router = express.Router();

// Protect all routes after this middleware
router.use(authController.protect);
router.post('/new', chatController.createChat);
router.route('/:id').get(chatController.getChat);

// router.route('/').get(chatController.getAllUsers);

module.exports = router;
