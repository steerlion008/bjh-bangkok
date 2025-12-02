import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Check } from 'lucide-react';
import './Services.css';

interface ServicePageProps {
  type: 'eye' | 'rhinoplasty' | 'facelift' | 'pterygium';
}

const serviceData = {
  eye: {
    title: 'Eye Surgery',
    titleTh: 'ศัลยกรรมตา',
    subtitle: 'Eyelid surgery performed by board-certified oculoplastic surgeons',
    subtitleTh: 'ศัลยกรรมตา โดยจักษุแพทย์เฉพาะทาง ปลอดภัย มาตรฐานระดับสากล',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1920',
    procedures: [
      { name: 'Under-eye fat removal', nameTh: 'ดึงถุงใต้ตา', price: 'เริ่มต้น ฿25,900' },
      { name: 'Lower blepharoplasty', nameTh: 'ตัดถุงใต้ตา', price: 'เริ่มต้น ฿15,900' },
      { name: 'Sub-brow lift', nameTh: 'ยกคิ้ว', price: 'เริ่มต้น ฿19,900' },
      { name: 'Double eyelid surgery', nameTh: 'ทำตาสองชั้น', price: 'เริ่มต้น ฿15,900' },
    ],
    benefits: [
      'ดวงตาดูสดใส อ่อนกว่าวัย',
      'ลดรอยตีนกา และริ้วรอยรอบดวงตา',
      'หนังตาไม่ตกหย่อน',
      'ดวงตาดูกลมโตขึ้น',
      'ฟื้นตัวเร็ว ปลอดภัย',
    ],
    addons: ['Fat repositioning', 'Tightening sutures', 'Skin excision', 'Fat graft to tear trough'],
  },
  rhinoplasty: {
    title: 'Rhinoplasty',
    titleTh: 'ศัลยกรรมจมูก',
    subtitle: 'Rhinoplasty performed by board-certified plastic surgeons',
    subtitleTh: 'ศัลยกรรมจมูก โดยแพทย์ศัลยกรรมตกแต่งเฉพาะทาง',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=1920',
    procedures: [
      { name: 'Open rhinoplasty (lite)', nameTh: 'เสริมจมูก (ไลท์)', price: 'เริ่มต้น ฿15,900' },
      { name: 'Open rhinoplasty (full refinement)', nameTh: 'เสริมจมูก (ฟูล)', price: 'เริ่มต้น ฿39,900' },
      { name: 'Open rhinoplasty (standard)', nameTh: 'เสริมจมูก (มาตรฐาน)', price: 'เริ่มต้น ฿99,000' },
    ],
    benefits: [
      'ดั้งจมูกโด่งได้รูป',
      'ปลายจมูกเรียวสวย',
      'จมูกได้สัดส่วนกับใบหน้า',
      'ใช้วัสดุคุณภาพสูง',
      'เทคนิคทันสมัย ฟื้นตัวเร็ว',
    ],
    addons: ['Custom-carved silicone implant', 'Hump rasping & osteotomy', 'Interdomal sutures', 'Ear cartilage tip support', 'Nasal tip defatting', 'Alar base reduction'],
  },
  facelift: {
    title: 'Facelift Surgery',
    titleTh: 'ศัลยกรรมดึงหน้า',
    subtitle: 'Facelift Surgery — Safety assured with world-class standards',
    subtitleTh: 'ศัลยกรรมดึงหน้า ปลอดภัย มั่นใจ ด้วยมาตรฐานระดับโลก',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1920',
    procedures: [
      { name: 'Endoscopic upper facelift', nameTh: 'ดึงหน้าส่วนบน', price: 'เริ่มต้น ฿149,000' },
      { name: 'Midface facelift', nameTh: 'ดึงหน้าส่วนกลาง', price: 'เริ่มต้น ฿59,000' },
      { name: 'Lower facelift', nameTh: 'ดึงหน้าส่วนล่าง', price: 'เริ่มต้น ฿79,000' },
      { name: 'Neck facelift', nameTh: 'ดึงคอ', price: 'เริ่มต้น ฿79,000' },
    ],
    benefits: [
      'ใบหน้ากระชับ เรียบเนียน',
      'ลดริ้วรอย ร่องลึก',
      'ผิวหน้าตึงกระชับ',
      'ดูอ่อนกว่าวัย 10-15 ปี',
      'ผลลัพธ์เป็นธรรมชาติ',
    ],
    addons: ['Targeted fat grafting', 'Lateral canthopexy / canthoplasty', 'Temporal lift'],
  },
  pterygium: {
    title: 'Pterygium Surgery',
    titleTh: 'ศัลยกรรมต้อเนื้อ',
    subtitle: 'Opening the door to a new era of eye care – Safety and world-class standards guaranteed',
    subtitleTh: 'ก้าวเข้าสู่ยุคใหม่แห่งการดูแลดวงตา รับประกันความปลอดภัย มาตรฐานระดับสากล',
    image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=1920',
    procedures: [
      { name: 'Pterygium excision with sutures', nameTh: 'ผ่าตัดต้อเนื้อแบบเย็บ', price: 'เริ่มต้น ฿9,900' },
      { name: 'Pterygium excision with fibrin glue', nameTh: 'ผ่าตัดต้อเนื้อแบบกาว', price: 'เริ่มต้น ฿25,900' },
    ],
    benefits: [
      'การมองเห็นชัดเจนขึ้น',
      'ลดอาการระคายเคืองตา',
      'ตาขาวใสสะอาด',
      'ป้องกันต้อเนื้อลุกลาม',
      'ฟื้นตัวเร็ว',
    ],
    addons: ['Conjunctival autograft', 'Amniotic membrane transplantation'],
  },
};

const ServicePage: React.FC<ServicePageProps> = ({ type }) => {
  const service = serviceData[type];

  return (
    <div className="service-page">
      {/* Hero Section */}
      <section className="service-hero" style={{ backgroundImage: `url(${service.image})` }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="hero-badge">{service.title}</span>
            <h1>{service.titleTh}</h1>
            <p>{service.subtitleTh}</p>
          </motion.div>
        </div>
      </section>

      {/* Procedures Section */}
      <section className="procedures-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Procedures</h2>
            <p className="section-subtitle">{service.subtitle}</p>
          </motion.div>

          <div className="procedures-grid">
            {service.procedures.map((procedure, index) => (
              <motion.div
                key={index}
                className="procedure-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="procedure-number">{String(index + 1).padStart(2, '0')}</div>
                <h3>{procedure.nameTh}</h3>
                <p className="procedure-name-en">{procedure.name}</p>
                <p className="procedure-price">{procedure.price}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="container">
          <div className="benefits-grid">
            <motion.div
              className="benefits-content"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2>ข้อดีของการทำ{service.titleTh}</h2>
              <ul className="benefits-list">
                {service.benefits.map((benefit, index) => (
                  <li key={index}>
                    <Check size={20} />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <Link to="/pricing" className="btn-primary">
                ดูราคาทั้งหมด <ChevronRight size={20} />
              </Link>
            </motion.div>

            <motion.div
              className="benefits-image"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img src={service.image} alt={service.titleTh} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="addons-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Options / Add-ons</h2>
            <p className="section-subtitle">ตัวเลือกเสริมเพื่อผลลัพธ์ที่ดียิ่งขึ้น</p>
          </motion.div>

          <div className="addons-grid">
            {service.addons.map((addon, index) => (
              <motion.div
                key={index}
                className="addon-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <span>{addon}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="service-cta">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>พร้อมให้คำปรึกษา</h2>
            <p>นัดหมายปรึกษาแพทย์ผู้เชี่ยวชาญได้ทุกวัน</p>
            <div className="cta-buttons">
              <a href="tel:020954799" className="btn-primary">
                โทร 02-095-4799
              </a>
              <a href="https://lin.ee/D9KIJyb" target="_blank" rel="noopener noreferrer" className="btn-outline">
                แอดไลน์
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicePage;
