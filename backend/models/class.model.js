const mongoose = require('mongoose');

const ClassSchema = mongoose.Schema({
  name: 'String',
  members: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'User',
    required: false,
    default: null,
  },
  teachers: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'User',
    required: false,
    default: null,
  },
  admins: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'User',
    required: false,
    default: null,
  },
  subjects: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Subject',
    required: false,
    default: null,
  },
  schedule: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Schedule',
    required: false,
    default: null,
  },
  announcements: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Announcement',
    required: false,
    default: null,
  },
  code: {
    type: String,
    required: false,
    default: null,
  },
});

ClassSchema.pre('save', async function (next) {
  if (!this.isNew) {
    return next();
  }
  this.code = this._id.toString().slice(0, 6);
  next();
});

const ClassModel = mongoose.model('Class', ClassSchema);
module.exports = ClassModel;

//* Made in honor of E.Enkhbold
