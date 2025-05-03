const mongoose = require('mongoose');

const ChatSchema = mongoose.Schema({
  subject: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Subject',
    required: true,
  },
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

ChatSchema.pre('save', async function (next) {
  if (!this.isNew) {
    return next();
  }
  if (this.subject) {
    try {
      const subject = await mongoose.model('Subject').findById(this.subject);
      if (!subject) {
        return next(new Error('Subject not found'));
      }
      if (subject.chat) {
        subject.chat.push(this._id);
      } else {
        subject.chat = [this._id];
      }
      await subject.save();
      next();
    } catch (error) {
      return next(error);
    }
  }
});

const ChatModel = mongoose.model('Chat', ChatSchema);
module.exports = ChatModel;

//* Made in honor of E.Enkhbold
