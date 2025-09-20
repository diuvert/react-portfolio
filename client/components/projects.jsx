// projects.jsx
// Student name: Diuvert Lopez
// StudentID: 301487978
// Date: 2025-09-19
// Projects Page Component

import React from 'react';

/**
 * Projects Component
 * Section: Projects Page
 */
function Projects() {
	const projectList = [
		{
			title: 'Portfolio Website',
			image: '/portfolio1.jpg?text=Portfolio+Websites',
			description: 'Designed and developed a personal portfolio website to showcase my skills and projects. Outcome: Improved my React and CSS skills.'
		},
		{
			title: 'E-Commerce App',
			image: '/portfolio2.jpg?text=E-Commerce+App',
			description: 'Built a sample e-commerce application with shopping cart and product pages. Outcome: Learned about state management and user authentication.'
		},
		{
			title: 'Task Manager',
			image: '/portfolio3.jpg?text=Task+Manager',
			description: 'Created a task management tool for organizing daily activities. Outcome: Practiced CRUD operations and responsive design.'
		}
	];

	return (
		<div className="projects-container">
			<h1>Highlighted Projects</h1>
			<div className="projects-list">
				{projectList.map((project, idx) => (
					<div className="project-card" key={idx}>
						<img src={project.image} alt={project.title + ' image'} className="project-image" />
						<h2>{project.title}</h2>
						<p>{project.description}</p>
					</div>
				))}
			</div>
		</div>
	);
}

export default Projects;
