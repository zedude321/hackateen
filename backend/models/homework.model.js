const mongoose = require('mongoose');
const SubjectModel = require('./subject.model');

const HomeworkSchema = mongoose.Schema({
  name: 'String',
  description: 'String',
  due_date: {
    type: Date,
    required: true,
  },
  given_date: {
    type: Date,
    required: false,
    default: Date.now,
  },
  subject: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Subject',
    required: true,
  },
  type: {
    type: String,
    enum: ['assignment', 'homework'],
    required: false,
    default: 'homework',
  },
});

HomeworkSchema.pre('save', async function (next) {
  if (!this.isNew) {
    return next();
  }

  if (this.subject) {
    try {
      const subject = await SubjectModel.findById(this.subject);
      if (!subject) {
        return next(new Error('Subject not found'));
      }
      if (this.type === 'assignment') {
        if (subject.assignments) {
          subject.assignments.push(this._id);
        } else {
          subject.assignments = [this._id];
        }
      } else {
        if (subject.homework) {
          subject.homework.push(this._id);
        } else {
          subject.homework = [this._id];
        }
      }
      console.log(subject.homework);
      await subject.save();
      next();
    } catch (error) {
      return next(error);
    }
  }
});

const HomeworkModel = mongoose.model('Homework', HomeworkSchema);
module.exports = HomeworkModel;

//* Made in honor of E.Enkhbold
