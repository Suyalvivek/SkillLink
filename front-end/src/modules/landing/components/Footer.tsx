import React, { useState } from 'react';
import { 
  ArrowRight, 
  Mail, 
  Phone, 
  MapPin, 
  Twitter, 
  Linkedin, 
  Github, 
  Instagram,
  Youtube,
  Globe,
  Shield,
  Award,
  Heart,
  ExternalLink
} from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = () => {
    if (email.includes('@')) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const footerLinks = {
    product: [
      { name: 'Features', href: '#features' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'Enterprise', href: '#enterprise' },
      { name: 'API Documentation', href: '#api', external: true },
      { name: 'Integrations', href: '#integrations' },
      { name: 'What\'s New', href: '#changelog' }
    ],
    solutions: [
      { name: 'For Startups', href: '#startups' },
      { name: 'For Agencies', href: '#agencies' },
      { name: 'For Enterprise', href: '#enterprise' },
      { name: 'For Freelancers', href: '#freelancers' },
      { name: 'Project Templates', href: '#templates' },
      { name: 'Case Studies', href: '#case-studies' }
    ],
    resources: [
      { name: 'Blog', href: '#blog' },
      { name: 'Help Center', href: '#help' },
      { name: 'Community', href: '#community' },
      { name: 'Webinars', href: '#webinars' },
      { name: 'Downloads', href: '#downloads' },
      { name: 'System Status', href: '#status', external: true }
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Careers', href: '#careers' },
      { name: 'Press Kit', href: '#press' },
      { name: 'Investors', href: '#investors' },
      { name: 'Contact', href: '#contact' },
      { name: 'Partner Program', href: '#partners' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '#privacy' },
      { name: 'Terms of Service', href: '#terms' },
      { name: 'Cookie Policy', href: '#cookies' },
      { name: 'GDPR Compliance', href: '#gdpr' },
      { name: 'Security', href: '#security' },
      { name: 'Acceptable Use', href: '#acceptable-use' }
    ]
  };

  const socialLinks = [
    { name: 'Twitter', icon: <Twitter className="w-5 h-5" />, href: '#twitter', color: 'hover:text-blue-400' },
    { name: 'LinkedIn', icon: <Linkedin className="w-5 h-5" />, href: '#linkedin', color: 'hover:text-blue-600' },
    { name: 'GitHub', icon: <Github className="w-5 h-5" />, href: '#github', color: 'hover:text-slate-900' },
    { name: 'Instagram', icon: <Instagram className="w-5 h-5" />, href: '#instagram', color: 'hover:text-pink-500' },
    { name: 'YouTube', icon: <Youtube className="w-5 h-5" />, href: '#youtube', color: 'hover:text-red-500' }
  ];

  const certifications = [
    { name: 'SOC 2 Type II', icon: <Shield className="w-5 h-5" /> },
    { name: 'ISO 27001', icon: <Award className="w-5 h-5" /> },
    { name: 'GDPR Compliant', icon: <Globe className="w-5 h-5" /> }
  ];

  const contactInfo = [
    { 
      icon: <Mail className="w-5 h-5" />, 
      label: 'Email', 
      value: 'hello@skilllink.com',
      href: 'mailto:hello@skilllink.com'
    },
    { 
      icon: <Phone className="w-5 h-5" />, 
      label: 'Phone', 
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567'
    },
    { 
      icon: <MapPin className="w-5 h-5" />, 
      label: 'Address', 
      value: 'Sector 62, Noida, Uttar Pradesh 201309, India',
      href: 'https://maps.google.com'
    }
  ];

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid lg:grid-cols-6 gap-8 mb-12">
          {/* Company Info & Newsletter */}
          <div className="lg:col-span-2">
            {/* Logo & Description */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
                <span className="text-xl font-bold">SkillLink</span>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Connecting talented professionals for seamless project collaboration. 
                Build better projects with your dream team, manage tasks efficiently, 
                and deliver exceptional results.
              </p>
            </div>

            {/* Newsletter Signup */}
            <div className="mb-8">
              <h4 className="font-semibold text-white mb-3">Stay Updated</h4>
              <p className="text-slate-400 text-sm mb-4">
                Get the latest updates, tips, and industry insights delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                  onClick={handleNewsletterSubmit}
                  className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center"
                >
                  {isSubscribed ? (
                    'Subscribed!'
                  ) : (
                    <>
                      Subscribe <ArrowRight className="w-4 h-4 ml-2" />
                    </>
                  )}
                </button>
              </div>
              {isSubscribed && (
                <p className="text-green-400 text-sm mt-2">Thank you for subscribing!</p>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center text-slate-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  <div className="mr-3 text-slate-400">
                    {item.icon}
                  </div>
                  <span>{item.value}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-slate-300 hover:text-white transition-colors duration-200 text-sm flex items-center"
                  >
                    {link.name}
                    {link.external && <ExternalLink className="w-3 h-3 ml-1" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Solutions</h4>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-slate-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-slate-300 hover:text-white transition-colors duration-200 text-sm flex items-center"
                  >
                    {link.name}
                    {link.external && <ExternalLink className="w-3 h-3 ml-1" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3 mb-6">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-slate-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div className="mb-6">
              <h5 className="font-semibold text-white mb-3 text-sm">Follow Us</h5>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`text-slate-400 transition-colors duration-200 ${social.color}`}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h5 className="font-semibold text-white mb-3 text-sm">Certifications</h5>
              <div className="space-y-2">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center text-slate-400 text-xs">
                    <div className="mr-2">{cert.icon}</div>
                    <span>{cert.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8">
          {/* Legal Links */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-2 mb-6">
            {footerLinks.legal.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-slate-400 hover:text-white text-xs transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="flex items-center text-slate-400 text-sm mb-4 lg:mb-0">
              <span>© 2024 SkillLink Inc. All rights reserved.</span>
              <span className="mx-2">•</span>
              <span className="flex items-center">
                Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> in India
              </span>
            </div>

            {/* Language & Region Selector */}
            <div className="flex items-center space-x-4">
              <button className="flex items-center text-slate-400 hover:text-white text-sm transition-colors duration-200">
                <Globe className="w-4 h-4 mr-2" />
                English (IN)
              </button>
              <div className="text-slate-600">|</div>
              <span className="text-slate-400 text-sm">INR</span>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center text-white shadow-lg transition-colors duration-200 z-50"
        aria-label="Back to top"
      >
        <ArrowRight className="w-5 h-5 rotate-[-90deg]" />
      </button>
    </footer>
  );
};

export default Footer;