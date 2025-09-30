import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  customId: { type: Number, unique: true, required: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true }
}, { timestamps: true });

const Contact = mongoose.model('Contact', contactSchema, 'contacts');
export default Contact;
