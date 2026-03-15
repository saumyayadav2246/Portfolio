import './Contact.css';

export default function Contact() {
  return (
    <section className="contact">
      <header className="contact-header">
        <h1>Contact</h1>
        <p>
          If you&apos;d like to talk about a project, internship, or
          collaboration, you can reach me using the form or links below.
        </p>
      </header>

      <div className="contact-layout">
        <form
          className="contact-form"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <label>
            Name
            <input type="text" name="name" placeholder="Your name" required />
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              required
            />
          </label>
          <label>
            Message
            <textarea
              name="message"
              rows="4"
              placeholder="Tell me a bit about what you have in mind."
              required
            />
          </label>
          <button type="submit" className="btn btn-primary contact-submit">
            Send (placeholder)
          </button>
        </form>

        <aside className="contact-info">
          <h2>Elsewhere</h2>
          <ul>
            <li>
              <span className="contact-label">Email</span>
              <span className="contact-value">yadavsaumya54@gmail.com</span>
            </li>
            <li>
              <span className="contact-label">GitHub</span>
              <a
                href="https://github.com/saumyayadav2246"
                target="_blank"
                rel="noreferrer"
                className="contact-link"
              >
                github.com/saumyayadav2246
              </a>
            </li>
          </ul>
        </aside>
      </div>
    </section>
  );
}

