// about.jsx
// Student name: Diuvert Lopez
// StudentID: 301487978
// Date: 2025-09-19
// About Page Component

import React from 'react';

/**
 * About Component
 * Section: About Me Page
 */
function About() {
	return (
		<div className="about-container">			
			<div className="about-header">
				<div className="about-main">
					<img
						src="/pic-me.jpg?text=Diuvert+Lopez"
						alt="Diuvert Lopez Picture"
						className="about-photo"
					/>
					<div className="about-info">
						<h1>About Me</h1>										
						<p>
							I am a dedicated and passionate web developer with a strong interest in building impactful, user-friendly applications. I enjoy learning new technologies and continuously improving my skills to deliver high-quality solutions. I help research companies. My work is for you. I use JavaScript, React, Node.js, Python, PHP, AWS, Docker. These tools are strong. They change ideas to reality.

							One of my public repositories that you can find on Github is: 
							<a
								href="https://github.com/diuvert/react-portfolio"
								target="_blank"
								rel="noopener noreferrer"
							>
								https://github.com/diuvert/my-awesome-project
							</a>
						</p>
						<p>I am currently studying software engineering, the Ai program, and I am excited to explore the intersection of technology and humanity. There is a new wave of innovation happening, and I want to be part of it for a better future and a more inclusive digital landscape.</p>
						<p>Let's connect and create something amazing together!</p>
						<div className="resume-section">
							<a
								href="/resume.pdf"
								target="_blank"
								rel="noopener noreferrer"
								className="resume-link"
							>
								View My Resume (PDF)
							</a>
						</div>
					</div>
				</div>
				<div className="about-sidebar">
					<p>I have a decent academic background, a supportive network of friends, and a loving family. I graduated from Linguistics, English Literature, and did a minor in psychology at UCLV. Later I pursued theology at the divinity college AT MCS (Masters). I studied music and enjoy playing several musical instruments, composing songs, and collaborating with other talented musicians and singers.</p><br></br>
					<p>In my free time, I love to read books, watch movies, and explore new technologies. I am also passionate about fitness and enjoy outdoor activities like hiking and cycling. I believe in maintaining a healthy work-life balance and continuously seek personal growth and development.</p>
				</div>
			</div>
		</div>
	);
}

export default About;
