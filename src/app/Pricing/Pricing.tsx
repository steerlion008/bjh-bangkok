import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Pricing.css';

interface PriceItem {
  procedure: string;
  promo: string | number;
  specialist: string | number;
  senior: string | number;
}

interface PricingCategory {
  id: string;
  title: string;
  titleTh: string;
  description: string;
  thbPrices: PriceItem[];
  usdPrices: PriceItem[];
  addons?: { option: string; thb: number; usd: number }[];
}

const Pricing: React.FC = () => {
  const [currency, setCurrency] = useState<'thb' | 'usd'>('thb');

  const pricingData: PricingCategory[] = [
    {
      id: 'eye',
      title: 'Eye Surgery',
      titleTh: 'ศัลยกรรมตา',
      description: 'ศัลยกรรมตา โดยจักษุแพทย์เฉพาะทาง ปลอดภัย มาตรฐานระดับสากล',
      thbPrices: [
        { procedure: 'Under-eye fat removal', promo: 25900, specialist: 29900, senior: 45900 },
        { procedure: 'Lower blepharoplasty', promo: 15900, specialist: 23900, senior: 35900 },
        { procedure: 'Sub-brow lift', promo: 19900, specialist: 29900, senior: 39900 },
        { procedure: 'Double eyelid surgery', promo: 15900, specialist: 23900, senior: 35900 },
      ],
      usdPrices: [
        { procedure: 'Under-eye fat removal', promo: 699, specialist: 809, senior: 1239 },
        { procedure: 'Lower blepharoplasty', promo: 429, specialist: 649, senior: 969 },
        { procedure: 'Sub-brow lift', promo: 539, specialist: 809, senior: 1080 },
        { procedure: 'Double eyelid surgery', promo: 429, specialist: 649, senior: 969 },
      ],
      addons: [
        { option: 'Fat repositioning', thb: 10000, usd: 269 },
        { option: 'Tightening sutures', thb: 10000, usd: 269 },
        { option: 'Skin excision', thb: 10000, usd: 269 },
        { option: 'Fat graft to tear trough', thb: 10000, usd: 269 },
      ]
    },
    {
      id: 'nose',
      title: 'Rhinoplasty',
      titleTh: 'ศัลยกรรมจมูก',
      description: 'ศัลยกรรมจมูก โดยแพทย์ศัลยกรรมตกแต่งเฉพาะทาง',
      thbPrices: [
        { procedure: 'Open rhinoplasty (lite)', promo: 15900, specialist: 23900, senior: '–' },
        { procedure: 'Open rhinoplasty (full refinement)', promo: '–', specialist: 39900, senior: 59900 },
        { procedure: 'Open rhinoplasty (standard)', promo: 99000, specialist: 129000, senior: 199000 },
      ],
      usdPrices: [
        { procedure: 'Open rhinoplasty (lite)', promo: 429, specialist: 649, senior: '–' },
        { procedure: 'Open rhinoplasty (full refinement)', promo: '–', specialist: 1080, senior: 1619 },
        { procedure: 'Open rhinoplasty (standard)', promo: 2699, specialist: 3490, senior: 5379 },
      ],
      addons: [
        { option: 'Custom-carved silicone implant', thb: 10000, usd: 270 },
        { option: 'Hump rasping & osteotomy', thb: 10000, usd: 270 },
        { option: 'Interdomal sutures', thb: 10000, usd: 270 },
        { option: 'Ear cartilage tip support', thb: 10000, usd: 270 },
        { option: 'Nasal tip defatting', thb: 10000, usd: 270 },
        { option: 'Alar base reduction', thb: 20000, usd: 549 },
      ]
    },
    {
      id: 'facelift',
      title: 'Facelift Surgery',
      titleTh: 'ศัลยกรรมดึงหน้า',
      description: 'ศัลยกรรมดึงหน้า ปลอดภัย มั่นใจ ด้วยมาตรฐานระดับโลก',
      thbPrices: [
        { procedure: 'Endoscopic upper facelift', promo: '–', specialist: '–', senior: 149000 },
        { procedure: 'Midface facelift', promo: 59000, specialist: 79000, senior: 99000 },
        { procedure: 'Lower facelift', promo: 79000, specialist: 99000, senior: 129000 },
        { procedure: 'Neck facelift', promo: 79000, specialist: 99000, senior: 129000 },
      ],
      usdPrices: [
        { procedure: 'Endoscopic upper facelift', promo: '–', specialist: '–', senior: 4050 },
        { procedure: 'Midface facelift', promo: 1600, specialist: 2150, senior: 2699 },
        { procedure: 'Lower facelift', promo: 2150, specialist: 2699, senior: 3499 },
        { procedure: 'Neck facelift', promo: 2150, specialist: 2699, senior: 3499 },
      ],
      addons: [
        { option: 'Targeted fat grafting', thb: 20000, usd: 549 },
        { option: 'Lateral canthopexy / canthoplasty', thb: 20000, usd: 549 },
        { option: 'Temporal lift', thb: 20000, usd: 549 },
      ]
    },
    {
      id: 'pterygium',
      title: 'Pterygium Surgery',
      titleTh: 'ศัลยกรรมต้อเนื้อ',
      description: 'ก้าวเข้าสู่ยุคใหม่แห่งการดูแลดวงตา รับประกันความปลอดภัย มาตรฐานระดับสากล',
      thbPrices: [
        { procedure: 'Pterygium excision with sutures', promo: 9900, specialist: 15900, senior: '–' },
        { procedure: 'Pterygium excision with fibrin glue', promo: '–', specialist: 25900, senior: '–' },
      ],
      usdPrices: [
        { procedure: 'Pterygium excision with sutures', promo: 269, specialist: 429, senior: '–' },
        { procedure: 'Pterygium excision with fibrin glue', promo: '–', specialist: 699, senior: '–' },
      ],
      addons: [
        { option: 'Conjunctival autograft', thb: 10000, usd: 269 },
        { option: 'Amniotic membrane transplantation', thb: 15000, usd: 410 },
      ]
    }
  ];

  const formatPrice = (price: string | number): string => {
    if (price === '–' || price === '-') return '–';
    if (typeof price === 'number') {
      return currency === 'thb' 
        ? `฿${price.toLocaleString()}`
        : `$${price.toLocaleString()}`;
    }
    return price;
  };

  return (
    <div className="pricing-page">
      {/* Hero Section */}
      <section className="pricing-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="hero-badge">Pricing</span>
            <h1>ราคาบริการ</h1>
            <p>ราคาโปรโมชั่นพิเศษ สำหรับทุกบริการศัลยกรรม</p>
          </motion.div>
        </div>
      </section>

      {/* Currency Toggle */}
      <section className="currency-section">
        <div className="container">
          <div className="currency-toggle">
            <button
              className={`toggle-btn ${currency === 'thb' ? 'active' : ''}`}
              onClick={() => setCurrency('thb')}
            >
              THB (บาท)
            </button>
            <button
              className={`toggle-btn ${currency === 'usd' ? 'active' : ''}`}
              onClick={() => setCurrency('usd')}
            >
              USD (Dollar)
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Tables */}
      <section className="pricing-section">
        <div className="container">
          {pricingData.map((category, index) => (
            <motion.div
              key={category.id}
              className="pricing-category"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="category-header">
                <h2>{category.title}</h2>
                <h3>{category.titleTh}</h3>
                <p>{category.description}</p>
              </div>

              <div className="pricing-table">
                <table>
                  <thead>
                    <tr>
                      <th>Procedure</th>
                      <th>Promo</th>
                      <th>Specialist</th>
                      <th>Senior</th>
                    </tr>
                  </thead>
                  <tbody>
                    {(currency === 'thb' ? category.thbPrices : category.usdPrices).map((item, idx) => (
                      <tr key={idx}>
                        <td className="procedure-name">{item.procedure}</td>
                        <td className="price promo">{formatPrice(item.promo)}</td>
                        <td className="price">{formatPrice(item.specialist)}</td>
                        <td className="price senior">{formatPrice(item.senior)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {category.addons && (
                <div className="addons-section">
                  <h4>Options / Add-ons</h4>
                  <div className="addons-grid">
                    {category.addons.map((addon, idx) => (
                      <div key={idx} className="addon-item">
                        <span className="addon-name">{addon.option}</span>
                        <span className="addon-price">
                          {currency === 'thb' ? `฿${addon.thb.toLocaleString()}` : `$${addon.usd}`}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Note Section */}
      <section className="note-section">
        <div className="container">
          <div className="note-card">
            <h3>หมายเหตุ</h3>
            <ul>
              <li>ราคาข้างต้นเป็นราคาโดยประมาณ อาจมีการเปลี่ยนแปลงตามความเหมาะสม</li>
              <li>ราคารวมค่าแพทย์และค่าบริการแล้ว</li>
              <li>กรุณาติดต่อสอบถามเพิ่มเติมเพื่อรับราคาที่แน่นอน</li>
              <li>Promo = ราคาโปรโมชั่น | Specialist = แพทย์เฉพาะทาง | Senior = แพทย์อาวุโส</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
