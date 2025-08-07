import { Pizza, MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-white/10 rounded-lg">
                <Pizza className="h-6 w-6" />
              </div>
              <span className="text-xl font-bold">Bella Pizza</span>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Authentic Italian pizzas made with love and the finest ingredients. 
              Experience the taste of Italy in every bite.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact Us</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>123 Pizza Street, City, State 12345</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>(555) 123-PIZZA</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>hello@bellapizza.com</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Hours</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <div>
                  <div>Mon-Thu: 11AM - 10PM</div>
                  <div>Fri-Sat: 11AM - 11PM</div>
                  <div>Sunday: 12PM - 9PM</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <div className="space-y-2 text-sm">
              <a href="/menu" className="block hover:text-white transition-colors">
                Our Menu
              </a>
              <a href="/order" className="block hover:text-white transition-colors">
                Order Online
              </a>
              <a href="#" className="block hover:text-white transition-colors">
                About Us
              </a>
              <a href="#" className="block hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-primary-foreground/80">
          <p>&copy; 2024 Bella Pizza. All rights reserved. Made with ❤️ for pizza lovers.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;