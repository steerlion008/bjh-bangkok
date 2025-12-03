import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import HiddenPricing from '../../components/HiddenPricing/HiddenPricing';
import './HomeFinal.css';

// Hero Slider - 2 slides as shown
const heroSlides = [
  { 
    image: '/images/banners/hero-main.jpg',
    type: 'main' // BJH ศัลยกรรมตกแต่งและความงาม
  },
  { 
    image: '/images/banners/hero-asia.png',
    type: 'asia' // ASIA'S ONE-STOP Destination
  }
];

// Wellness/Second slider
const wellnessSlides = [
  { image: '/images/banners/wellness-slider.jpg', alt: 'Wellness Banner' },
  { image: '/images/banners/banner-home-1.png', alt: 'BJH Building' }
];

// Doctor Carousel - 4 slides with captions
const doctorCarousel = [
  {
    image: '/images/doctors/1.png',
    name: 'นพ.กฤษณ์ แสงสุริยา',
    role: 'ศัลยแพทย์ตกแต่งใบหน้า และจมูก'
  },
  {
    image: '/images/doctors/Artboard-2-2.jpg',
    name: 'นพ.วีระพงษ์ เตียวสมบูรณ์กิจ',
    role: 'ศัลยแพทย์ศัลยกรรมตกแต่ง'
  },
  {
    image: '/images/doctors/Artboard-3.jpg',
    name: 'พญ.พัชราพร ศรีทะวงษ์',
    role: 'จักษุแพทย์'
  },
  {
    image: '/images/doctors/Artboard-4.jpg',
    name: 'Specialist Oculoplastic M.D.',
    role: 'No Blind'
  }
];

// Services 3 boxes
const services = [
  {
    image: '/images/doctors/artboard-2.jpg'
    // title: 'EXCLUSIVE CONSULT',
    // desc: 'Personalized 1:1 beauty consultation with our specialists, providing accurate, clear, and straightforward guidance.'
  },
  {
    image: '/images/doctors/Artboard-4.jpg'
    // title: 'SPECIALTY SURGEON',
    // desc: 'Surgery performed by specialized surgeons with deep anatomical knowledge and extensive surgical experience.'
  },
  {
    image: '/images/doctors/Artboard-3.jpg'
    // title: 'QUALITY AND SAFETY',
    // desc: 'Our operating rooms and equipment follow strict sterilization standards to ensure safety.'
  },
  {
    image: '/images/doctors/1.png'
    // title: 'QUALITY AND SAFETY',
    // desc: 'Our operating rooms and equipment follow strict sterilization standards to ensure safety.'
  }
];

// Facilities Gallery - exact 18 images
const facilities = [
  { image: '/images/facilities/470435.jpg' },
  { image: '/images/facilities/LINE_ALBUM_53.jpg' },
  { image: '/images/facilities/LINE_ALBUM_36.jpg' },
  { image: '/images/facilities/LINE_ALBUM_20.jpg' },
  { image: '/images/facilities/LINE_ALBUM_48.jpg' },
  { image: '/images/facilities/LINE_ALBUM_25.jpg' },
  { image: '/images/facilities/LINE_ALBUM_14.jpg' },
  { image: '/images/facilities/LINE_ALBUM_33.jpg' },
  { image: '/images/facilities/LINE_ALBUM_41.jpg' },
  { image: '/images/facilities/470367.jpg' },
  { image: '/images/facilities/photo07.jpg' },
  { image: '/images/facilities/470362.jpg' },
  { image: '/images/facilities/470363.jpg' },
  { image: '/images/facilities/photo02.jpg' },
  { image: '/images/facilities/photo04.jpg' }
];

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [wellnessSlide, setWellnessSlide] = useState(0);
  const [doctorIndex, setDoctorIndex] = useState(0);
  const [serviceSlide, setServiceSlide] = useState(0);

  // Hero slider auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Wellness slider auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      setWellnessSlide((prev) => (prev + 1) % wellnessSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextDoctor = () => {
    setDoctorIndex((prev) => (prev + 1) % doctorCarousel.length);
  };

  const prevDoctor = () => {
    setDoctorIndex((prev) => (prev - 1 + doctorCarousel.length) % doctorCarousel.length);
  };

  return (
    <div className="home" style={{
      backgroundImage: `url(${process.env.PUBLIC_URL}/images/backgroud/bk1.png)`,
      backgroundSize: 'contain',
      backgroundPosition: 'top center',
      backgroundRepeat: 'repeat',
      backgroundAttachment: 'fixed',
      minHeight: '100vh',
      width: '100%',
      position: 'relative',
      zIndex: 0
    }}>
      {/* Hidden Pricing Data for AI Chatbot */}
      <HiddenPricing />

      {/* ========== SECTION 1: Hero Slider ========== */}
      <section className="hero-section">
        <div className="hero-slider">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              className="hero-slide"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src={process.env.PUBLIC_URL + heroSlides[currentSlide].image}
                alt="BJH Bangkok"
                className="hero-bg-image"
              />
              
              {/* Hero Content Overlay */}
              {heroSlides[currentSlide].type === 'main' && (
                <div className="hero-content-main">
                  <h1 className="hero-bjh">BJH</h1>
                  <p className="hero-subtitle-th">ศัลยกรรมตกแต่งและความงาม</p>
                  <p className="hero-subtitle-en">Korean Aesthetic and Plastic Surgery</p>
                  <p className="hero-subtitle-kr">성형수술 및 미용</p>
                </div>
              )}
              
              {heroSlides[currentSlide].type === 'asia' && (
                <div className="hero-content-asia">
                  <p className="asia-top">ASIA'S</p>
                  <h2 className="asia-onestop">ONE-STOP</h2>
                  <p className="asia-destination">Destination</p>
                  <p className="asia-subtitle">Facelift &amp; Anti-Aging Surgery</p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* CTA Buttons */}
          <div className="hero-cta-buttons">
            <a href="tel:0864114262" className="cta-btn teal">
              <Phone size={16} />
              <span>โทรเลย</span>
            </a>
            <a href="https://lin.ee/D9KIJyb" className="cta-btn green" target="_blank" rel="noopener noreferrer">
              <MessageCircle size={16} />
              <span>แชทเลย</span>
            </a>
          </div>

          {/* More Info Buttons */}
          <div className="hero-more-buttons">
            <button className="more-btn">Mid-Face Facelift</button>
            <button className="more-btn outline">MORE INFO</button>
            <button className="more-btn teal-solid">สอบถาม</button>
          </div>

          {/* Slider Dots */}
          <div className="slider-dots">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ========== SECTION 2: Video Section ========== */}
      <section className="wellness-section">
        <div className="wellness-slider">
          <div className="wellness-slide">
            <video 
              src={process.env.PUBLIC_URL + '/images/video/PR-Branding-BJH-Bangkok-1.mp4'}
              autoPlay
              loop
              muted
              playsInline
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          
          {/* <div className="wellness-overlay">
            <h2 className="wellness-title">Wellness</h2>
            <p className="wellness-subtitle">Services promoting health <span className="highlight">ศูนย์สุขภาพ</span></p>
          </div> */}
        </div>
      </section>

      {/* ========== SECTION 3: Specialist in Aesthetic Medicine ========== */}
      <section className="specialist-section">
        <div className="container">
          <h2 className="section-title-teal">Specialist in Aesthetic Medicine</h2>
          
          {/* Doctor Team Full Image */}
          <div className="doctor-team-full">
            <img 
              src={process.env.PUBLIC_URL + '/images/doctors/2.png'}
              alt="BJH Doctor Team"
            />
          </div>
        </div>
      </section>

      {/* ========== SECTION 4: Services Grid ========== */}
      <section className="services-slider-section">
        <div className="services-grid-container">
          {services.map((service, index) => (
            <div key={index} className="service-item">
              <img src={process.env.PUBLIC_URL + service.image} alt={`Service ${index + 1}`} />
            </div>
          ))}
        </div>
      </section>

      {/* ========== SECTION 5: State of the art Facilities ========== */}
      <section className="facilities-section">
        <div className="container">
          <h2 className="section-title-teal">State of the art Facilities</h2>
          
          <div className="facilities-grid">
            {facilities.map((facility, index) => (
              <motion.div
                key={index}
                className="facility-item"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                whileHover={{ scale: 1.05 }}
              >
                <img 
                  src={process.env.PUBLIC_URL + facility.image} 
                  alt={`Facility ${index + 1}`}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== Floating Contact Bar (Mobile) ========== */}
      <div className="floating-contact-bar">
        <a href="tel:020954799" className="floating-btn call">
          <Phone size={18} />
          <span>โทรเลย</span>
        </a>
        <a href="https://lin.ee/D9KIJyb" className="floating-btn chat" target="_blank" rel="noopener noreferrer">
          <MessageCircle size={18} />
          <span>แชทเลย</span>
        </a>
      </div>
    </div>
  );
};

export default Home;
