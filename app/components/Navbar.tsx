// app/components/Navbar.tsx

import { Link, NavLink } from "@remix-run/react"

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm py-4 mb-4">
      <div className="container mx-auto px-4 flex items-center">
        <Link to="/" className="text-blue-600 font-bold text-2xl mr-8">
          Persona
        </Link>
        <div>
          <NavLink to="/" className="text-gray-700 hover:text-blue-600 mx-2">
            Adventures
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
