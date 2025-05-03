const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const UserSchema = mongoose.Schema({
  username: 'String',
  password: 'String',
  role: {
    type: String,
    enum: ['admin', 'teacher', 'student'],
    required: true,
    default: 'student',
  },
  phone_number: 'String',
  email: {
    type: 'String',
    required: true,
    unique: true,
  },
  classes: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Class',
    required: false,
    default: null,
  }
});

UserSchema.methods.generateAuthToken = function () {
  return jwt.sign({ id: this._id }, process.env.AUTH_KEY, { expiresIn: '7d' });
};

const UserModel = mongoose.model('User', UserSchema);
module.exports = UserModel;

//* Made in honor of E.Enkhbold
