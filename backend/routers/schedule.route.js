const express = require('express');
const {
  deleteSchedule,
  updateSchedule,
  createSchedule,
  getSchedule,
  getAllSchedules,
  addValue,
  removeValue,
} = require('../controllers/schedule.controller');

const scheduleRouter = express.Router();

scheduleRouter.get('/', getAllSchedules);
scheduleRouter.get('/:id', getSchedule);
scheduleRouter.post('/create', createSchedule);
scheduleRouter.patch('/update/:id', updateSchedule);
scheduleRouter.delete('/delete/:id', deleteSchedule);
scheduleRouter.patch('/addValue/:id', addValue);
scheduleRouter.patch('/removeValue/:id', removeValue);

module.exports = scheduleRouter;
