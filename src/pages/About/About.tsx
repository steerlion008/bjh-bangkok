import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, Heart, Star } from 'lucide-react';
import './About.css';

const About: React.FC = () => {
  const values = [
    {
      icon: <Shield size={40} />,
      title: 'ความปลอดภัย',
      description: 'ได้รับการรับรองมาตรฐานจาก สบส. ฆสพ.สบส : ๔๖๒๗ / ๒๕๖๘'
    },
    {
      icon: <Award size={40} />,
      title: 'แพทย์ผู้เชี่ยวชาญ',
      description: 'ทีมแพทย์เฉพาะทางที่ผ่านการฝึกอบรมระดับสากล มีความชำนาญสูง'
    },
    {
      icon: <Heart size={40} />,
      title: 'ใส่ใจทุกรายละเอียด',
      description: 'ดูแลเอาใจใส่ตั้งแต่ขั้นตอนปรึกษาจนถึงการติดตามผลหลังการรักษา'
    },
    {
      icon: <Star size={40} />,
      title: 'มาตรฐานระดับโลก',
      description: 'เครื่องมือและอุปกรณ์ทันสมัย ได้มาตรฐานระดับสากล'
    }
  ];

  const services = [
    'Valet Service ให้บริการรับ-ส่งรถ',
    'ห้องรอพักผ่อนกว้างขวาง ออกแบบอย่างหรูหรา',
    'บริการเครื่องดื่มและอาหารว่าง',
    'ระบบติดตามผลหลังการรักษา',
    'บริการ B2B สำหรับองค์กร'
  ];

  const facilities = [
    'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600',
    'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600',
    'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600',
    'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=600',
    'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=600',
    'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600',
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="hero-badge">About Us</span>
            <h1>BJH Bangkok</h1>
            <p>Specialist in Aesthetic Medicine</p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-grid">
            <motion.div
              className="mission-content"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2>เกี่ยวกับเรา</h2>
              <p>
                At BJH Bangkok, we do more than deliver exceptional results in health and beauty—we create 
                a warm, attentive experience where every detail matters. Because we believe that true beauty 
                begins with happiness, supported by holistic and comprehensive care.
              </p>
              <p>
                From the very moment you arrive, our journey together begins. A seamless valet service welcomes you, 
                followed by a reception team that greets you with warmth and smiles. Our attentive staff are ready 
                to answer every question, while our team of specialized physicians provides precise consultations 
                tailored to your needs. Beyond treatment, our dedicated follow-up system ensures that your care 
                continues seamlessly, long after your procedure.
              </p>
              <p>
                At BJH, we are not solely focused on surgery or aesthetics. We embrace wellness as an essential 
                pillar of life—offering programs in health enhancement, detoxification, body rejuvenation, and 
                immune system strengthening. Every service is thoughtfully designed for those who value health 
                and aspire to build lasting vitality.
              </p>
            </motion.div>

            <motion.div
              className="mission-image"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img src="https://images.unsplash.com/photo-1629909615184-74f495363b67?w=800" alt="BJH Bangkok" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Our Values</h2>
            <p className="section-subtitle">
              คุณค่าที่เรายึดมั่นในการให้บริการทุกครั้ง
            </p>
          </motion.div>

          <div className="values-grid">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="value-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="about-services">
        <div className="container">
          <div className="services-grid">
            <motion.div
              className="services-image"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800" alt="Our Services" />
            </motion.div>

            <motion.div
              className="services-content"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2>บริการของเรา</h2>
              <p>
                Our expansive, elegantly designed waiting lounge offers both comfort and sophistication, 
                allowing you to relax body and mind before your service. Complementary refreshments, 
                including fresh salad rolls, cold-pressed juices, artisanal coffee, tea, and light pastries, 
                are served to ensure that your well-being begins with simple moments of joy.
              </p>
              <ul className="services-list">
                {services.map((service, index) => (
                  <li key={index}>
                    <div className="check-icon">✓</div>
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="facilities-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">State of the Art Facilities</h2>
            <p className="section-subtitle">
              สถานที่และอุปกรณ์ทันสมัย ได้มาตรฐานระดับสากล
            </p>
          </motion.div>

          <div className="facilities-grid">
            {facilities.map((img, index) => (
              <motion.div
                key={index}
                className="facility-item"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <img src={img} alt={`Facility ${index + 1}`} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* B2B Section */}
      <section className="b2b-section">
        <div className="container">
          <motion.div
            className="b2b-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>B2B Corporate Services</h2>
            <p>
              We also extend our expertise to the B2B sector, providing personalized health programs for 
              corporate employees across private enterprises, government agencies, and state enterprises. 
              Our specialists assess employee health comprehensively, curating tailored programs that 
              uplift wellness at both individual and organizational levels.
            </p>
            <p className="cta-text">
              Choose BJH Bangkok as your premier destination for beauty and health. With us, every step 
              is designed to inspire confidence and make you feel truly special—each and every time you 
              walk through our doors.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
