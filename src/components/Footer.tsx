import { Mail, Instagram, Linkedin, MessageCircle, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { icon: Instagram, label: 'Instagram', href: '#', color: '#ff006e' },
    { icon: Linkedin, label: 'LinkedIn', href: '#', color: '#00d9ff' },
    { icon: MessageCircle, label: 'Discord', href: '#', color: '#00ff9d' }
  ];

  return (
    <footer id="contact" className="bg-[#0a0a0a] border-t border-[#00ff9d]/20 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-[#00ff9d] mb-4 glow-green font-mono">
              &lt;OVERCLOCKED/&gt;
            </h3>
            <p className="text-[#a0a0a0] mb-4">
              The Ultimate Capture The Flag Experience
            </p>
            <p className="text-[#a0a0a0] text-sm">
              Part of <span className="text-[#00d9ff] font-semibold">Abhiyanthriki 2025</span>
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-4">Contact Information</h4>
            <div className="space-y-3 text-[#a0a0a0]">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-[#00ff9d] flex-shrink-0 mt-1" />
                <span className="text-sm">
                  Rajagiri School of Engineering & Technology<br />
                  Rajagiri Valley, Kakkanad, Kochi
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-[#00d9ff] flex-shrink-0" />
                <a href="mailto:overclocked@rajagiritech.edu.in" className="text-sm hover:text-[#00d9ff] transition-colors">
                  overclocked@rajagiritech.edu.in
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-[#ff006e] flex-shrink-0" />
                <span className="text-sm">+91 1234567890</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-4">Connect With Us</h4>
            <div className="flex gap-4 mb-6">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-12 h-12 rounded-lg flex items-center justify-center border transition-all duration-300 hover:scale-110"
                    style={{
                      borderColor: `${social.color}40`,
                      backgroundColor: `${social.color}10`
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = social.color;
                      e.currentTarget.style.backgroundColor = `${social.color}20`;
                      e.currentTarget.style.boxShadow = `0 0 20px ${social.color}40`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = `${social.color}40`;
                      e.currentTarget.style.backgroundColor = `${social.color}10`;
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <Icon style={{ color: social.color }} size={20} />
                  </a>
                );
              })}
            </div>
            <p className="text-[#a0a0a0] text-sm">
              Join our community for updates, discussions, and support
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-[#00ff9d]/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[#a0a0a0] text-sm">
            <p>
              © 2025 OverClocked. All rights reserved. Organized by Rajagiri School of Engineering & Technology.
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[#00ff9d] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#00ff9d] transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-[#00ff9d] transition-colors">Rules</a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-[#a0a0a0] text-xs">
            Designed with passion for cybersecurity excellence
          </p>
        </div>
      </div>
    </footer>
  );
}
