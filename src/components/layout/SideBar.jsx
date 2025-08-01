import React from 'react';
import { Home, Compass, Bookmark, User } from 'lucide-react';

const Sidebar = () => {
  const navItems = [
    { name: 'Home', icon: <Home />, href: '/' },
    { name: 'Explore', icon: <Compass />, href: '/explore' },
    { name: 'Bookmarks', icon: <Bookmark />, href: '/bookmarks' },
    { name: 'Profile', icon: <User />, href: '/profile' },
  ];

  return (
    <aside className="hidden md:block w-64 h-screen sticky top-0 border-r border-gray-200 p-4">
      <div className="text-xl font-bold mb-6">町の風景 (TownScape)</div>
      <nav className="space-y-4">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="flex items-center gap-3 text-gray-700 hover:text-black transition-colors"
          >
            {item.icon}
            {item.name}
          </a>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
