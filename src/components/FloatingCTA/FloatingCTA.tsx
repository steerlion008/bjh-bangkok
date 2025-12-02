import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import './FloatingCTA.css';

const FloatingCTA: React.FC = () => {
  return (
    <div className="floating-cta">
      <a href="tel:020954799" className="cta-btn call-btn">
        <Phone size={20} />
        <span>โทรเลย</span>
      </a>
      <a href="https://lin.ee/D9KIJyb" target="_blank" rel="noopener noreferrer" className="cta-btn chat-btn">
        <MessageCircle size={20} />
        <span>แชทเลย</span>
      </a>
    </div>
  );
};

export default FloatingCTA;
