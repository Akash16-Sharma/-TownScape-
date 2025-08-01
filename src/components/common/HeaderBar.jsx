// src/components/common/HeaderBar.jsx
import React from 'react';
import { Bell, User, Home } from 'lucide-react'; // Optional icon lib

const HeaderBar = () => {
  return (
    <header className="bg-white shadow-md py-3 px-6 flex justify-between items-center fixed top-0 left-0 right-0 z-50">
      <div className="text-xl font-bold text-indigo-600">町の風景 (TownScape)</div>
      <nav className="flex gap-4">
        <Home className="text-gray-600 hover:text-indigo-600 cursor-pointer" />
        <Bell className="text-gray-600 hover:text-indigo-600 cursor-pointer" />
        <User className="text-gray-600 hover:text-indigo-600 cursor-pointer" />
      </nav>
    </header>
  );
};

export default HeaderBar;
