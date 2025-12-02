import React from 'react';
import { motion } from 'framer-motion';
import { Check, Phone, Eye, Shield, Award, Clock } from 'lucide-react';
import './Pterygium.css';

const Pterygium: React.FC = () => {
  const packages = [
    {
      title: 'ผ่าต้อเนื้อ',
      subtitle: 'แบบเย็บ (Suture)',
      price: '15,000',
      originalPrice: '20,000',
      features: [
        'เทคนิคมาตรฐาน',
        'ตรวจก่อนผ่าตัด',
        'ยาหลังผ่าตัด',
        'นัดตรวจหลังผ่าตัด'
      ]
    },
    {
      title: 'ผ่าต้อเนื้อ',
      subtitle: 'แบบกาว (Fibrin Glue)',
      price: '25,000',
      originalPrice: '30,000',
      popular: true,
      features: [
        'เทคนิคใหม่ล่าสุด',
        'ไม่ต้องเย็บ ฟื้นตัวเร็ว',
        'ลดอาการระคายเคือง',
        'ตรวจก่อนผ่าตัด',
        'ยาหลังผ่าตัด',
        'นัดตรวจหลังผ่าตัด'
      ]
    },
    {
      title: 'ผ่าต้อกระจก',
      subtitle: 'Cataract Surgery',
      price: '45,000',
      originalPrice: '60,000',
      features: [
        'เลนส์แก้วตาเทียมคุณภาพสูง',
        'เทคนิค Phaco',
        'ตรวจก่อนผ่าตัด',
        'ยาหลังผ่าตัด',
        'นัดตรวจหลังผ่าตัด'
      ]
    }
  ];

  const symptoms = [
    'มีเนื้อเยื่อสีขาว/เหลืองขึ้นที่ตาขาว',
    'ตาแดง ระคายเคือง',
    'รู้สึกเหมือนมีฝุ่นในตา',
    'มองเห็นไม่ชัด',
    'ตาแห้ง น้ำตาไหล'
  ];

  return (
    <div className="pterygium-page">
      {/* Hero Section */}
      <section className="service-hero pterygium-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="hero-tag">Eye Care</span>
            <h1>ผ่าต้อเนื้อ & ต้อกระจก</h1>
            <p className="hero-subtitle">ดูแลดวงตาด้วยจักษุแพทย์ผู้เชี่ยวชาญ</p>
            <p className="hero-description">
              รักษาต้อเนื้อและต้อกระจกด้วยเทคนิคทันสมัย
              ฟื้นตัวเร็ว กลับไปใช้ชีวิตปกติได้ในเวลาอันรวดเร็ว
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
              <Eye className="usp-icon" />
              <h3>จักษุแพทย์ผู้เชี่ยวชาญ</h3>
              <p>ทีมจักษุแพทย์ที่มีความชำนาญ</p>
            </div>
            <div className="usp-item">
              <Shield className="usp-icon" />
              <h3>เครื่องมือทันสมัย</h3>
              <p>อุปกรณ์การแพทย์มาตรฐานสากล</p>
            </div>
            <div className="usp-item">
              <Award className="usp-icon" />
              <h3>ผลลัพธ์ที่ดี</h3>
              <p>การันตีความพึงพอใจ</p>
            </div>
            <div className="usp-item">
              <Clock className="usp-icon" />
              <h3>ฟื้นตัวเร็ว</h3>
              <p>กลับไปใช้ชีวิตปกติได้เร็ว</p>
            </div>
          </div>
        </div>
      </section>

      {/* What is Pterygium */}
      <section className="info-section">
        <div className="container">
          <div className="info-grid">
            <motion.div 
              className="info-content"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2>ต้อเนื้อคืออะไร?</h2>
              <p>
                ต้อเนื้อ (Pterygium) เป็นภาวะที่เนื้อเยื่อเจริญผิดปกติบริเวณเยื่อบุตา
                มักเกิดจากการสัมผัสแสงแดด UV เป็นเวลานาน หากปล่อยไว้อาจลุกลาม
                เข้าไปบังกระจกตา ทำให้มองเห็นไม่ชัด
              </p>
              <h3>อาการของต้อเนื้อ</h3>
              <ul className="symptom-list">
                {symptoms.map((symptom, index) => (
                  <li key={index}>
                    <Check size={16} />
                    {symptom}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div 
              className="info-image"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="placeholder-image-large">
                <Eye size={80} />
                <span>ดูแลดวงตาของคุณ</span>
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
            <h2>แพ็กเกจรักษาต้อ</h2>
            <p>เลือกการรักษาที่เหมาะกับคุณ</p>
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
                {pkg.popular && <span className="popular-badge">แนะนำ</span>}
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

      {/* Comparison Section */}
      <section className="comparison-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>เปรียบเทียบเทคนิคผ่าต้อเนื้อ</h2>
            <p>Suture vs Fibrin Glue</p>
          </motion.div>

          <motion.div 
            className="comparison-table"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <table>
              <thead>
                <tr>
                  <th>รายละเอียด</th>
                  <th>แบบเย็บ (Suture)</th>
                  <th>แบบกาว (Fibrin Glue)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>ระยะเวลาผ่าตัด</td>
                  <td>30-45 นาที</td>
                  <td>20-30 นาที</td>
                </tr>
                <tr>
                  <td>ระยะเวลาฟื้นตัว</td>
                  <td>2-3 สัปดาห์</td>
                  <td>1-2 สัปดาห์</td>
                </tr>
                <tr>
                  <td>อาการระคายเคือง</td>
                  <td>ปานกลาง</td>
                  <td>น้อย</td>
                </tr>
                <tr>
                  <td>โอกาสกลับมาเป็นซ้ำ</td>
                  <td>5-10%</td>
                  <td>3-5%</td>
                </tr>
                <tr>
                  <td>ราคา</td>
                  <td>15,000 บาท</td>
                  <td>25,000 บาท</td>
                </tr>
              </tbody>
            </table>
          </motion.div>
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
            <h2>ดวงตาคือหน้าต่างของหัวใจ</h2>
            <p>ปรึกษาจักษุแพทย์ฟรี ไม่มีค่าใช้จ่าย</p>
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

export default Pterygium;
