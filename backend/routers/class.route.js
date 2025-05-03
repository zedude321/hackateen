const express = require('express');
const {
  getAllClasses,
  getClass,
  createClass,
  deleteClass,
  updateClass,
  addValue,
  removeValue,
} = require('../controllers/class.controller');

const classRouter = express.Router();

classRouter.get('/', getAllClasses);
classRouter.get('/:id', getClass);
classRouter.post('/create', createClass);
classRouter.delete('/delete/:id', deleteClass);
classRouter.patch('/update/:id', updateClass);
classRouter.patch('/addValue/:id', addValue);
classRouter.patch('/removeValue/:id', removeValue);

module.exports = classRouter;

//* Made in honor of E.Enkhbold
