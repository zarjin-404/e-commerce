import React from 'react';

export default function Footer() {
  return (
    <footer className="py-4 text-white bg-gray-800">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 E-Shop. All rights reserved.</p>
        <div className="mt-2">
          <a href="#" className="mx-2 hover:text-gray-300">
            Privacy Policy
          </a>
          <a href="#" className="mx-2 hover:text-gray-300">
            Terms of Service
          </a>
          <a href="#" className="mx-2 hover:text-gray-300">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
}
