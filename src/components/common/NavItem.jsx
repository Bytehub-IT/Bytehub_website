import React from 'react';

const NavItem = ({ icon: Icon, label, active, onClick, delay }) => (
  <button
    className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 animate-in delay-${delay}
      ${active ? 'bg-blue-800 text-white shadow-lg' : 'text-gray-300 hover:text-blue-300 hover:bg-blue-900 bg-opacity-30'}
      focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`}
    onClick={onClick}
  >
    <Icon className="w-5 h-5 mr-2" />
    {label}
  </button>
);

export default NavItem;
