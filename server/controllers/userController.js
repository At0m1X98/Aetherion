import User from '../models/User.js';
import generateToken from '../utils/generateToken.js';

// Get all users (test purpose)
export const getUsers = async (req, res) => {
	try {
		const users = await User.find().select('-password -__v'); // optional -__v
		res.json(users);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

// Register new user
export const registerUser = async (req, res) => {
	try {
		const { name, email, password } = req.body;

		const existingUser = await User.findOne({ email });
		if (existingUser) return res.status(400).json({ message: 'User already exists' });

		const user = new User({ name, email, password });
		await user.save();

		res.status(201).json({
		_id: user._id,
		name: user.name,
		email: user.email,
		token: generateToken(user._id), // ✅ pass _id here
		});
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

// Login user
export const loginUser = async (req, res) => {
	try {
		const { email, password } = req.body;

		const user = await User.findOne({ email });
		if (!user) return res.status(400).json({ message: 'Invalid email or password' });

		const isMatch = await user.matchPassword(password);
		if (!isMatch) return res.status(400).json({ message: 'Invalid email or password' });

		res.json({
		_id: user._id,
		name: user.name,
		email: user.email,
		token: generateToken(user._id), // ✅ pass _id here
		});
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};
