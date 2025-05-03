const express = require('express');
const {
  deleteChat,
  updateChat,
  createChat,
  getChat,
  getAllChats,
} = require('../controllers/chat.controller');

const chatRouter = express.Router();

chatRouter.get('/', getAllChats);
chatRouter.get('/:id', getChat);
chatRouter.post('/create', createChat);
chatRouter.patch('/update/:id', updateChat);
chatRouter.delete('/delete/:id', deleteChat);

module.exports = chatRouter;

//* Made in honor of E.Enkhbold
