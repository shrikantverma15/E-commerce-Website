import React from "react";
import { Link } from "react-router-dom";

const navigations = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Product',
    path: '/product',
  },
  {
    name: 'About',
    path: '/about',
  },
  {
    name: 'Contact',
    path: '/contact',
  },
];

const Header = () => {
  return (
    <header className="text-gray-600 body-font shadow-md bg-clip-padding">
      <div className="container mx-auto cursor-pointer flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-yellow-500 rounded-full" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">E-Commerce Website</span>
        </Link>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center">
          {navigations.map((nav, index) => (
            <Link to={nav.path} key={index} className="mr-5 hover:text-gray-900">
              {nav.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
