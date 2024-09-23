const ErrInvalidUsername = new Error('Invalid username');
const ErrMaxUsername = new Error('Username is too long');
const ErrMinUsername = new Error('Username is too short');

module.exports = {
	ErrInvalidUsername,
	ErrMaxUsername,
	ErrMinUsername
}
