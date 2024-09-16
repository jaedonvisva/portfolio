import React from 'react';

const Portfolio: React.FC = () => {
  return (
    <div className="portfolio">
      <header>
        <h1>YOUR NAME</h1>
        <nav>
          <a href="#about">ABOUT</a>
          <a href="#work">WORK</a>
        </nav>
        <div className="contact-info">
          <a href="#contact">LET'S CONNECT</a>
          <a href="mailto:your.email@example.com">your.email@example.com</a>
        </div>
      </header>

      <main>
        <section className="hero">
          <h2>
            SENIOR<br />
            EXPERIENCE<br />
            DESIGNER©
          </h2>
          <p>CURRENTLY CRAFTING EXPERIENCES AT</p>
          <p>YOUR COMPANY (2021 - PRESENT)</p>
        </section>

        <section className="profile-image">
          <img src="/placeholder.svg?height=400&width=600" alt="Profile" />
        </section>

        <section id="about">
          <h3>ABOUT</h3>
          <p>Your brief bio goes here. Describe your experience, skills, and passion for design.</p>
        </section>

        <section id="work">
          <h3>WORK</h3>
          <div className="project-grid">
            {[1, 2, 3, 4].map((project) => (
              <div key={project} className="project-card">
                <h4>Project {project}</h4>
                <p>Brief description of the project and your role.</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact">
          <h3>LET'S CONNECT</h3>
          <p>Interested in working together? Get in touch and let's discuss your project.</p>
          <a href="mailto:your.email@example.com" className="cta-button">Send an Email</a>
        </section>
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </footer>

      <style jsx>{`
        .portfolio {
          font-family: Arial, sans-serif;
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem;
          background-color: white;
          color: black;
        }

        header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 4rem;
        }

        h1 {
          font-size: 1.2rem;
          font-weight: bold;
        }

        nav a, .contact-info a {
          margin-left: 1.5rem;
          text-decoration: none;
          color: black;
        }

        nav a:hover, .contact-info a:hover {
          text-decoration: underline;
        }

        .hero h2 {
          font-size: 4rem;
          font-weight: bold;
          line-height: 1.2;
          margin-bottom: 1rem;
        }

        .hero p {
          font-size: 0.9rem;
          text-transform: uppercase;
        }

        .profile-image img {
          width: 100%;
          height: auto;
          border-radius: 1.5rem;
          margin: 2rem 0;
        }

        h3 {
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 1rem;
        }

        .project-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
        }

        .project-card {
          border: 1px solid #e0e0e0;
          border-radius: 0.5rem;
          padding: 1rem;
        }

        .cta-button {
          display: inline-block;
          background-color: black;
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: 2rem;
          text-decoration: none;
          margin-top: 1rem;
        }

        .cta-button:hover {
          background-color: #333;
        }

        footer {
          margin-top: 4rem;
          text-align: center;
          font-size: 0.9rem;
        }

        @media (max-width: 768px) {
          header {
            flex-direction: column;
            align-items: flex-start;
          }

          nav, .contact-info {
            margin-top: 1rem;
          }

          nav a, .contact-info a {
            margin-left: 0;
            margin-right: 1rem;
          }

          .hero h2 {
            font-size: 3rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Portfolio;