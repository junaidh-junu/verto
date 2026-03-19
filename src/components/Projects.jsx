import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'Web Development',
      description: 'A modern e-commerce platform with seamless user experience',
      color: '#1E3A6E',
    },
    {
      id: 2,
      title: 'Brand Identity',
      category: 'Branding',
      description: 'Complete brand identity design for a tech startup',
      color: '#0D1B3E',
    },
    {
      id: 3,
      title: 'Mobile Banking App',
      category: 'Mobile App',
      description: 'Secure and intuitive mobile banking application',
      color: '#2C4A7C',
    },
    {
      id: 4,
      title: 'Social Media Campaign',
      category: 'Marketing',
      description: 'Viral social media campaign that reached millions',
      color: '#152A52',
    },
    {
      id: 5,
      title: 'Portfolio Website',
      category: 'Web Design',
      description: 'Creative portfolio website for a photographer',
      color: '#0D1B3E',
    },
  ];

  return (
    <section className="projects section" id="projects">
      <div className="container">
        <motion.div
          className="projects-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-subtitle">Portfolio</p>
          <h2 className="section-title">Selected Projects</h2>
          <p className="projects-description">
            Explore our latest work and see how we've helped businesses achieve their goals.
          </p>
        </motion.div>

        <motion.div
          className="projects-carousel"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            grabCursor={true}
            centeredSlides={false}
            slidesPerView="auto"
            spaceBetween={24}
            pagination={{ clickable: true }}
            navigation={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            loop={true}
            speed={700}
            className="projects-swiper"
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id} className="project-slide">
                <div className="project-card">
                  <div
                    className="project-image"
                    style={{ backgroundColor: project.color }}
                  >
                    <span className="project-number">0{project.id}</span>
                    <div className="project-image-overlay">
                      <button className="project-btn">View Project</button>
                    </div>
                  </div>
                  <div className="project-content">
                    <p className="project-category">{project.category}</p>
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
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

export default Projects;
