const SubjectModel = require('../models/subject.model');

const getAllSubjects = async (_, res) => {
  try {
    const subjects = await SubjectModel.find();
    res.status(200).json(subjects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getSubject = async (req, res) => {
  const { id } = req.params;
  try {
    const subject = await SubjectModel.findById(id);
    if (!subject) {
      return res.status(404).json({ message: 'Subject not found' });
    }
    res.status(200).json({ data: subject });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createSubject = async (req, res) => {
  try {
    const subject = await SubjectModel.create(req.body);
    res.status(201).json({ data: subject });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

const deleteSubject = async (req, res) => {
  try {
    const subject = await SubjectModel.findByIdAndDelete(req.params.id);
    if (!subject) {
      return res.status(404).json({ message: 'Subject not found' });
    }
    res.status(200).json({ message: 'Subject deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateSubject = async (req, res) => {
  try {
    const subject = await SubjectModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    if (!subject) {
      return res.status(404).json({ message: 'Subject not found' });
    }
    res.status(200).json({ data: subject });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const addValue = async (req, res) => {
  const { id } = req.params;
  try {
    const subject = await SubjectModel.findById(id);
    if (!subject) {
      return res.status(404).json({ message: 'subject not found' });
    }
    if (subject[req.body.key]) {
      subject[req.body.key]?.push(req.body.value);
    } else {
      subject[req.body.key] = [req.body.value];
    }
    await subject.save();
    res.status(200).json({ data: subject });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

const removeValue = async (req, res) => {
  const { id } = req.params;
  try {
    const subject = await SubjectModel.findById(id);
    if (!subject) {
      return res.status(404).json({ message: 'subject not found' });
    }
    if (subject[req.body.key]) {
      subject[req.body.key] = subject[req.body.key].filter(
        value => value !== req.body.value
      );
      await subject.save();
    }
    res.status(200).json({ data: subject });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

module.exports = {
  getAllSubjects,
  getSubject,
  createSubject,
  deleteSubject,
  updateSubject,
  addValue,
  removeValue,
};

//* Made in honor of E.Enkhbold
