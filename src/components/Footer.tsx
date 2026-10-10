import { Phone, Clock, MapPin, Mail, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-orange-500 mb-4">Contact Us</h3>
            <div className="space-y-4">
              <p className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-orange-500" />
                <a href="tel:+19055950211" className="hover:text-orange-500">(905) 595-0211</a>
              </p>
              <p className="flex items-center">
                <Clock className="h-5 w-5 mr-2 text-orange-500" />
                <span>Monday–Thursday: 4 PM–11 PM<br />Friday: 2 PM–11 PM<br />Saturday–Sunday: 1 PM–11 PM</span>
              </p>
              <p className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-orange-500" />
                35 King St E, Mississauga
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-orange-500 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-orange-500 transition-colors">Home</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-orange-500 transition-colors">Menu</a>
              </li>
              <li>
                <a href="#deals" className="hover:text-orange-500 transition-colors">Deals</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-orange-500 mb-4">Calzone Point</h3>
            <div className="space-y-4">
              <p className="flex items-center gap-2">
                <Mail className="h-5 w-5 shrink-0 text-orange-500" />
                <a href="mailto:calzonepoint@gmail.com" className="break-all hover:text-orange-500">calzonepoint@gmail.com</a>
              </p>
              <p className="flex items-center gap-2">
                <Globe className="h-5 w-5 shrink-0 text-orange-500" />
                <a href="https://www.calzonepoint.ca" className="hover:text-orange-500">www.calzonepoint.ca</a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p>&copy; {new Date().getFullYear()} Calzone Point. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;