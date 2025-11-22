import React from "react";

const Navigation = ({ mobile }) => {
  return (
    <nav>
      <ul
        className={
          mobile
            ? "flex flex-col space-y-4 text-white text-lg"
            : "flex space-x-8 text-white text-lg"
        }
      >
        <li className="hover:text-yellow-400 cursor-pointer transition">Home</li>
        <li className="hover:text-yellow-400 cursor-pointer transition">About</li>
        <li className="hover:text-yellow-400 cursor-pointer transition">Services</li>
        <li className="hover:text-yellow-400 cursor-pointer transition">Contact</li>
      </ul>
    </nav>
  );
};

export default Navigation;
