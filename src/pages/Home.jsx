import { Link } from 'react-router-dom';
import TypingHero from '../components/TypingHero';
import './Home.css';

// Projects based on GitHub repositories: https://github.com/saumyayadav2246?tab=repositories
const projects = [
  {
    title: 'Online Skill Based Games',
    role: 'PHP Web App',
    description:
      'An online games project exploring dynamic pages and basic game logic using PHP.',
    tech: ['PHP', 'Web'],
    link: 'https://github.com/saumyayadav2246/online_skill_based_games',
  },
  {
    title: 'RGB Color Generator',
    role: 'Frontend',
    description:
      'RGB color generator to experiment with different color values for UI designs.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://github.com/saumyayadav2246/RGB',
  },
  {
    title: 'Calculator',
    role: 'Frontend',
    description:
      'A simple calculator interface built to practice layout and basic JavaScript logic.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://github.com/saumyayadav2246/Calculator',
  },
  {
    title: 'Grocery App',
    role: 'Web App',
    description:
      'A grocery-focused project that manages everyday items and improves daily workflows.',
    tech: ['Web', 'JavaScript'],
    link: 'https://github.com/saumyayadav2246/Grocery-app',
  },
  {
    title: 'Car Rental Website',
    role: 'Web Design',
    description:
      'Car rental website created with WordPress, focused on clear sections and accessible layout.',
    tech: ['WordPress'],
    link: 'https://github.com/saumyayadav2246/CarRental',
  },
  {
    title: 'Insurance Management System',
    role: '.NET Project',
    description:
      'Insurance management system built using the .NET Framework to manage policies and records.',
    tech: ['.NET Framework'],
    link: 'https://github.com/saumyayadav2246/insurance-management-system',
  },
  {
    title: 'OST Practicals',
    role: 'Academic Work',
    description:
      'Collection of Operating Systems Theory practical repositories (OST, ost2nd, practicals).',
    tech: ['C / OS concepts'],
    link: 'https://github.com/saumyayadav2246?tab=repositories',
  },
  {
    title: 'Private Client / College Projects',
    role: 'Private Repos',
    description:
      'Additional work stored in private repositories, available on request for hiring or collaboration.',
    tech: ['Various'],
    link: 'https://github.com/saumyayadav2246',
  },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <TypingHero />
        <p className="hero-tagline">
          Building clean, fast experiences on the web.
        </p>
        <div className="hero-cta">
          <Link to="/about" className="btn btn-primary">
            About Me
          </Link>
        </div>
      </section>

      <section className="portfolio" aria-labelledby="portfolio-title">
        <div className="portfolio-header">
          <h2 id="portfolio-title">Portfolio</h2>
          <p className="portfolio-intro">
            Selected projects from my GitHub that show how I learn, design, and build.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.title} className="project-card">
              <div className="project-header">
                <h3>
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link"
                    >
                      {project.title}
                    </a>
                  ) : (
                    project.title
                  )}
                </h3>
                <span className="project-role">{project.role}</span>
              </div>
              <p className="project-description">{project.description}</p>
              <ul className="project-tags">
                {project.tech.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
