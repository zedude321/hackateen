const ScheduleModel = require('../models/schedule.model');

const getAllSchedules = async (_, res) => {
  try {
    const schedules = await ScheduleModel.find();
    res.status(200).json(schedules);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

const getSchedule = async (req, res) => {
  const { id } = req.params;
  try {
    const schedule = await ScheduleModel.findById(id);
    if (!schedule) {
      return res.status(404).json({ message: 'Schedule not found' });
    }
    res.status(200).json({ data: schedule });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

const createSchedule = async (req, res) => {
  try {
    const schedule = await ScheduleModel.create(req.body);
    res.status(201).json({ data: schedule });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};

const deleteSchedule = async (req, res) => {
  try {
    const schedule = await ScheduleModel.findByIdAndDelete(req.params.id);
    if (!schedule) {
      return res.status(404).json({ message: 'Schedule not found' });
    }
    res.status(200).json({ message: 'Schedule deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

const updateSchedule = async (req, res) => {
  try {
    const schedule = await ScheduleModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!schedule) {
      return res.status(404).json({ message: 'Schedule not found' });
    }
    res.status(200).json({ data: schedule });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

const addValue = async (req, res) => {
  const { id } = req.params;
  try {
    const schedule = await ScheduleModel.findById(id);
    if (!schedule) {
      return res.status(404).json({ message: 'Schedule not found' });
    }
    if (schedule[req.body.key]) {
      schedule[req.body.key]?.push(req.body.value);
    } else {
      schedule[req.body.key] = [req.body.value];
    }
    await schedule.save();
    res.status(200).json({ data: schedule });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

const removeValue = async (req, res) => {
  const { id } = req.params;
  try {
    const schedule = await ScheduleModel.findById(id);
    if (!schedule) {
      return res.status(404).json({ message: 'Schedule not found' });
    }
    if (schedule[req.body.key]) {
      schedule[req.body.key] = schedule[req.body.key].filter(
        value => value !== req.body.value
      );
      await schedule.save();
    }
    res.status(200).json({ data: schedule });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

module.exports = {
  getAllSchedules,
  getSchedule,
  createSchedule,
  deleteSchedule,
  updateSchedule,
  addValue,
  removeValue,
};

//* Made in honor of E.Enkhbold
