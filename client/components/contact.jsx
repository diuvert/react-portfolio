// contact.jsx
// Student name: Diuvert Lopez
// StudentID: 301487978
// Date: 2025-09-19
// Contact Page Component

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * Contact Component
 * Section: Contact Page
 */
function Contact() {
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		contactNumber: '',
		email: '',
		message: ''
	});

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Capture the information (in a real app, send to server)
		console.log('Contact Form Data:', formData);
		alert('Thank you for your message! We will get back to you soon.');
		// Redirect to home
		navigate('/');
	};

	return (
		<div className="contact-container">
			<div className="contact-header">
				<div className="contact-main">
					<h1>Contact Me</h1>							
					{/* Contact Form */}
					<form className="contact-form" onSubmit={handleSubmit}>
						<div className="form-group">
							<label htmlFor="firstName">First Name:</label>
							<input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
						</div>
						<div className="form-group">
							<label htmlFor="lastName">Last Name:</label>
							<input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
						</div>
						<div className="form-group">
							<label htmlFor="contactNumber">Contact Number:</label>
							<input type="tel" id="contactNumber" name="contactNumber" value={formData.contactNumber} onChange={handleChange} required />
						</div>
						<div className="form-group">
							<label htmlFor="email">Email Address:</label>
							<input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
						</div>
						<div className="form-group">
							<label htmlFor="message">Message:</label>
							<textarea id="message" name="message" value={formData.message} onChange={handleChange} required></textarea>
						</div>
						<button type="submit">Send Message</button>
					</form>
				</div>
				<div className="contact-sidebar">
					<img
						src="/contact.jpg?text=Contact+Me"
						alt="Contact illustration"
						className="contact-image"
					/>
					<div className="contact-info">
						<p><strong>Email:</strong> diuvert@gmail.com</p>
						<p><strong>Phone:</strong> (905) 921-9426</p>
						<p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/diuvert/" target="_blank" rel="noopener noreferrer">linkedin.com/in/diuvert</a></p>
						<p><strong>GitHub:</strong> <a href="https://github.com/diuvert" target="_blank" rel="noopener noreferrer">github.com/diuvert</a></p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Contact;
