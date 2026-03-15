import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './Layout.css';

export default function Layout() {
  return (
    <>
      <header className="site-header">
        <nav className="nav">
          <NavLink to="/" className="nav-logo">
            SY
          </NavLink>
          <ul className="nav-links">
            <li>
              <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main className="main">
        <Outlet />
      </main>
      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Saumya Yadav</p>
      </footer>
    </>
  );
}
