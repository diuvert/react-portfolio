// mission.jsx
// Student name: Diuvert Lopez
// StudentID: 301487978
// Date: 2025-09-19
// Mission Statement Page Component

import React from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * MissionStatement Component
 * Section: Mission Statement Page
 */
function Mission() {
  const navigate = useNavigate();

  return (
    <div className="mission-container">
      <div className="mission-header">
        <div className="mission-main">
          <h1>Mission Statement</h1>
          <p>
            My mission is to create impactful, user-friendly, and innovative web applications that empower users and solve real-world problems. I strive for continuous learning and excellence in every project I undertake.
          </p>
          <ol>
            <li>
              <strong>Impactful:</strong> Every project I undertake aims to make a meaningful difference—whether by improving accessibility, enhancing productivity, or addressing pressing global challenges.
            </li>
            <li>
              <strong>User-Friendly:</strong> I prioritize intuitive design and seamless user experiences, ensuring that technology serves people of all backgrounds and abilities.
            </li>
            <li>
              <strong>Innovative:</strong> I embrace cutting-edge technologies and creative thinking to push boundaries and deliver forward-thinking solutions.
            </li>
          </ol>
          <p>
            I integrate sustainability into my development practices by:
          </p>
          <ul>
            <li>Optimizing code and infrastructure to reduce energy consumption and carbon footprint.</li>
            <li>Promoting digital minimalism, avoiding unnecessary features that waste resources.</li>
            <li>Leveraging green hosting solutions and encouraging clients to adopt environmentally responsible platforms.</li>
            <li>Educating users and peers about the environmental impact of digital technologies and advocating for sustainable tech practices.</li>
          </ul>
          <p>
            I believe in continuous learning, ethical AI development, and excellence in every line of code. My goal is to build a future where technology empowers individuals, strengthens communities, and respects the planet.
          </p>
          <div className="mission-button">
            <button onClick={() => navigate('/contact')}>Let's get In Touch</button>
          </div>
        </div>
        <div className="mission-sidebar">
          <img
            src="/mission.jpg?text=Mission"
            alt="Mission illustration"
            className="mission-image"
          />
          <img
            src="/mission2.jpg?text=Mission"
            alt="Mission illustration"
            className="mission-image"
          />
        </div>
      </div>
    </div>
    
  );
}

export default Mission;
