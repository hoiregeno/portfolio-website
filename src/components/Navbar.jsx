import { NavLink, Link } from "react-router-dom";

const NAVLINKS = [
  { id: 1, label: "Home", to: "/home" },
  { id: 2, label: "About", to: "/about" },
  { id: 3, label: "Projects", to: "/projects" },
  { id: 4, label: "Contact", to: "/contact" },
];

function Navbar() {
  return (
    <nav className="bg-teal-900 flex justify-between text-teal-200 px-10 py-2">
      <Link to="/" className="self-center font-extrabold">
        Website
      </Link>

      <ul className="flex items-center font-semibold gap-6">
        {NAVLINKS.map(({ id, label, to }) => (
          <li key={id}>
            <NavLink
              to={to}
              className="flex py-1 px-4 hover:bg-teal-200/10 rounded-md transition-colors duration-150 ease-in"
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
