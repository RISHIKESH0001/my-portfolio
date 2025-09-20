import React from 'react';
import { FiMail, FiGithub, FiTwitter, FiFacebook, FiInstagram } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const socialAccounts = [
    { icon: <FiMail className="h-6 w-6" />, name: "rishikeshchoudhury4037@gmail.com", url: "rishikeshchoudhury4037@gmail.com" },
    { icon: <FiGithub className="h-6 w-6" />, name: "RISHIKESH0001", url: "https://github.com/RISHIKESH0001" },
    { icon: <FiTwitter className="h-6 w-6" />, name: "@rishi", url: "https://twitter.com/rishi" },
    { icon: <FiFacebook className="h-6 w-6" />, name: "Rishikesh", url: "https://facebook.com/profile.php?id=6155398859112" },
    { icon: <FiInstagram className="h-6 w-6" />, name: "rkgrylls", url: "https://instagram.com/rkgrylls" },
    { icon: <FaWhatsapp className="h-6 w-6" />, name: "+916291221808", url: "https://wa.me/6291221808" }
  ];

  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="max-w-4xl mx-auto overflow-hidden">
        {/* Social Icons Grid */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          {socialAccounts.map((account, index) => (
            <a 
              key={index}
              href={account.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors group  overflow-hidden"
            >
              <span className="group-hover:scale-110 transition-transform">
                {account.icon}
              </span>
              <span className="text-sm">{account.name}</span>
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Rishi. All rights reserved.</p>
          <p className="mt-1">The content and images are protected by copyright law.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;