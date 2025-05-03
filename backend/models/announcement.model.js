const mongoose = require('mongoose');

const AnnouncementSchema = mongoose.Schema({
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
  type: {
    type: String,
    enum: ['any', 'payment', 'poll'], // TODO: Add a date way to check completed
    required: false,
    default: 'any',
  },
  class: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Class',
    required: true,
  },
  answers: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: false,
        default: null,
      },
      answer: {
        type: String,
        required: false,
        default: null,
      },
    },
  ],
  possible_answers: {
    type: [String],
    required: false,
    default: null,
  },
  required_people: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'User',
    required: false,
    default: null,
  },
});

AnnouncementSchema.virtual('isCompletedByAll').get(function () {
  if (!this.required_people || this.required_people.length === 0) return true;
  const answeredUserIds = this.answers.map(ans => String(ans.user));
  return this.required_people.every(reqUserId =>
    answeredUserIds.includes(String(reqUserId))
  );
});

AnnouncementSchema.set('toJSON', { virtuals: true });

AnnouncementSchema.pre('save', async function (next) {
  if (!this.isNew) {
    return next();
  }

  if (this.class) {
    try {
      const classModel = await mongoose.model('Class').findById(this.class);
      if (!classModel) {
        return next(new Error('Class not found'));
      }
      if (classModel.announcements) {
        classModel.announcements.push(this._id);
      } else {
        classModel.announcements = [this._id];
      }
      await classModel.save();
      next();
    } catch (error) {
      return next(error);
    }
  } else {
    next();
  }
});

const AnnouncementModel = mongoose.model('Announcement', AnnouncementSchema);
module.exports = AnnouncementModel;

//* Made in honor of E.Enkhbold
