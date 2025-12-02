import React from 'react';
import { motion } from 'framer-motion';
import { Check, Phone, Clock, Award, Users, Sparkles } from 'lucide-react';
import './Facelift.css';

const Facelift: React.FC = () => {
  const packages = [
    {
      title: 'Mini Facelift',
      subtitle: 'ดึงหน้าแบบมินิ',
      price: '89,000',
      originalPrice: '120,000',
      features: [
        'เหมาะสำหรับผู้ที่มีปัญหาเล็กน้อย',
        'แผลเล็ก ฟื้นตัวเร็ว',
        'ผลลัพธ์เป็นธรรมชาติ',
        'ยาหลังผ่าตัด',
        'นัดตรวจหลังผ่าตัด'
      ]
    },
    {
      title: 'Full Facelift',
      subtitle: 'ดึงหน้าทั้งหมด',
      price: '180,000',
      originalPrice: '250,000',
      popular: true,
      features: [
        'ดึงหน้าทั้งบนและล่าง',
        'แก้ปัญหาหย่อนคล้อยทั้งใบหน้า',
        'ผลลัพธ์อยู่ได้นาน 5-10 ปี',
        'ยาหลังผ่าตัด',
        'นัดตรวจหลังผ่าตัด',
        'รับประกันผลงาน 1 ปี'
      ]
    },
    {
      title: 'Neck Lift',
      subtitle: 'ดึงคอ',
      price: '79,000',
      originalPrice: '100,000',
      features: [
        'แก้ปัญหาคอหย่อน เหนียงคาง',
        'ทำควบคู่กับ Facelift ได้',
        'ยาหลังผ่าตัด',
        'นัดตรวจหลังผ่าตัด'
      ]
    }
  ];

  const usps = [
    {
      icon: Sparkles,
      title: 'One-Stop Destination',
      description: 'ศูนย์ศัลยกรรมความงามครบวงจร'
    },
    {
      icon: Award,
      title: 'แพทย์ผู้เชี่ยวชาญ',
      description: 'ทีมแพทย์ที่มีประสบการณ์มากกว่า 15 ปี'
    },
    {
      icon: Users,
      title: 'ผลงานกว่า 3,000+ เคส',
      description: 'การันตีความพึงพอใจ'
    },
    {
      icon: Clock,
      title: 'ฟื้นตัวเร็ว',
      description: 'เทคนิคทันสมัยจากเกาหลี'
    }
  ];

  const additionalServices = [
    {
      title: 'ร้อยไหม',
      price: '25,000',
      description: 'ยกกระชับโดยไม่ต้องผ่าตัด'
    },
    {
      title: 'ฉีดฟิลเลอร์',
      price: '15,000',
      description: 'เติมเต็มร่องลึก'
    },
    {
      title: 'โบท็อกซ์',
      price: '2,500',
      description: 'ลดริ้วรอย ยกคิ้ว'
    }
  ];

  return (
    <div className="facelift-page">
      {/* Hero Section */}
      <section className="service-hero facelift-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="hero-tag">Anti-Aging Surgery</span>
            <h1>One-Stop Destination</h1>
            <p className="hero-subtitle">ศัลยกรรมดึงหน้า ย้อนวัย</p>
            <p className="hero-description">
              เทคนิคการดึงหน้าที่ทันสมัย ให้ผลลัพธ์เป็นธรรมชาติ
              อ่อนเยาว์ลงกว่า 10 ปี ด้วยแพทย์ผู้เชี่ยวชาญ
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
            {usps.map((usp, index) => (
              <div key={index} className="usp-item">
                <usp.icon className="usp-icon" />
                <h3>{usp.title}</h3>
                <p>{usp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="why-choose-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>ทำไมต้องเลือก BJH?</h2>
            <p>ศูนย์ศัลยกรรมความงามมาตรฐานสากล</p>
          </motion.div>

          <div className="why-grid">
            <motion.div 
              className="why-content"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <ul className="why-list">
                <li>
                  <Check size={20} />
                  <span>ทีมแพทย์ผู้เชี่ยวชาญที่ได้รับการรับรองจากแพทยสภา</span>
                </li>
                <li>
                  <Check size={20} />
                  <span>เทคนิคการผ่าตัดที่ทันสมัยจากเกาหลี</span>
                </li>
                <li>
                  <Check size={20} />
                  <span>ห้องผ่าตัดปลอดเชื้อมาตรฐานสากล</span>
                </li>
                <li>
                  <Check size={20} />
                  <span>การดูแลก่อนและหลังผ่าตัดอย่างใกล้ชิด</span>
                </li>
                <li>
                  <Check size={20} />
                  <span>รับประกันผลงาน ติดตามผลระยะยาว</span>
                </li>
              </ul>
            </motion.div>
            <motion.div 
              className="why-image"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="placeholder-image-large">
                <Award size={80} />
                <span>มาตรฐานสากล</span>
              </div>
            </motion.div>
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
            <h2>แพ็กเกจดึงหน้า</h2>
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

      {/* Additional Services */}
      <section className="bonus-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>บริการเสริมอื่นๆ</h2>
            <p>ไม่อยากผ่าตัด? ลองดูทางเลือกอื่น</p>
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

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>พร้อมย้อนวัยแล้วหรือยัง?</h2>
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

export default Facelift;
