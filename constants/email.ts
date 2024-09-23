const ErrEmailExist = new Error('Email is already registered');
const ErrEmailNotExist = new Error('Email is not registered');
const ErrInvalidEmail = new Error('Invalid email');

module.exports = {
	ErrEmailExist,
	ErrEmailNotExist,
	ErrInvalidEmail
};
