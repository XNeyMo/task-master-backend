const ErrInvalidPassword = new Error('Invalid password');
const ErrMaxPassword = new Error('Password is too long');
const ErrMinPassword = new Error('Password is too short');

module.exports = {
	ErrInvalidPassword,
	ErrMaxPassword,
	ErrMinPassword
}
