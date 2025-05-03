const express = require('express');
const {
  getAllSubjects,
  getSubject,
  createSubject,
  deleteSubject,
  updateSubject,
  addValue,
  removeValue,
} = require('../controllers/subject.controller');

const subjectRouter = express.Router();

subjectRouter.get('/', getAllSubjects);
subjectRouter.get('/:id', getSubject);
subjectRouter.post('/create', createSubject);
subjectRouter.delete('/delete/:id', deleteSubject);
subjectRouter.patch('/update/:id', updateSubject);
subjectRouter.patch('/addValue/:id', addValue);
subjectRouter.patch('/removeValue/:id', removeValue);

module.exports = subjectRouter;

//* Made in honor of E.Enkhbold
