import mongoose from "mongoose";

const classSchema = new mongoose.Schema({
	name: { type: String, required: true, unique: true },
	description: { type: String },
});

const Class = mongoose.model('Class', classSchema);

export default Class;