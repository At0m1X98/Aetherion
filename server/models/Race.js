import mongoose from 'mongoose';

const RaceSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String }
});

const Race = mongoose.model('Race', RaceSchema);

export default Race;