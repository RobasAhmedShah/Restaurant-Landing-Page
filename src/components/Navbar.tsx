import React, { useState } from 'react';
import { Menu, ShoppingBag, X } from 'lucide-react';
import logo from './calzonepoint.svg';
interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const navbarHeight = 64; // Height of the navbar (h-16 = 64px)
      const elementPosition = element.offsetTop - navbarHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/95 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            {/* Logo Placeholder */}
            <img
              src={logo} // Replace with the path to your logo
              alt="CALZONE Point Logo"
              className="inline-block h-16 md:h-20" // Adjust height as needed
            />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, 'home')}
              className="text-white hover:text-orange-500 transition-colors"
            >
              Home
            </a>
            <a
              href="#menu"
              onClick={(e) => handleNavClick(e, 'menu')}
              className="text-white hover:text-orange-500 transition-colors"
            >
              Menu
            </a>
            <a
              href="#deals"
              onClick={(e) => handleNavClick(e, 'deals')}
              className="text-white hover:text-orange-500 transition-colors"
            >
              Deals
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="text-white hover:text-orange-500 transition-colors"
            >
              Contact
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-orange-500 rounded-full transition-colors">
              <ShoppingBag className="h-6 w-6 text-white" />
            </button>
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 hover:bg-orange-500 rounded-full transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-white" />
              ) : (
                <Menu className="h-6 w-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black/95 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden z-50`}
      >
        <div className="flex flex-col p-6">
          <div className="flex justify-end mb-8">
            <button
              onClick={toggleMobileMenu}
              className="p-2 hover:bg-orange-500 rounded-full transition-colors"
            >
              <X className="h-6 w-6 text-white" />
            </button>
          </div>
          <div className="flex flex-col space-y-6">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, 'home')}
              className="text-white hover:text-orange-500 transition-colors text-lg font-medium"
            >
              Home
            </a>
            <a
              href="#menu"
              onClick={(e) => handleNavClick(e, 'menu')}
              className="text-white hover:text-orange-500 transition-colors text-lg font-medium"
            >
              Menu
            </a>
            <a
              href="#deals"
              onClick={(e) => handleNavClick(e, 'deals')}
              className="text-white hover:text-orange-500 transition-colors text-lg font-medium"
            >
              Deals
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="text-white hover:text-orange-500 transition-colors text-lg font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
          style={{ zIndex: 40 }}
        />
      )}
    </nav>
  );
};

export default Navbar;
