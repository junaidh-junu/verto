import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import './ClientLogos.css';

const ClientLogos = () => {
  const clients = [
    { name: 'Google', id: 1 },
    { name: 'Microsoft', id: 2 },
    { name: 'Amazon', id: 3 },
    { name: 'Apple', id: 4 },
    { name: 'Netflix', id: 5 },
    { name: 'Adobe', id: 6 },
    { name: 'Tesla', id: 7 },
    { name: 'Meta', id: 8 },
  ];

  return (
    <section className="clients section" id="about">
      <div className="container">
        <motion.div
          className="clients-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-subtitle">Trusted By Leaders</p>
          <h2 className="section-title">Our Amazing Clients</h2>
        </motion.div>

        <motion.div
          className="clients-carousel"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Swiper
            modules={[Autoplay]}
            spaceBetween={50}
            slidesPerView={2}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            speed={1000}
            breakpoints={{
              576: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              992: {
                slidesPerView: 5,
              },
            }}
          >
            {clients.map((client) => (
              <SwiperSlide key={client.id}>
                <div className="client-logo">
                  <span className="client-name">{client.name}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientLogos;
