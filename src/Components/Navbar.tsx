import { useState } from "react";
import logo from "./../images/ul-logo.svg";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="header fixed min-w-full">
      <nav className="navbar">
        <div className="logo-container">
          <img src={logo} className="h-14 w-44" alt="Logo" />
        </div>

        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/skills">Skills</a></li>
          
          {/* Blog Dropdown */}
          <li className="relative">
            <button 
              className="dropdown-toggle" 
              onClick={toggleDropdown}
            >
              Blog
            </button>
            {isDropdownOpen && (
              <ul className="dropdown-menu absolute top-full left-0 bg-white shadow-lg rounded">
                <li><a href="/blog/page1" className="block px-4 py-2 hover:bg-gray-100">Page 1</a></li>
                <li><a href="/blog/page2" className="block px-4 py-2 hover:bg-gray-100">Page 2</a></li>
              </ul>
            )}
          </li>

          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
