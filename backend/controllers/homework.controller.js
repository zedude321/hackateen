const HomeworkModel = require('../models/homework.model');

const getAllHomeworks = async (_, res) => {
  try {
    const homeworks = await HomeworkModel.find();
    res.status(200).json(homeworks);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

const getHomework = async (req, res) => {
  const { id } = req.params;
  try {
    const homework = await HomeworkModel.findById(id);
    if (!homework) {
      return res.status(404).json({ message: 'Homework not found' });
    }
    res.status(200).json({ data: homework });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

const createHomework = async (req, res) => {
  try {
    const homework = await HomeworkModel.create(req.body);
    res.status(201).json({ data: homework });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};

const deleteHomework = async (req, res) => {
  try {
    const homework = await HomeworkModel.findByIdAndDelete(req.params.id);
    if (!homework) {
      return res.status(404).json({ message: 'Homework not found' });
    }
    res.status(200).json({ message: 'Homework deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

const updateHomework = async (req, res) => {
  try {
    const homework = await HomeworkModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    if (!homework) {
      return res.status(404).json({ message: 'Homework not found' });
    }
    res.status(200).json({ data: homework });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

module.exports = {
  getAllHomeworks,
  getHomework,
  createHomework,
  deleteHomework,
  updateHomework,
};

//* Made in loving memory of E.Enkhbold
