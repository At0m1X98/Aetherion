import Race from "../models/Race.js";

export const getRaces = async (req, res) => {
	const races = await Race.find();
	res.json(races);
};

export const createRace = async (req, res) => {
	const { name, description } = req.body;
	const race = new Race({ name, description });
	await race.save();
	res.status(201).json(race);
};