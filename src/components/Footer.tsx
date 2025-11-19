import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-[#0B0C10] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Dekhnix Technologies</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering campuses with industry-ready training, workshops, and hackathons.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/5 hover:bg-[#30F0FF]/20 rounded-lg flex items-center justify-center smooth-transition">
                <Linkedin size={18} className="text-gray-400" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 hover:bg-[#30F0FF]/20 rounded-lg flex items-center justify-center smooth-transition">
                <Twitter size={18} className="text-gray-400" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 hover:bg-[#30F0FF]/20 rounded-lg flex items-center justify-center smooth-transition">
                <Instagram size={18} className="text-gray-400" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Programs', 'For Colleges', 'Events', 'About'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => onNavigate(item.toLowerCase().replace(' ', '-'))}
                    className="text-gray-400 hover:text-[#30F0FF] smooth-transition text-sm"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Programs</h4>
            <ul className="space-y-3">
              <li className="text-gray-400 text-sm">Campus Recruitment Training</li>
              <li className="text-gray-400 text-sm">Technical Workshops</li>
              <li className="text-gray-400 text-sm">On-Campus Hackathons</li>
              <li className="text-gray-400 text-sm">Custom Programs</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 text-gray-400 text-sm">
                <Mail size={16} className="text-[#30F0FF]" />
                <span>hello@dekhnix.tech</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400 text-sm">
                <Phone size={16} className="text-[#30F0FF]" />
                <span>+91 XXXXX XXXXX</span>
              </li>
              <li className="flex items-start space-x-3 text-gray-400 text-sm">
                <MapPin size={16} className="text-[#30F0FF] mt-1" />
                <span>Bangalore, Karnataka, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-500 text-sm">
            © 2024 Dekhnix Technologies. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-500 hover:text-[#30F0FF] smooth-transition">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-[#30F0FF] smooth-transition">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
