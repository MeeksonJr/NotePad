import mongoose from 'mongoose';

const noteSchema = new mongoose.Schema({
  username: { type: String, required: true },
  title: { type: String, default: '' },
  content: { type: String, default: '' },
  image: { type: String, default: '' },
});

export default mongoose.model('Note', noteSchema);
