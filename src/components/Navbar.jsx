import { NavLink, Link } from "react-router-dom";

const NAVLINKS = [
  { id: 1, label: "Home", to: "/home" },
  { id: 2, label: "About", to: "/about" },
  { id: 3, label: "Projects", to: "/projects" },
  { id: 4, label: "Contact", to: "/contact" },
];

function Navbar() {
  return (
    <nav>
      <Link to="/">Website</Link>
      <ul>
        {NAVLINKS.map(({ id, label, to }) => (
          <li key={id}>
            <NavLink to={to}>{label}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
