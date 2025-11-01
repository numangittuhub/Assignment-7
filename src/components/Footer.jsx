// Footer.jsx
import React from 'react';

function Footer() {
  return (
    <footer className="bg-black text-white p-6">
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        <div>
          <h3 className="text-xl font-semibold mb-2">CS — Ticket System</h3>
          <p className="text-sm text-gray-400">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
        </div>

       
        <div>
          <h4 className="text-lg font-medium mb-2">Company</h4>
          <ul className="text-sm text-gray-400 space-y-1">
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Our Mission</a></li>
            <li><a href="#" className="hover:text-white">Contact Saled</a></li>
          </ul>
        </div>

       
        <div>
          <h4 className="text-lg font-medium mb-2">Services</h4>
          <ul className="text-sm text-gray-400 space-y-1">
            <li><a href="#" className="hover:text-white">Products & Services</a></li>
            <li><a href="#" className="hover:text-white">Customer Stories</a></li>
            <li><a href="#" className="hover:text-white">Download Apps</a></li>
          </ul>
        </div>

       
        <div>
          <h4 className="text-lg font-medium mb-2">Information</h4>
          <ul className="text-sm text-gray-400 space-y-1">
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-white">Join Us</a></li>
          </ul>
        </div>

       
        <div>
          <h4 className="text-lg font-medium mb-2">Social Links</h4>
          <ul className="text-sm text-gray-400 space-y-1">
            <li><a href="#" className="hover:text-white">X: @CS — Ticket System</a></li>
            <li><a href="#" className="hover:text-white">in: @CS — Ticket System</a></li>
            <li><a href="#" className="hover:text-white">f: @CS — Ticket System</a></li>
            <li><a href="mailto:support@cst.com" className="hover:text-white">support@cst.com</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-6 text-center text-sm text-gray-500">
        © 2025 CS — Ticket System. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;