import React from 'react';
import { motion } from 'framer-motion';
import { Check, Phone, Clock, Award, Users } from 'lucide-react';
import './EyeSurgery.css';

const EyeSurgery: React.FC = () => {
  const packages = [
    {
      title: 'ทำตา 2 ชั้น',
      subtitle: 'แบบกรีด',
      price: '25,000',
      originalPrice: '35,000',
      features: [
        'ปรึกษาแพทย์ผู้เชี่ยวชาญ',
        'ยาหลังผ่าตัด',
        'นัดตรวจหลังผ่าตัด',
        'รับประกันผลงาน 1 ปี'
      ]
    },
    {
      title: 'ทำตา 2 ชั้น',
      subtitle: 'แบบจุด (DST)',
      price: '19,900',
      originalPrice: '25,000',
      popular: true,
      features: [
        'ไม่ต้องกรีด',
        'ฟื้นตัวเร็ว 3-7 วัน',
        'ยาหลังผ่าตัด',
        'นัดตรวจหลังผ่าตัด',
        'รับประกันผลงาน 1 ปี'
      ]
    },
    {
      title: 'แก้ตาแบบกรีด',
      subtitle: 'Revision',
      price: '35,000',
      originalPrice: '45,000',
      features: [
        'แก้ไขงานเดิมที่ไม่พอใจ',
        'ปรึกษาแพทย์ผู้เชี่ยวชาญ',
        'ยาหลังผ่าตัด',
        'นัดตรวจหลังผ่าตัด'
      ]
    }
  ];

  const bonusPackages = [
    {
      title: 'ตัดหนังตาบน',
      price: '15,000',
      description: 'สำหรับคนหนังตาตก'
    },
    {
      title: 'ตัดถุงไขมันใต้ตา',
      price: '25,000',
      description: 'ลดถุงใต้ตา ลดเงาดำ'
    },
    {
      title: 'ทำหัวตา / หางตา',
      price: '15,000',
      description: 'เปิดหัวตา-หางตาให้กว้างขึ้น'
    }
  ];

  const doctors = [
    {
      name: 'นพ. สุรศักดิ์ สุนทรธรรม',
      specialty: 'ศัลยแพทย์ตกแต่ง',
      experience: '15 ปี',
      image: '/images/doctor1.jpg'
    },
    {
      name: 'นพ. อนันต์ วิริยะพานิช',
      specialty: 'จักษุแพทย์',
      experience: '12 ปี',
      image: '/images/doctor2.jpg'
    }
  ];

  return (
    <div className="eye-surgery-page">
      {/* Hero Section */}
      <section className="service-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>ทำตา 2 ชั้น</h1>
            <p className="hero-subtitle">ศัลยกรรมตาสวย โดยแพทย์ผู้เชี่ยวชาญ</p>
            <p className="hero-description">
              เนรมิตดวงตาคู่สวย เปล่งประกาย ด้วยเทคนิคการทำตา 2 ชั้น 
              ที่ได้รับความนิยมสูงสุดในเกาหลี
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
              <Award className="usp-icon" />
              <h3>แพทย์ผู้เชี่ยวชาญ</h3>
              <p>ทีมแพทย์ที่ได้รับการรับรองจากแพทยสภา</p>
            </div>
            <div className="usp-item">
              <Users className="usp-icon" />
              <h3>ผลงานกว่า 10,000+ เคส</h3>
              <p>ประสบการณ์มากกว่า 15 ปี</p>
            </div>
            <div className="usp-item">
              <Clock className="usp-icon" />
              <h3>ฟื้นตัวเร็ว</h3>
              <p>เทคนิคทันสมัย บวมน้อย หายเร็ว</p>
            </div>
            <div className="usp-item">
              <Check className="usp-icon" />
              <h3>รับประกันผลงาน</h3>
              <p>การันตีความพึงพอใจ</p>
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
            <h2>แพ็กเกจทำตา 2 ชั้น</h2>
            <p>เลือกแพ็กเกจที่เหมาะกับคุณ</p>
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

      {/* Bonus Packages */}
      <section className="bonus-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>บริการเสริม</h2>
            <p>เพิ่มความสมบูรณ์แบบให้ดวงตาของคุณ</p>
          </motion.div>

          <div className="bonus-grid">
            {bonusPackages.map((bonus, index) => (
              <motion.div 
                key={index}
                className="bonus-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3>{bonus.title}</h3>
                <p className="description">{bonus.description}</p>
                <div className="bonus-price">
                  <span className="price">{bonus.price}</span>
                  <span className="currency">บาท</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="doctors-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>ทีมแพทย์ผู้เชี่ยวชาญ</h2>
            <p>ไว้วางใจได้กับทีมแพทย์มืออาชีพ</p>
          </motion.div>

          <div className="doctors-grid">
            {doctors.map((doctor, index) => (
              <motion.div 
                key={index}
                className="doctor-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="doctor-image">
                  <div className="placeholder-image">
                    <Users size={60} />
                  </div>
                </div>
                <div className="doctor-info">
                  <h3>{doctor.name}</h3>
                  <p className="specialty">{doctor.specialty}</p>
                  <p className="experience">ประสบการณ์ {doctor.experience}</p>
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
            <h2>พร้อมเปลี่ยนดวงตาของคุณแล้วหรือยัง?</h2>
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

export default EyeSurgery;
