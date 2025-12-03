import React from 'react';
import { motion } from 'framer-motion';
import { Check, Phone, Clock, Award, Users, Star } from 'lucide-react';
import './Rhinoplasty.css';

const Rhinoplasty: React.FC = () => {
  const packages = [
    {
      title: 'เสริมจมูกซิลิโคน',
      subtitle: 'Silicone Implant',
      price: '25,000',
      originalPrice: '35,000',
      features: [
        'ซิลิโคนแท้ Grade A',
        'ปรึกษาแพทย์ผู้เชี่ยวชาญ',
        'ยาหลังผ่าตัด',
        'นัดตรวจหลังผ่าตัด',
        'รับประกันผลงาน 1 ปี'
      ]
    },
    {
      title: 'เสริมจมูกกระดูกอ่อน',
      subtitle: 'Rib Cartilage',
      price: '89,000',
      originalPrice: '120,000',
      popular: true,
      features: [
        'ใช้กระดูกอ่อนซี่โครง',
        'เป็นธรรมชาติที่สุด',
        'ไม่มีการปฏิเสธจากร่างกาย',
        'ยาหลังผ่าตัด',
        'นัดตรวจหลังผ่าตัด',
        'รับประกันผลงาน 2 ปี'
      ]
    },
    {
      title: 'แก้จมูก',
      subtitle: 'Revision Rhinoplasty',
      price: '45,000',
      originalPrice: '60,000',
      features: [
        'แก้ไขงานเดิมที่ไม่พอใจ',
        'ประเมินโดยผู้เชี่ยวชาญ',
        'ยาหลังผ่าตัด',
        'นัดตรวจหลังผ่าตัด'
      ]
    }
  ];

  const additionalServices = [
    {
      title: 'ทำปลายจมูก',
      price: '15,000',
      description: 'ปรับปลายจมูกให้เรียวเล็ก'
    },
    {
      title: 'ตัดปีกจมูก',
      price: '15,000',
      description: 'ลดขนาดปีกจมูกให้เล็กลง'
    },
    {
      title: 'เสริมร่องจมูก',
      price: '10,000',
      description: 'เพิ่มความลึกให้ร่องจมูก'
    }
  ];

  return (
    <div className="rhinoplasty-page">
      {/* Hero Section */}
      <section className="service-hero rhinoplasty-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="hero-tag">Korean Aesthetic Surgery</span>
            <h1>Elegance Begins with Your Nose</h1>
            <p className="hero-subtitle">เสริมจมูกสไตล์เกาหลี</p>
            <p className="hero-description">
              เนรมิตจมูกสวยเป็นธรรมชาติ ดั่งดาราเกาหลี 
              ด้วยเทคนิคและทีมแพทย์ที่ผ่านการฝึกจากเกาหลีโดยตรง
            </p>
            <div className="hero-cta">
              <a href="tel:020954799" className="btn btn-primary">
                <Phone size={20} />
                โทรปรึกษาฟรี
              </a>
              <a href="https://lin.ee/D9KIJyb" className="btn btn-outline">
                Line: @bjhbangkok
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* USP Section */}
      <section className="usp-section">
        <div className="container">
          <div className="usp-grid">
            <div className="usp-item">
              <Star className="usp-icon" />
              <h3>เทคนิคเกาหลี</h3>
              <p>เทคนิคการเสริมจมูกแบบเกาหลีแท้ๆ</p>
            </div>
            <div className="usp-item">
              <Award className="usp-icon" />
              <h3>แพทย์ผู้เชี่ยวชาญ</h3>
              <p>ผ่านการฝึกจากเกาหลีโดยตรง</p>
            </div>
            <div className="usp-item">
              <Users className="usp-icon" />
              <h3>ผลงานกว่า 5,000+ เคส</h3>
              <p>ประสบการณ์ยาวนาน</p>
            </div>
            <div className="usp-item">
              <Clock className="usp-icon" />
              <h3>ฟื้นตัวเร็ว</h3>
              <p>เทคนิคทันสมัย บวมน้อย</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>แพ็กเกจเสริมจมูก</h2>
            <p>เลือกแพ็กเกจที่เหมาะกับความต้องการของคุณ</p>
          </motion.div>

          <div className="pricing-grid">
            {packages.map((pkg, index) => (
              <motion.div 
                key={index}
                className={`pricing-card ${pkg.popular ? 'popular' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {pkg.popular && <span className="popular-badge">ยอดนิยม</span>}
                <div className="pricing-header">
                  <h3>{pkg.title}</h3>
                  <p className="subtitle">{pkg.subtitle}</p>
                </div>
                <div className="pricing-price">
                  <span className="original-price">{pkg.originalPrice} บาท</span>
                  <span className="current-price">{pkg.price}</span>
                  <span className="currency">บาท</span>
                </div>
                <ul className="pricing-features">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx}>
                      <Check size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a href="tel:020954799" className="btn btn-primary">
                  นัดปรึกษาแพทย์
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="bonus-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>บริการเสริม</h2>
            <p>เพิ่มความสมบูรณ์แบบให้จมูกของคุณ</p>
          </motion.div>

          <div className="bonus-grid">
            {additionalServices.map((service, index) => (
              <motion.div 
                key={index}
                className="bonus-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3>{service.title}</h3>
                <p className="description">{service.description}</p>
                <div className="bonus-price">
                  <span className="price">{service.price}</span>
                  <span className="currency">บาท</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Before After Gallery */}
      <section className="gallery-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>ผลงานของเรา</h2>
            <p>Before & After</p>
          </motion.div>

          <div className="gallery-grid">
            {[1, 2, 3, 4].map((item, index) => (
              <motion.div 
                key={index}
                className="gallery-item"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="placeholder-gallery">
                  <span>Before / After</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>พร้อมเปลี่ยนจมูกของคุณแล้วหรือยัง?</h2>
            <p>ปรึกษาแพทย์ฟรี ไม่มีค่าใช้จ่าย</p>
            <div className="cta-buttons">
              <a href="tel:020954799" className="btn btn-white">
                <Phone size={20} />
                โทร 02-095-4799
              </a>
              <a href="https://lin.ee/D9KIJyb" className="btn btn-outline-white">
                แชทผ่าน Line
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Rhinoplasty;
