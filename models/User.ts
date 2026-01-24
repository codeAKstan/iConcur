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
    minlength: [8, 'Password cannot be less than 8 characters'],
    select: false,
  },
  googleId: {
    type: String,
    unique: true,
    sparse: true,
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

// Force model recompilation in development to handle schema changes
if (process.env.NODE_ENV === 'development' && mongoose.models.User) {
  delete mongoose.models.User;
}

export default mongoose.models.User || mongoose.model('User', UserSchema);
