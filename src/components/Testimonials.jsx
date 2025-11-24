import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { FaQuoteLeft } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/pagination';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'John Miller',
      position: 'CEO, TechCorp',
      text: 'Working with this team has been an absolute pleasure. They delivered beyond our expectations and transformed our digital presence completely.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Amanda Stevens',
      position: 'Founder, StartupHub',
      text: 'Incredible attention to detail and creativity. They truly understand what it takes to build a modern, engaging digital experience.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Robert Chang',
      position: 'Director, InnovateLab',
      text: 'Professional, responsive, and highly skilled. They brought our vision to life and exceeded every milestone we set together.',
      rating: 5,
    },
    {
      id: 4,
      name: 'Lisa Thompson',
      position: 'Marketing Head, BrandCo',
      text: 'The best digital agency we have worked with. Their strategic approach and creative execution delivered outstanding results.',
      rating: 5,
    },
  ];

  return (
    <section className="testimonials section">
      <div className="container">
        <motion.div
          className="testimonials-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-subtitle">Client Feedback</p>
          <h2 className="section-title">What Our Clients Say</h2>
        </motion.div>

        <motion.div
          className="testimonials-carousel"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            speed={1000}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="testimonials-swiper"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="testimonial-card">
                  <div className="testimonial-quote-icon">
                    <FaQuoteLeft />
                  </div>
                  <div className="testimonial-rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="star">
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="testimonial-text">{testimonial.text}</p>
                  <div className="testimonial-author">
                    <div className="author-avatar">
                      {testimonial.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </div>
                    <div className="author-info">
                      <h4 className="author-name">{testimonial.name}</h4>
                      <p className="author-position">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
