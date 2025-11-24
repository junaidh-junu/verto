import { motion } from 'framer-motion';
import { FaPaintBrush, FaCode, FaMobile, FaRocket } from 'react-icons/fa';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <FaPaintBrush />,
      title: 'UI/UX Design',
      description: 'Creating beautiful and intuitive user experiences that engage and delight your audience with modern design principles.',
    },
    {
      id: 2,
      icon: <FaCode />,
      title: 'Web Development',
      description: 'Building fast, scalable, and secure websites using cutting-edge technologies and best practices.',
    },
    {
      id: 3,
      icon: <FaMobile />,
      title: 'Mobile Apps',
      description: 'Developing native and cross-platform mobile applications that deliver exceptional user experiences.',
    },
    {
      id: 4,
      icon: <FaRocket />,
      title: 'Digital Marketing',
      description: 'Boosting your online presence with strategic marketing campaigns that drive results and growth.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="services section" id="services">
      <div className="container">
        <motion.div
          className="services-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-subtitle">What We Do</p>
          <h2 className="section-title">Our Services</h2>
          <p className="services-description">
            We offer a comprehensive range of digital services to help your business thrive in the digital age.
          </p>
        </motion.div>

        <motion.div
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="service-card"
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <a href="#contact" className="service-link">
                Learn More →
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
