const express = require('express');
const {
  deleteAnnouncement,
  updateAnnouncement,
  createAnnouncement,
  getAnnouncement,
  getAllAnnouncements,
  giveAnswer,
  removeAnswer,
} = require('../controllers/announcement.controller');

const announcementRouter = express.Router();

announcementRouter.get('/', getAllAnnouncements);
announcementRouter.get('/:id', getAnnouncement);
announcementRouter.post('/create', createAnnouncement);
announcementRouter.patch('/update/:id', updateAnnouncement);
announcementRouter.delete('/delete/:id', deleteAnnouncement);
announcementRouter.patch('/giveAnswer/:id', giveAnswer);
announcementRouter.patch('/removeAnswer/:id', removeAnswer);

module.exports = announcementRouter;

//* Made in honor of E.Enkhbold
