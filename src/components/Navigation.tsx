import { useState, useEffect } from 'react';
import { Menu, X, BookOpen, Calendar, Users, Building2, Phone } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Programs', id: 'programs' },
    { name: 'For Colleges', id: 'colleges' },
    { name: 'Events', id: 'events' },
    { name: 'About', id: 'about' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'glass-morphism-dark shadow-lg py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div
          onClick={() => onNavigate('home')}
          className="flex items-center space-x-3 cursor-pointer group"
        >
          <div className="w-10 h-10 bg-gradient-to-br from-[#30F0FF] to-[#9A6CFF] rounded-lg flex items-center justify-center group-hover:scale-110 smooth-transition">
            <BookOpen className="w-6 h-6 text-[#0B0C10]" />
          </div>
          <span className="text-2xl font-bold text-white">
            Dekhnix <span className="gradient-text">Technologies</span>
          </span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`text-sm font-medium transition-all duration-300 ${
                currentPage === item.id
                  ? 'text-[#30F0FF] text-glow'
                  : 'text-gray-300 hover:text-[#30F0FF]'
              }`}
            >
              {item.name}
            </button>
          ))}
          <button
            onClick={() => onNavigate('contact')}
            className="px-6 py-2.5 bg-gradient-to-r from-[#30F0FF] to-[#9A6CFF] text-[#0B0C10] font-semibold rounded-lg hover:shadow-lg hover:shadow-[#30F0FF]/50 smooth-transition hover:scale-105"
          >
            Book a Program
          </button>
        </div>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white p-2"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden glass-morphism-dark mt-4 mx-4 rounded-2xl overflow-hidden animate-fadeIn">
          <div className="flex flex-col p-6 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`text-left py-2 px-4 rounded-lg transition-all ${
                  currentPage === item.id
                    ? 'bg-[#30F0FF]/10 text-[#30F0FF]'
                    : 'text-gray-300 hover:bg-white/5'
                }`}
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => {
                onNavigate('contact');
                setIsMobileMenuOpen(false);
              }}
              className="py-3 px-6 bg-gradient-to-r from-[#30F0FF] to-[#9A6CFF] text-[#0B0C10] font-semibold rounded-lg text-center"
            >
              Book a Program
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
