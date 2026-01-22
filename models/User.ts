import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'Please provide a first name'],
    maxlength: [60, 'Name cannot be more than 60 characters'],
  },
  lastName: {
    type: String,
    required: [true, 'Please provide a last name'],
    maxlength: [60, 'Name cannot be more than 60 characters'],
  },
  email: {
    type: String,
    required: [true, 'Please provide an email'],
    unique: true,
    maxlength: [100, 'Email cannot be more than 100 characters'],
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    minlength: [8, 'Password cannot be less than 8 characters'],
  },
  jobTitle: {
    type: String,
    default: '',
  },
  avatarUrl: {
    type: String,
    default: '',
  },
  notificationPreferences: {
    contractUpdates: {
      type: Boolean,
      default: true,
    },
    mentions: {
      type: Boolean,
      default: true,
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
});

export default mongoose.models.User || mongoose.model('User', UserSchema);
