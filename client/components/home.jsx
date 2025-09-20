// home.jsx
// Student name: Diuvert Lopez
// StudentID: 301487978
// Date: 2025-09-19
// Home Page Component

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * Home Component
 * Section: Home Page
 */
function Home() {
	const navigate = useNavigate();
	const [openAccordion, setOpenAccordion] = useState(null);

	const toggleAccordion = (index) => {
		setOpenAccordion(openAccordion === index ? null : index);
	};

	const skills = [
		{
			title: 'JavaScript',
			content: 'Proficient in ES6+, asynchronous programming, DOM manipulation, and modern JavaScript frameworks. Experienced with both frontend and backend development. JavaScript makes websites alive. It is fun, powerful, and adaptable to any environment.'
		},
		{
			title: 'React',
			content: 'Expert in building dynamic user interfaces with React, including hooks, context API, and state management. Familiar with Next.js and React Native. React is the future of web development. I build fast, scalable, and simple user interfaces. It is efficient, modern, and it is here to stay.'
		},
		{
			title: 'Node.js',
			content: 'Skilled in server-side development with Node.js, Express, and RESTful APIs. Experience with authentication, database integration, and microservices. Node.js is perfect for building fast and scalable network applications. It is lightweight, efficient, and ideal for data-intensive real-time applications.'
		},
		{
			title: 'Python',
			content: 'Strong foundation in Python for data analysis, automation scripts, and backend services. Knowledge of Django, Flask, and data science libraries. Python is versatile and powerful, making it ideal for a wide range of applications.'
		},
		{
			title: 'AWS',
			content: 'Certified in AWS services including EC2, S3, Lambda, and RDS. Experience with cloud architecture, serverless computing, and DevOps practices. AWS provides scalable and reliable cloud solutions for modern applications.'
		},
		{
			title: 'Docker',
			content: 'Proficient in containerization with Docker, including Docker Compose, multi-stage builds, and orchestration with Kubernetes. Docker simplifies deployment and ensures consistency across environments.'
		}
	];

	return (
		<div className="home-container">
			<div className="home-layout">
				<div className="home-left">
					<header className="home-header">
						<h1>Diuvert Lopez</h1>
						<h2>Software Engineer</h2>
						<p>Welcome to my digital realm! Here, you find the magic of code, the thrill of innovation, and the power of technology. I am a software engineer, an AI programmer, and I want to show you my world. Research companies, you're in the right place! Let's explore the extraordinary together.</p>
						<p>
							I build robust, scalable software solutions that solve complex problems.
							Passionate about clean code, system architecture, and delivering high-quality
							applications that make a difference.
						</p>
						<h3>What Sets Me Apart?</h3>
						<p>I am not just a software engineer. I am a problem solver, a thinker, a creator. I bring ideas to life. I make technology work for you. My approach is simple: understand, innovate, deliver. I believe in quality, not quantity.</p>
						<div className="home-links">
							<a href="https://github.com/diuvertlopez" target="_blank" rel="noopener noreferrer">GitHub</a>
							<a href="https://linkedin.com/in/diuvertlopez" target="_blank" rel="noopener noreferrer">LinkedIn</a>
							<a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
						</div>						
					</header>
				</div>
				<div className="home-right">
					<section className="home-section">
						<h3>Currently</h3>
						<p>
							Working as a Software Engineer, specializing in full-stack development
							with expertise in modern web technologies, cloud platforms, and agile methodologies.
						</p>
						<h3>Skills</h3>
						<div className="accordion">
							{skills.map((skill, index) => (
								<div key={index} className="accordion-item">
									<button
										className="accordion-header"
										onClick={() => toggleAccordion(index)}
									>
										{skill.title}
										<span className={`accordion-icon ${openAccordion === index ? 'open' : ''}`}>+</span>
									</button>
									<div className={`accordion-content ${openAccordion === index ? 'open' : ''}`}>
										<p>{skill.content}</p>
									</div>
								</div>
							))}
						</div>
					</section>
				</div>
			</div>
			<div className="home-buttons">
				<button onClick={() => navigate('/about')}>About Me</button>
				<button onClick={() => navigate('/projects')}>View My Work</button>
				<button onClick={() => navigate('/contact')}>Get In Touch</button>
			</div>
		</div>
	);
}

export default Home;
