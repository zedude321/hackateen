const ClassModel = require('../models/class.model');

const getAllClasses = async (_, res) => {
  try {
    const classes = await ClassModel.find();
    res.status(200).json(classes);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

const getClass = async (req, res) => {
  const { id } = req.params;
  try {
    const classes = await ClassModel.findById(id)
      .populate([
        {
          path: 'subjects',
          populate: [
            { path: 'chat' },
            { path: 'assignments' },
            { path: 'homework' },
          ],
        },
        { path: 'announcements' },
        { path: 'admins' },
        { path: 'teachers' },
        { path: 'members' },
        { path: 'schedule' },
        { path: 'chat' },
      ])
      .exec();
    if (!classes) {
      return res.status(404).json({ message: 'classes not found' });
    }
    res.status(200).json({ data: classes });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

const createClass = async (req, res) => {
  try {
    const classes = await ClassModel.create(req.body);
    res.status(201).json({ data: classes });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};

const deleteClass = async (req, res) => {
  try {
    const classes = await ClassModel.findByIdAndDelete(req.params.id);
    if (!classes) {
      return res.status(404).json({ message: 'Class not found' });
    }
    res.status(200).json({ message: 'Class deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

const updateClass = async (req, res) => {
  try {
    const classes = await ClassModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    if (!classes) {
      return res.status(404).json({ message: 'classes not found' });
    }
    res.status(200).json({ data: classes });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

const addValue = async (req, res) => {
  const { id } = req.params;
  try {
    const classes = await ClassModel.findById(id);
    if (!classes) {
      return res.status(404).json({ message: 'classes not found' });
    }
    if (classes[req.body.key]) {
      classes[req.body.key]?.push(req.body.value);
    } else {
      classes[req.body.key] = [req.body.value];
    }
    await classes.save();
    res.status(200).json({ data: classes });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

const removeValue = async (req, res) => {
  const { id } = req.params;
  try {
    const classModel = await ClassModel.findById(id);
    if (!classModel) {
      return res.status(404).json({ message: 'classModel not found' });
    }
    if (classModel[req.body.key]) {
      classModel[req.body.key] = classModel[req.body.key].filter(
        value => value !== req.body.value
      );
      await classModel.save();
    }
    res.status(200).json({ data: classModel });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

module.exports = {
  getAllClasses,
  getClass,
  createClass,
  deleteClass,
  updateClass,
  addValue,
  removeValue,
};

//* Made in honor of E.Enkhbold
