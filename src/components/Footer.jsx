import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { Icon: Facebook, href: "#", label: "Facebook" },
    { Icon: Instagram, href: "#", label: "Instagram" },
    { Icon: Twitter, href: "#", label: "Twitter" }
  ];

  const links = [
    { href: "#events", label: "Events" },
    { href: "#reservations", label: "Reservations" },
    { href: "#gallery", label: "Gallery" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand section */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-purple-500 mb-4">PULSE</h3>
            <p className="text-gray-400 mb-4">
              Experience the night like never before at the city's premier nightclub destination.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="text-gray-400 hover:text-purple-500 transition-colors"
                  aria-label={label}
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {links.map(({ href, label }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-gray-400 hover:text-purple-500 transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-white font-bold mb-4">Contact Us</h4>
            <address className="text-gray-400 not-italic">
              <p>123 Night Street</p>
              <p>City, State 12345</p>
              <p className="mt-2">Phone: (555) 123-4567</p>
              <p>Email: info@pulse.com</p>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="text-center text-gray-400">
            <p>&copy; {currentYear} PULSE Nightclub. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;