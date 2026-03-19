import { motion } from 'framer-motion';
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

  // Duplicate for seamless loop
  const allClients = [...clients, ...clients];

  return (
    <section className="clients section" id="about">
      <div className="container">
        <motion.div
          className="clients-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-subtitle">Trusted By</p>
          <h2 className="section-title">Companies We've Worked With</h2>
        </motion.div>
      </div>

      <motion.div
        className="clients-marquee-outer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="clients-marquee-track">
          {allClients.map((client, index) => (
            <div key={`${client.id}-${index}`} className="client-logo">
              <span className="client-name">{client.name}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ClientLogos;
