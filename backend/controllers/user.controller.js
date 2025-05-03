const UserModel = require('../models/user.model');

const getAllUsers = async (_, res) => {
  try {
    const users = await UserModel.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

const getUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await UserModel.findById(id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ data: user });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

const createUser = async (req, res) => {
  try {
    const user = await UserModel.create(req.body);
    const token = user.generateAuthToken();
    res.status(201).json({ data: user, token });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const user = await UserModel.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    if (user.password !== req.body.password) {
      return res.status(401).json({ message: 'Invalid password' });
    }
    const token = user.generateAuthToken();
    res.status(200).json({ data: user, token });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

const deleteUser = async (req, res) => {
  try {
    const user = await UserModel.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

const updateUser = async (req, res) => {
  try {
    const user = await UserModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ data: user });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

module.exports = {
  getAllUsers,
  getUser,
  createUser,
  loginUser,
  deleteUser,
  updateUser,
};

//* Made in honor of E.Enkhbold
