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
						</p>
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
					<p>I have a decent academic background, a supportive network of friends, and a loving family. I graduated from Linguistics, English Literature, and did a minor in psychology at UCLV. Later I pursued theology at the divinity college AT MCS (Masters). I studied music and enjoy playing several musical instruments, composing songs, and collaborating with other talented musicians and singers.</p>
				</div>
			</div>
		</div>
	);
}

export default About;
