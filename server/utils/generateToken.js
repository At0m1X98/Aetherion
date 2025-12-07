import jwt from 'jsonwebtoken';

const generateToken = (userId) => {
	if (!userId) throw new Error('generateToken: userId is required');
	return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
		expiresIn: process.env.JWT_EXPIRES_IN || '1d',
	});
};

export default generateToken;
