import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Youtube, Mail, MapPin, Phone } from 'lucide-react';
import ecellLogo from '@/assets/ecell-logo.png';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Events', path: '/events' },
    { name: 'Team', path: '/team' },
    { name: 'Startups', path: '/startups' },
  ];

  const programs = [
    { name: 'Join Us', path: '/join' },
    { name: 'Collaborate', path: '/collaborate' },
    { name: 'Mentorship', path: '/about' },
    { name: 'Incubation', path: '/startups' },
  ];

  return (
    <footer className="bg-card/50 border-t border-border/50 mt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img
                src={ecellLogo}
                alt="NMIMS E-Cell Logo"
                className="h-10 w-auto glow-blue"
              />
              <div>
                <h3 className="text-xl font-bold text-gradient-primary">
                  NMIMS E-CELL
                </h3>
                <p className="text-sm text-muted-foreground">Kharghar</p>
              </div>
            </div>
            <p className="text-muted-foreground">
              Fueling Ideas. Building Entrepreneurs. Creating the future of innovation at NMIMS University, Kharghar.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors duration-300 hover:scale-110 transform"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gradient-primary">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gradient-accent">Programs</h4>
            <ul className="space-y-3">
              {programs.map((program) => (
                <li key={program.path}>
                  <Link
                    to={program.path}
                    className="text-muted-foreground hover:text-accent transition-colors duration-300"
                  >
                    {program.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-secondary">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                <div className="text-muted-foreground">
                  <p>NMIMS University</p>
                  <p>Kharghar, Navi Mumbai</p>
                  <p>Maharashtra, India</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-secondary flex-shrink-0" />
                <a
                  href="mailto:ecell@nmims.edu"
                  className="text-muted-foreground hover:text-secondary transition-colors duration-300"
                >
                  ecell@nmims.edu
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-secondary flex-shrink-0" />
                <a
                  href="tel:+919876543210"
                  className="text-muted-foreground hover:text-secondary transition-colors duration-300"
                >
                  +91 98765 43210
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/50 mt-12 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 NMIMS E-Cell, Kharghar. Made with{' '}
            <span className="text-red-500">❤️</span> by the NMIMS E-Cell Team.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;