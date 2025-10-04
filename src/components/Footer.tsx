import { Mail, Instagram, Linkedin, MessageCircle } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { icon: Instagram, label: 'Instagram', href: '#', color: 'text-orange-500' },
    { icon: Linkedin, label: 'LinkedIn', href: '#', color: 'text-red-500' },
    { icon: MessageCircle, label: 'Discord', href: '#', color: 'text-yellow-500' }
  ];

  return (
    <footer className="bg-gradient-to-br from-orange-100 to-yellow-200 border-t-2 border-orange-400 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-black text-orange-600 mb-2 cyber-title">
            &lt;OVERCLOCKED/&gt;
          </h3>
          <p className="text-gray-800 text-sm hack-font font-bold">
            KERALA'S LARGEST CTF EVENT
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
          <div className="flex items-center gap-2">
            <Mail className="text-orange-500" size={16} />
            <a href="mailto:overclocked@rajagiritech.edu.in" className="text-gray-800 text-sm hack-font font-bold hover:text-orange-600 transition-colors">
              overclocked@rajagiritech.edu.in
            </a>
          </div>

          <div className="flex gap-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className={`w-8 h-8 rounded-lg flex items-center justify-center border-2 border-orange-300 hover:border-orange-500 transition-all duration-300 hover:scale-110 bg-white/80 ${social.color}`}
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </div>
        </div>

        <div className="pt-4 border-t border-orange-300">
          <div className="text-center">
            <p className="text-gray-700 text-xs hack-font font-bold">
              © 2025 OVERCLOCKED. ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
