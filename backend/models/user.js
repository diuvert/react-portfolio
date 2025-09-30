import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  customId: { type: Number, unique: true, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  created: { type: Date, default: Date.now },
  updated: { type: Date, default: Date.now }
});

userSchema.pre('save', function (next) {
  this.updated = Date.now();
  if (!this.created) this.created = this.updated;
  next();
});

const User = mongoose.model('User', userSchema, 'users');
export default User;
