import { motion } from 'framer-motion';
import { FaTrophy, FaStar, FaAward, FaMedal } from 'react-icons/fa';
import './Awards.css';

const Awards = () => {
  const awards = [
    {
      id: 1,
      icon: <FaTrophy />,
      year: '2024',
      title: 'Best Digital Agency',
      organization: 'Webby Awards',
    },
    {
      id: 2,
      icon: <FaStar />,
      year: '2023',
      title: 'Excellence in Design',
      organization: 'Awwwards',
    },
    {
      id: 3,
      icon: <FaAward />,
      year: '2023',
      title: 'Innovation Award',
      organization: 'CSS Design Awards',
    },
    {
      id: 4,
      icon: <FaMedal />,
      year: '2022',
      title: 'Top Creative Studio',
      organization: 'FWA',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="awards section">
      <div className="container">
        <motion.div
          className="awards-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-subtitle">Recognition</p>
          <h2 className="section-title">Awards & Achievements</h2>
          <p className="awards-description">
            Our commitment to excellence has been recognized by leading industry organizations.
          </p>
        </motion.div>

        <motion.div
          className="awards-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {awards.map((award) => (
            <motion.div
              key={award.id}
              className="award-card"
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="award-icon">{award.icon}</div>
              <div className="award-year">{award.year}</div>
              <h3 className="award-title">{award.title}</h3>
              <p className="award-organization">{award.organization}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Awards;
