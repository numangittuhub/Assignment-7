
import React, { useState } from 'react';
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white p-4 flex justify-between items-center border-b border-gray-200">
     
      <div className="text-xl font-semibold text-indigo-900">CS — Ticket System</div>
      
      
      <div className="md:hidden">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-700 hover:text-indigo-600 focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            {isOpen ? (
              <path d="M6 18L18 6M6 6l12 12" /> 
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" /> 
            )}
          </svg>
        </button>
      </div>
      
      
      <div className={`
        ${isOpen ? 'block' : 'hidden'} 
        absolute top-16 left-0 w-full bg-white z-10 p-4 border-b border-gray-200 shadow-md 
        md:static md:flex md:w-auto md:space-x-6 md:p-0 md:border-none md:shadow-none md:items-center
      `}>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
          <Link to="/" className="text-gray-700 hover:text-indigo-600" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/faq" className="text-gray-700 hover:text-indigo-600" onClick={() => setIsOpen(false)}>FAQ</Link>
          <Link to="/changelog" className="text-gray-700 hover:text-indigo-600" onClick={() => setIsOpen(false)}>Changelog</Link>
          <Link to="/blog" className="text-gray-700 hover:text-indigo-600" onClick={() => setIsOpen(false)}>Blog</Link>
          <Link to="/download" className="text-gray-700 hover:text-indigo-600" onClick={() => setIsOpen(false)}>Download</Link>
          <Link to="/contact" className="text-gray-700 hover:text-indigo-600" onClick={() => setIsOpen(false)}>Contact</Link>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 w-full md:w-auto mt-4 md:mt-0" onClick={() => setIsOpen(false)}>
            + New Ticket
          </button>
        </div>
      </div>
      
      

    </nav>
  );
}

export default Navbar;