import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Schedule', path: '/schedule' },
    { label: 'Leaderboard', path: '/leaderboard' },
  ];

  const handleClick = (path: string) => {
    if (path.includes('#')) {
      const element = document.querySelector(path.split('#')[1] ? `#${path.split('#')[1]}` : '#home');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-auto px-6 py-3 rounded-2xl shadow-2xl" style={{
      background: 'linear-gradient(135deg, #f97316 0%, #ea580c 25%, #dc2626 50%, #b91c1c 75%, #991b1b 100%)',
      border: '3px solid #fbbf24',
      boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.2)'
    }}>
      <div className="flex items-center relative">
        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white hover:text-yellow-300 transition-colors duration-300 mr-4"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Navigation items */}
        <div className={`flex space-x-6 ${isOpen ? 'flex-col absolute top-full left-0 mt-2 bg-orange-800 rounded-lg p-2 shadow-lg' : 'hidden md:flex'}`}>
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`text-white hover:text-yellow-300 transition-all duration-300 font-black tracking-wide gaming-font hover:scale-110 transform relative group px-3 py-1 rounded-lg ${
                location.pathname === item.path ? 'text-yellow-300 bg-orange-700/50' : ''
              }`}
            >
              {item.label}
              {/* Active indicator */}
              {location.pathname === item.path && (
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-yellow-300 rounded-full"></div>
              )}
            </Link>
          ))}
        </div>
      </div>

    </nav>
  );
}
