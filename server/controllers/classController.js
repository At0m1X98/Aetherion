import Class from "../models/Class.js";

export const getClasses = async (req, res) => {
	const classes = await Class.find();
	res.json(classes);
};

export const createClass = async (req, res) => {
	const { name, description } = req.body;
	const charClass = new Class({ name, description });
	await charClass.save();
	res.status(201).json(charClass);
};