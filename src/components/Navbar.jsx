import { NavLink, Link } from "react-router-dom";

const NAVLINKS = [
  { id: 1, label: "Home", to: "/home" },
  { id: 2, label: "About", to: "/about" },
  { id: 3, label: "Projects", to: "/projects" },
  { id: 4, label: "Contact", to: "/contact" },
];

function Navbar() {
  return (
    <header className="bg-teal-900">
      <nav className="flex justify-between w-7xl mx-auto text-teal-200">
        <Link to="/" className="font-extrabold text-lg self-center">
          Website
        </Link>

        <ul className="flex gap-6 font-semibold py-3 items-center">
          {NAVLINKS.map(({ id, label, to }) => (
            <li key={id}>
              <NavLink
                to={to}
                className="flex hover:bg-teal-100/10 py-1 px-3 rounded-md"
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
