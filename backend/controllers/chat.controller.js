const ChatModel = require('../models/chat.model');

const getAllChats = async (_, res) => {
  try {
    const chats = await ChatModel.find();
    res.status(200).json(chats);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

const getChat = async (req, res) => {
  const { id } = req.params;
  try {
    const chat = await ChatModel.findById(id);
    if (!chat) {
      return res.status(404).json({ message: 'Chat not found' });
    }
    res.status(200).json({ data: chat });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

const createChat = async (req, res) => {
  try {
    const chat = await ChatModel.create(req.body);
    res.status(201).json({ data: chat });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};

const deleteChat = async (req, res) => {
  try {
    const chat = await ChatModel.findByIdAndDelete(req.params.id);
    if (!chat) {
      return res.status(404).json({ message: 'Chat not found' });
    }
    res.status(200).json({ message: 'Chat deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

const updateChat = async (req, res) => {
  try {
    const chat = await ChatModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!chat) {
      return res.status(404).json({ message: 'Chat not found' });
    }
    res.status(200).json({ data: chat });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

module.exports = {
  getAllChats,
  getChat,
  createChat,
  deleteChat,
  updateChat,
};

//* Made in honor of E.Enkhbold
