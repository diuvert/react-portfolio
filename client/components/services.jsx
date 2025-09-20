// services.jsx
// Student name: Diuvert Lopez
// StudentID: 301487978
// Date: 2025-09-19
// Services Page Component

import React from 'react';

/**
 * Services Component
 * Section: Services Page
 */
function Services() {
    const servicesList = [
        {
            title: 'Web Development',
            image: '/services1.jpg?text=Web+Development',
            description: 'Building responsive and dynamic websites using modern technologies like React, Node.js, and more.'
        },
        {
            title: 'UI/UX Design',
            image: '/services2.jpg?text=UI+UX+Design',
            description: 'Designing intuitive user interfaces and experiences to enhance user satisfaction and engagement.'
        },
        {
            title: 'Consulting',
            image: '/services3.jpg?text=Consulting',
            description: 'Providing technical advice and guidance on web development best practices and project planning.'
        },
        {
            title: 'Mobile App Creation',
            image: '/services4.jpg?text=Mobile+App+Creation',
            description: 'Creating high-quality mobile apps for local businesses to engage users and promote brands.'
        },
        {
            title: 'Database Integration',
            image: '/services5.jpg?text=Database+Integration',
            description: 'Integrating and managing databases to ensure seamless data flow and storage for applications.'
        },
        {
            title: 'Scalability Solutions',
            image: '/services6.jpg?text=Scalability+Solutions',
            description: 'Providing strategies and solutions to ensure applications can handle growth efficiently.'
        }
    ];

	return (
		<div className="services-container">
			<h1>Services Offered</h1>
			<div className="services-list">
				{servicesList.map((service, idx) => (
					<div className="service-card" key={idx}>
						<img src={service.image} alt={service.title + ' image'} className="service-image" />
						<h2>{service.title}</h2>
						<p>{service.description}</p>
					</div>
				))}
			</div>
		</div>
	);
}

export default Services;
