import Character from '../models/Character.js';
import Race from '../models/Race.js';
import Class from '../models/Class.js';

export const createCharacter = async (req, res) => {
	try {
		const { name, raceId, classId } = req.body;
		const userId = req.user._id;

		// Check if user already has a character
		const existingCharacter = await Character.findOne({ user: userId });
		if (existingCharacter) {
			return res.status(400).json({ message: "User already has a character" });
		}

		// Validate race and class
		const race = await Race.findById(raceId);
		const charClass = await Class.findById(classId);
		if (!race || !charClass) {
			return res.status(400).json({ message: "Invalid race or class" });
		}

		const character = new Character({
			user: userId,
			name,
			race: race._id,
			class: charClass._id,
		});

		await character.save();

		res.status(201).json(character);
	} catch (error) {
		res.status(500).json({ message: "Server error" });
	}
};

export const getCharacter = async (req, res) => {
	try {
		const userId = req.user._id;
		const character = await Character.findOne({ user: userId })
		.populate("race", "name")
		.populate("class", "name");

		if (!character) {
		return res.status(404).json({ message: "Character not found" });
		}

		res.json(character);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};