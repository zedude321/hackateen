const mongoose = require('mongoose');

const TimesSubSchema = mongoose.Schema(
  {
    start_time: String,
    end_time: String,
    order: Number,
  },
  { _id: false }
);

const SubjectsSubSchema = mongoose.Schema(
  {
    subject: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Subject',
      required: true,
    },
    day: Number,
    time: Number,
  },
  { _id: false }
);

const DaysSubSchema = mongoose.Schema(
  {
    day: String,
    order: Number,
  },
  { _id: false }
);

const ScheduleSchema = mongoose.Schema({
  class: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Class',
    required: true,
  },
  times: {
    type: [TimesSubSchema],
    required: false,
    default: null,
  },
  days_of_week: {
    type: [DaysSubSchema],
    required: false,
    default: null,
  },
  subjects: {
    type: [SubjectsSubSchema],
    required: false,
    default: null,
  },
});

ScheduleSchema.pre('save', async function (next) {
  if (!this.isNew) {
    return next();
  }

  if (this.class) {
    try {
      const classModel = await mongoose.model('Class').findById(this.class);
      if (!classModel) {
        return next(new Error('Class not found'));
      }
      classModel.schedule = this._id;
      await classModel.save();
      next();
    } catch (error) {
      return next(error);
    }
  }
  next();
});

const ScheduleModel = mongoose.model('Schedule', ScheduleSchema);
module.exports = ScheduleModel;

//* Made in honor of E.Enkhbold
