const express = require('express');
const {
  deleteHomework,
  updateHomework,
  createHomework,
  getHomework,
  getAllHomeworks,
} = require('../controllers/homework.controller');

const homeworkRouter = express.Router();

homeworkRouter.get('/', getAllHomeworks);
homeworkRouter.get('/:id', getHomework);
homeworkRouter.post('/create', createHomework);
homeworkRouter.patch('/update/:id', updateHomework);
homeworkRouter.delete('/delete/:id', deleteHomework);

module.exports = homeworkRouter;

//* Made in honor of E.Enkhbold
