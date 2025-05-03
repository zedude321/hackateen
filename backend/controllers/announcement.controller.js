const AnnouncementModel = require('../models/announcement.model');

const getAllAnnouncements = async (_, res) => {
  try {
    const announcements = await AnnouncementModel.find();
    res.status(200).json(announcements);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getAnnouncement = async (req, res) => {
  const { id } = req.params;
  try {
    const announcement = await AnnouncementModel.findById(id);
    if (!announcement) {
      return res.status(404).json({ message: 'Announcement not found' });
    }
    res.status(200).json({ data: announcement });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createAnnouncement = async (req, res) => {
  try {
    const announcement = await AnnouncementModel.create(req.body);
    res.status(201).json({ data: announcement });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};

const deleteAnnouncement = async (req, res) => {
  try {
    const announcement = await AnnouncementModel.findByIdAndDelete(
      req.params.id
    );
    if (!announcement) {
      return res.status(404).json({ message: 'Announcement not found' });
    }
    res.status(200).json({ message: 'Announcement deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateAnnouncement = async (req, res) => {
  try {
    const announcement = await AnnouncementModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!announcement) {
      return res.status(404).json({ message: 'Announcement not found' });
    }
    res.status(200).json({ data: announcement });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const giveAnswer = async (req, res) => {
  const { id } = req.params;
  try {
    const announcement = await AnnouncementModel.findById(id);
    if (!announcement) {
      return res.status(404).json({ message: 'Announcement not found' });
    }
    if (announcement.answers) {
      announcement.answers.push(req.body);
    } else {
      announcement.answers = [req.body];
    }
    await announcement.save();
    res.status(200).json({ data: announcement });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const removeAnswer = async (req, res) => {
  const { id } = req.params;
  try {
    const announcement = await AnnouncementModel.findById(id);
    if (!announcement) {
      return res.status(404).json({ message: 'Announcement not found' });
    }
    if (announcement.answers) {
      announcement.answers.filter(e => {
        e.user !== req.body.user;
        e.answer !== req.body.answer;
      });
      await announcement.save();
    }
    res.status(200).json({ data: announcement });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const addValue = async (req, res) => {
  const { id } = req.params;
  try {
    const announcement = await AnnouncementModel.findById(id);
    if (!announcement) {
      return res.status(404).json({ message: 'Announcement not found' });
    }
    if (announcement[req.body.key]) {
      announcement[req.body.key]?.push(req.body.value);
    } else {
      announcement[req.body.key] = [req.body.value];
    }
    await announcement.save();
    res.status(200).json({ data: announcement });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

const removeValue = async (req, res) => {
  const { id } = req.params;
  try {
    const announcement = await AnnouncementModel.findById(id);
    if (!announcement) {
      return res.status(404).json({ message: 'Announcement not found' });
    }
    if (announcement[req.body.key]) {
      announcement[req.body.key] = announcement[req.body.key].filter(
        value => value !== req.body.value
      );
      await announcement.save();
    }
    res.status(200).json({ data: announcement });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

module.exports = {
  getAllAnnouncements,
  getAnnouncement,
  createAnnouncement,
  deleteAnnouncement,
  updateAnnouncement,
  giveAnswer,
  removeAnswer,
  addValue,
  removeValue,
};

//* Made in honor of E.Enkhbold
