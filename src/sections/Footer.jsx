import React from "react";

const Footer = () => {
  return (
    <footer className=" bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold mb-4">MyWebsite</h2>
        <p className="text-gray-400">© 2026 MyWebsite. All rights reserved.</p>
        <div className="mt-6 flex justify-center space-x-6">
          <a href="#" className="hover:text-blue-400">
            Twitter
          </a>

          <a href="#" className="hover:text-blue-400">
            LinkedIn
          </a>

          <a href="#" className="hover:text-blue-400">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
