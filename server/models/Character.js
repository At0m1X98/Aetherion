import mongoose from "mongoose";

const characterSchema = new mongoose.Schema({
	user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
	name: { type: String, required: true },
	race: { type: mongoose.Schema.Types.ObjectId, ref: "Race", required: true },
	class: { type: mongoose.Schema.Types.ObjectId, ref: "Class", required: true },
});

const Character = mongoose.model("Character", characterSchema);

export default Character;