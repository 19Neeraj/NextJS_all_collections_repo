
import React from 'react';

const Footer = () => {
  return (
    <footer className=" bg-bodyColor py-1 shadow-inner shadow-gray-800 pt-5 text-textLight">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between">
        <div className="mb-4 md:mb-0">
          <h4 className="font-bold text-lg mb-2">Contact Us</h4>
          <p>Email: 19FutureTech@gmail.com</p>
          <p>Phone: 946-641-7350</p>
        </div>
        <div className="mb-4 md:mb-0">
          <h4 className="font-bold text-lg mb-2">Follow Us</h4>
          <div className="flex space-x-4 justify-center">
            <a href="https://facebook.com" className=" hover:text-textGreen">
              Facebook
            </a>
            <a href="https://twitter.com" className="hover:text-textGreen">
              Twitter
            </a>
            <a href="https://instagram.com" className="hover:text-textGreen">
              Instagram
            </a>
          </div>
        </div>
        <div className="text-center md:text-right">
          <p className="text-sm">© {new Date().getFullYear()} 19FutureTech . All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
