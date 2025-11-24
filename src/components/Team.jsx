import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import './Team.css';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'Creative Director',
      initials: 'SJ',
    },
    {
      id: 2,
      name: 'Michael Chen',
      position: 'Lead Developer',
      initials: 'MC',
    },
    {
      id: 3,
      name: 'Emily Williams',
      position: 'UI/UX Designer',
      initials: 'EW',
    },
    {
      id: 4,
      name: 'David Rodriguez',
      position: 'Marketing Manager',
      initials: 'DR',
    },
    {
      id: 5,
      name: 'Jessica Lee',
      position: 'Project Manager',
      initials: 'JL',
    },
    {
      id: 6,
      name: 'James Anderson',
      position: 'Backend Developer',
      initials: 'JA',
    },
    {
      id: 7,
      name: 'Sophia Martinez',
      position: 'Content Strategist',
      initials: 'SM',
    },
    {
      id: 8,
      name: 'Ryan Thompson',
      position: 'SEO Specialist',
      initials: 'RT',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="team section" id="team">
      <div className="container">
        <motion.div
          className="team-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-subtitle">Our People</p>
          <h2 className="section-title">Meet The Team</h2>
          <p className="team-description">
            Talented individuals working together to create extraordinary experiences.
          </p>
        </motion.div>

        <motion.div
          className="team-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              className="team-member"
              variants={itemVariants}
            >
              <div className="team-member-inner">
                <div className="team-member-front">
                  <div className="member-avatar">
                    <span>{member.initials}</span>
                  </div>
                  <h3 className="member-name">{member.name}</h3>
                  <p className="member-position">{member.position}</p>
                </div>
                <div className="team-member-back">
                  <div className="member-social">
                    <a href="#" className="social-link" aria-label="LinkedIn">
                      <FaLinkedin />
                    </a>
                    <a href="#" className="social-link" aria-label="Twitter">
                      <FaTwitter />
                    </a>
                    <a href="#" className="social-link" aria-label="GitHub">
                      <FaGithub />
                    </a>
                  </div>
                  <p className="member-bio">
                    Passionate about creating amazing digital experiences.
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
