
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        isScrolled 
          ? "bg-white backdrop-blur-lg shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between px-0">
        <div className="flex items-center pl-6">
          <a href="/" className="flex items-center">
            <h1 className="text-xl md:text-2xl font-bold text-[#2B4565]">
              Joen Laitehuolto J. Simanainen
            </h1>
          </a>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 mr-20">
          <a href="#" className="text-[#2B4565] hover:text-[#1e3147] font-medium text-lg transition-colors">
            Etusivu
          </a>
          <a href="#palvelut" className="text-[#2B4565] hover:text-[#1e3147] font-medium text-lg transition-colors">
            Palvelut
          </a>
          <a 
            href="#tietoa" 
            className="text-[#2B4565] hover:text-[#1e3147] font-medium text-lg transition-colors"
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById('tietoa');
              if (element) {
                const elementRect = element.getBoundingClientRect();
                const absoluteElementTop = elementRect.top + window.pageYOffset;
                const offsetPosition = absoluteElementTop - 80;
                window.scrollTo({
                  top: offsetPosition,
                  behavior: 'smooth'
                });
              }
            }}
          >
            Tietoa yrityksestä
          </a>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-[#2B4565] mr-6" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-6">
          <div className="flex flex-col space-y-4">
            <a 
              href="#" 
              className="text-gray-700 hover:text-[#2B4565] font-medium text-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Etusivu
            </a>
            <a 
              href="#palvelut" 
              className="text-gray-700 hover:text-[#2B4565] font-medium text-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Palvelut
            </a>
            <a 
              href="#tietoa" 
              className="text-gray-700 hover:text-[#2B4565] font-medium text-lg transition-colors"
              onClick={(e) => {
                e.preventDefault();
                setIsMobileMenuOpen(false);
                const element = document.getElementById('tietoa');
                if (element) {
                  const elementRect = element.getBoundingClientRect();
                  const absoluteElementTop = elementRect.top + window.pageYOffset;
                  const offsetPosition = absoluteElementTop - 80;
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                  });
                }
              }}
            >
              Tietoa yrityksestä
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
