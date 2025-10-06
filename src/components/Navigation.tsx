import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Schedule', path: '/schedule' },
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
    <nav className="fixed top-2 sm:top-4 left-1/2 transform -translate-x-1/2 z-50 w-auto max-w-[calc(100%-1rem)] sm:max-w-none px-3 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl shadow-2xl" style={{
      background: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 25%, #991b1b 50%, #7f1d1d 75%, #000000 100%)',
      border: '2px solid #dc2626',
      boxShadow: '0 8px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)'
    }}>
      <div className="flex items-center relative">
        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white hover:text-red-300 transition-colors duration-300 mr-2 sm:mr-4 p-1"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>

        {/* Navigation items */}
        <div className={`${isOpen ? 'flex flex-col absolute top-full left-0 mt-2 bg-red-900 rounded-lg p-2 shadow-lg w-full min-w-[120px]' : 'hidden'} md:flex md:flex-row md:static md:space-x-4 lg:space-x-6 md:bg-transparent md:p-0 md:shadow-none`}>
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`text-white hover:text-red-300 transition-all duration-300 font-black tracking-wide gaming-font hover:scale-110 transform relative group px-2 sm:px-3 py-1.5 sm:py-1 rounded-lg text-xs sm:text-sm ${
                location.pathname === item.path ? 'text-red-300 bg-red-800/50' : ''
              }`}
            >
              {item.label}
              {/* Active indicator */}
              {location.pathname === item.path && (
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-red-400 rounded-full"></div>
              )}
            </Link>
          ))}
        </div>
      </div>

    </nav>
  );
}
