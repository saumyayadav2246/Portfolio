import './About.css';

export default function About() {
  return (
    <article className="about">
      <h1 className="about-title">About</h1>
      <div className="about-content">
        <p>
          I'm <strong>Saumya Yadav</strong>, a Software Development Engineer
          based in Rajkot, Gujarat, India. I like building reliable, user-friendly
          software with clean structure and sharp, minimal interfaces.
        </p>
        <p>
          I enjoy working across the stack — from frontend interfaces to backend
          logic — and I&apos;ve gained hands-on experience through academic
          projects and a full stack internship.
        </p>

        <section className="about-section">
          <h2>Education</h2>
          <ul>
            <li>
              <strong>B.Tech (D2D) in Computer Engineering</strong> — Marwadi University,
              Rajkot (2024–2027), CGPA: 7.38
            </li>
            <li>
              <strong>Diploma in Computer Engineering</strong> — Darshan University,
              Rajkot (2021–2024), CGPA: 8.68
            </li>
          </ul>
        </section>

        <section className="about-section">
          <h2>Experience</h2>
          <ul>
            <li>
              <strong>Full Stack Developer Intern</strong>, Alps Designs, Rajkot
              (Apr 2021 – Apr 2024) — contributed to the SVCTR application
              backend and performance, and improved the responsiveness and
              functionality of the Roy Spices website.
            </li>
          </ul>
        </section>

        <section className="about-skills">
          <h2>Skills</h2>
          <ul>
            <li>
              <strong>Languages:</strong> C, Java, Dart, PHP, JavaScript, HTML, CSS
            </li>
            <li>
              <strong>Frameworks:</strong> Flutter, ASP.NET, React, Node, Express,
              jQuery, Bootstrap
            </li>
            <li>
              <strong>Tools:</strong> Figma (UI/UX), WordPress, Canva
            </li>
          </ul>
        </section>

        <section className="about-section">
          <h2>Certifications</h2>
          <ul>
            <li>Mini Project Competition — 1st rank for an interior design website (Darshan University)</li>
            <li>Hack The Mountains 5.0 — 30-hour hybrid hackathon participation</li>
            <li>Database and SQL — Infosys Springboard</li>
            <li>Linux Essentials — Cisco Networking Academy</li>
          </ul>
        </section>
      </div>
    </article>
  );
}
