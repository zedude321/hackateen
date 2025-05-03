const express = require('express');
const {
  deleteUser,
  updateUser,
  createUser,
  getUser,
  getAllUsers,
  loginUser,
} = require('../controllers/user.controller');
const userRouter = express.Router();

userRouter.get('/', getAllUsers);
userRouter.post('/login', loginUser);
userRouter.get('/:id', getUser);
userRouter.post('/create', createUser);
userRouter.patch('/update/:id', updateUser);
userRouter.delete('/delete/:id', deleteUser);

module.exports = userRouter;

//* Made in honor of E.Enkhbold
