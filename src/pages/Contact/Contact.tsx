import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import './Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    alert('ขอบคุณสำหรับข้อความ! เราจะติดต่อกลับโดยเร็วที่สุด');
  };

  const contactInfo = [
    {
      icon: <Clock size={28} />,
      title: 'เวลาทำการ',
      details: ['เปิดบริการทุกวัน', '11:00 - 20:00 น.']
    },
    {
      icon: <Phone size={28} />,
      title: 'โทรศัพท์',
      details: ['02-095-4799', '086-411-4262']
    },
    {
      icon: <MapPin size={28} />,
      title: 'ที่อยู่',
      details: ['BJH Bangkok', 'กรุงเทพมหานคร']
    }
  ];

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="hero-badge">Contact Us</span>
            <h1>ติดต่อเรา</h1>
            <p>พร้อมให้บริการและตอบทุกคำถามของคุณ</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="contact-info-section">
        <div className="container">
          <div className="info-grid">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="info-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="info-icon">{info.icon}</div>
                <h3>{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p key={idx}>{detail}</p>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="container">
          <div className="form-grid">
            <motion.div
              className="form-content"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2>ส่งข้อความถึงเรา</h2>
              <p>
                กรอกแบบฟอร์มด้านล่าง ทีมงานจะติดต่อกลับโดยเร็วที่สุด
                หรือติดต่อเราโดยตรงผ่านช่องทางด้านข้าง
              </p>

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">ชื่อ-นามสกุล</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="กรอกชื่อของคุณ"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">เบอร์โทรศัพท์</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="0xx-xxx-xxxx"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email">อีเมล</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="service">บริการที่สนใจ</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="">เลือกบริการ</option>
                    <option value="eye">ศัลยกรรมตา</option>
                    <option value="nose">ศัลยกรรมจมูก</option>
                    <option value="facelift">ศัลยกรรมดึงหน้า</option>
                    <option value="pterygium">ศัลยกรรมต้อเนื้อ</option>
                    <option value="other">อื่นๆ</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">ข้อความ</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="รายละเอียดเพิ่มเติม..."
                    rows={5}
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary">
                  <Send size={20} />
                  ส่งข้อความ
                </button>
              </form>
            </motion.div>

            <motion.div
              className="quick-contact"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3>ติดต่อด่วน</h3>
              <p>ช่องทางติดต่อที่รวดเร็วที่สุด</p>

              <div className="quick-links">
                <a href="tel:020954799" className="quick-link phone-link">
                  <Phone size={24} />
                  <div>
                    <span>โทรหาเรา</span>
                    <strong>02-095-4799</strong>
                  </div>
                </a>

                <a href="https://lin.ee/D9KIJyb" target="_blank" rel="noopener noreferrer" className="quick-link line-link">
                  <MessageCircle size={24} />
                  <div>
                    <span>LINE Official</span>
                    <strong>@BJH Bangkok</strong>
                  </div>
                </a>

                <a href="https://m.me/106390821169844" target="_blank" rel="noopener noreferrer" className="quick-link messenger-link">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.36 2 2 6.13 2 11.7c0 2.91 1.19 5.44 3.14 7.17.16.13.26.35.27.57l.05 1.78c.04.57.61.94 1.13.71l1.98-.87c.17-.08.36-.1.53-.05.86.24 1.78.37 2.74.37 5.64 0 10.23-4.13 10.23-9.7C22.23 6.13 17.64 2 12 2zm6.07 7.49l-2.96 4.69c-.47.75-1.49.92-2.17.37l-2.35-1.76c-.18-.13-.43-.13-.6 0l-3.17 2.41c-.42.32-.97-.18-.69-.63l2.96-4.69c.47-.75 1.49-.92 2.17-.37l2.35 1.76c.18.13.43.13.6 0l3.17-2.41c.42-.32.97.18.69.63z"/>
                  </svg>
                  <div>
                    <span>Facebook Messenger</span>
                    <strong>ส่งข้อความ</strong>
                  </div>
                </a>

                <a href="https://maps.app.goo.gl/aRpPn8u5eJyvFpBj9" target="_blank" rel="noopener noreferrer" className="quick-link map-link">
                  <MapPin size={24} />
                  <div>
                    <span>Google Maps</span>
                    <strong>ดูแผนที่</strong>
                  </div>
                </a>
              </div>

              <div className="social-section">
                <h4>ติดตามเรา</h4>
                <div className="social-links">
                  <a href="https://www.facebook.com/bjhbangkok" target="_blank" rel="noopener noreferrer">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/bjh.bangkok" target="_blank" rel="noopener noreferrer">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                    </svg>
                  </a>
                  <a href="https://www.tiktok.com/@bjhbangkok" target="_blank" rel="noopener noreferrer">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Location</h2>
            <p className="section-subtitle">พบกับเราได้ที่ BJH Bangkok</p>
          </motion.div>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.4607!2d100.5688!3d13.7469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDQ0JzQ4LjgiTiAxMDDCsDM0JzA3LjciRQ!5e0!3m2!1sen!2sth!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="BJH Bangkok Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
