const mongoose = require('mongoose');

const SubjectSchema = mongoose.Schema({
  name: 'String',
  homework: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Homework',
    required: false,
    default: null,
  },
  assignments: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Homework',
    required: false,
    default: null,
  },
  chat: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Chat',
    required: false,
    default: null,
  },
  color: {
    type: String,
    required: false,
    default: '#000000',
  },
  class: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Class',
    required: true,
  },
});

SubjectSchema.pre('save', async function (next) {
  if (!this.isNew) {
    return next();
  }
  if (this.class) {
    try {
      const classModel = await mongoose.model('Class').findById(this.class);
      if (!classModel) {
        return next(new Error('Class not found'));
      }
      if (classModel.subjects) {
        classModel.subjects.push(this._id);
      } else {
        classModel.subjects = [this._id];
      }
      await classModel.save();
      next()
    } catch (error) {
      return next(error);
    }
  }
});

const SubjectModel = mongoose.model('Subject', SubjectSchema);
module.exports = SubjectModel;

//* Made in honor of E.Enkhbold
