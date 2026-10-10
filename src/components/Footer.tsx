import { useSiteContent } from '../data/content';
import { Phone, Clock, MapPin, Mail, Globe } from 'lucide-react';

const Footer = () => {
  const { settings } = useSiteContent();
  return (
    <footer id="contact" className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-orange-500 mb-4">Contact Us</h3>
            <div className="space-y-4">
              <p className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-orange-500" />
                <a href={`tel:${settings.phone.replace(/[^+\d]/g, "")}`} className="hover:text-orange-500">{settings.phone}</a>
              </p>
              <p className="flex items-center">
                <Clock className="h-5 w-5 mr-2 text-orange-500" />
                <span>{settings.hours.map(line => <span key={line} className="block">{line}</span>)}</span>
              </p>
              <p className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-orange-500" />
                {settings.address}
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
            <h3 className="text-2xl font-bold text-orange-500 mb-4">{settings.name}</h3>
            <div className="space-y-4">
              <p className="flex items-center gap-2">
                <Mail className="h-5 w-5 shrink-0 text-orange-500" />
                <a href={`mailto:${settings.email}`} className="break-all hover:text-orange-500">{settings.email}</a>
              </p>
              <p className="flex items-center gap-2">
                <Globe className="h-5 w-5 shrink-0 text-orange-500" />
                <a href={settings.website} className="hover:text-orange-500">{settings.website.replace(/^https?:\/\//, "")}</a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p>&copy; {new Date().getFullYear()} {settings.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;