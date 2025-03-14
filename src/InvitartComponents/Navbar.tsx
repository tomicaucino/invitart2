import { HeartIcon } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); // Close menu after clicking
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 shadow-md backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        <a href="/">
          <div className="flex items-center">
            <HeartIcon className="h-6 w-6 text-rose-600 mr-2" />
            <span className="text-xl font-serif text-rose-900">InvitArt</span>
          </div>
        </a>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex space-x-8">
          <a onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-rose-600 transition-colors cursor-pointer">Inicio</a>
          <a onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-rose-600 transition-colors cursor-pointer">Servicios</a>
          <a onClick={() => scrollToSection('gallery')} className="text-gray-700 hover:text-rose-600 transition-colors cursor-pointer">Galería</a>
          {/* <a onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-rose-600 transition-colors cursor-pointer">Testimonials</a> */}
          <a onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-rose-600 transition-colors cursor-pointer">Contacto</a>
        </nav>
        
        {/* Hamburger button */}
        <button 
          className="md:hidden text-gray-700"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        
        {/* Desktop CTA button */}
        <button onClick={() => scrollToSection('contact')} className="hidden md:block bg-rose-600 hover:bg-rose-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">
          Contactanos
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 py-3 space-y-4">
            <a onClick={() => scrollToSection('home')} className="block text-gray-700 hover:text-rose-600 transition-colors cursor-pointer">Inicio</a>
            <a onClick={() => scrollToSection('services')} className="block text-gray-700 hover:text-rose-600 transition-colors cursor-pointer">Servicios</a>
            <a onClick={() => scrollToSection('gallery')} className="block text-gray-700 hover:text-rose-600 transition-colors cursor-pointer">Galería</a>
            <a onClick={() => scrollToSection('contact')} className="block text-gray-700 hover:text-rose-600 transition-colors cursor-pointer">Contacto</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;