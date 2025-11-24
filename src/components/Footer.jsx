import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaGithub, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-content">
          <motion.div
            className="footer-col footer-about"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="footer-logo">LIKO<span>.</span></h3>
            <p className="footer-description">
              We are a creative digital studio focused on building amazing experiences that inspire and engage.
            </p>
            <div className="footer-social">
              <a href="#" className="social-icon" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="#" className="social-icon" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="#" className="social-icon" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="#" className="social-icon" aria-label="Instagram">
                <FaInstagram />
              </a>
            </div>
          </motion.div>

          <motion.div
            className="footer-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="footer-title">Services</h4>
            <ul className="footer-links">
              <li><a href="#services">UI/UX Design</a></li>
              <li><a href="#services">Web Development</a></li>
              <li><a href="#services">Mobile Apps</a></li>
              <li><a href="#services">Digital Marketing</a></li>
            </ul>
          </motion.div>

          <motion.div
            className="footer-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="footer-title">Company</h4>
            <ul className="footer-links">
              <li><a href="#about">About Us</a></li>
              <li><a href="#team">Our Team</a></li>
              <li><a href="#projects">Portfolio</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </motion.div>

          <motion.div
            className="footer-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="footer-title">Contact</h4>
            <ul className="footer-contact">
              <li>
                <FaMapMarkerAlt />
                <span>123 Creative Street, Design City</span>
              </li>
              <li>
                <FaPhone />
                <span>+1 (555) 123-4567</span>
              </li>
              <li>
                <FaEnvelope />
                <span>hello@liko.studio</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="footer-copyright">
            &copy; {currentYear} LIKO. All rights reserved. Built with passion and creativity.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
