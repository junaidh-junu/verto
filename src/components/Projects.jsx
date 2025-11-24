import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'Web Development',
      description: 'A modern e-commerce platform with seamless user experience',
      color: '#FF6B6B',
    },
    {
      id: 2,
      title: 'Brand Identity',
      category: 'Branding',
      description: 'Complete brand identity design for a tech startup',
      color: '#4ECDC4',
    },
    {
      id: 3,
      title: 'Mobile Banking App',
      category: 'Mobile App',
      description: 'Secure and intuitive mobile banking application',
      color: '#45B7D1',
    },
    {
      id: 4,
      title: 'Social Media Campaign',
      category: 'Marketing',
      description: 'Viral social media campaign that reached millions',
      color: '#F7DC6F',
    },
    {
      id: 5,
      title: 'Portfolio Website',
      category: 'Web Design',
      description: 'Creative portfolio website for a photographer',
      color: '#BB8FCE',
    },
  ];

  return (
    <section className="projects section" id="projects">
      <div className="container">
        <motion.div
          className="projects-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-subtitle">Portfolio</p>
          <h2 className="section-title">Our Coolest Projects</h2>
          <p className="projects-description">
            Explore our latest work and see how we've helped businesses achieve their goals.
          </p>
        </motion.div>

        <motion.div
          className="projects-carousel"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{ clickable: true }}
            navigation={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            speed={1000}
            className="projects-swiper"
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id} className="project-slide">
                <motion.div
                  className="project-card"
                  style={{ backgroundColor: project.color }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="project-content">
                    <span className="project-number">0{project.id}</span>
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-category">{project.category}</p>
                    <p className="project-description">{project.description}</p>
                    <button className="project-btn">View Project</button>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
