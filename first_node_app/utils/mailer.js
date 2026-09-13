require('dotenv').config();

const nodemailer = require('nodemailer');

async function sendRegistrationEmail({ fullName, workEmail, empId, role }) {
	console.log('SMTP configuration loaded:', {
		host: Boolean(process.env.SMTP_HOST),
		user: Boolean(process.env.SMTP_USER),
		password: Boolean(process.env.SMTP_PASS)
	});
	// if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
	// 	throw new Error('SMTP settings are not configured. Add SMTP_HOST, SMTP_USER, and SMTP_PASS to .env');
	// }

	const smtpPort = Number(process.env.SMTP_PORT || 587);
	const transporter = nodemailer.createTransport({
		host: process.env.SMTP_HOST,
		port: smtpPort,
		secure: smtpPort === 465,
		auth: {
			user: process.env.SMTP_USER,
			pass: process.env.SMTP_PASS
		}
	});

	console.log('Sending registration email to:', workEmail);

	return transporter.sendMail({
		from: 'umeshrapolu29@gmail.com',
		to: workEmail,
		subject: 'Registration successful',
		text: [
			`Hello ${fullName},`,
			'',
			'Your employee registration was successful.',
			`Employee ID: ${empId}`,
			`Role: ${role}`
		].join('\n')
	});
}

module.exports = { sendRegistrationEmail };
