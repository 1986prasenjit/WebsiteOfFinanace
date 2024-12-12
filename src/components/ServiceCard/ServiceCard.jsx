import React from 'react';
import './ServiceCard.css';
import QRcode from '../../assets/images/qr-code.png';
import web from '../../assets/images/web.png';
import chess from '../../assets/images/chess.png';
import target from '../../assets/images/target.png';
import marketing from '../../assets/images/marketing.png';
import podcast from '../../assets/images/podcast.png';

const ServiceCard = () => {
  const services = [
    {
      icon: QRcode,
      title: 'Performance',
      description: 'Dynamically fabricate innovative products and distributed web services.'
    },
    {
      icon: podcast,
      title: 'Sustainability',
      description: 'Dynamically fabricate innovative products and distributed web services.'
    },
    {
      icon: web,
      title: 'Web Design',
      description: 'Dynamically fabricate innovative products and distributed web services.'
    },
    {
      icon: target,
      title: 'Web Development',
      description: 'Dynamically fabricate innovative products and distributed web services.'
    },
    {
      icon:chess,
      title: 'Branding Design',
      description: 'Dynamically fabricate innovative products and distributed web services.'
    },
    {
      icon: marketing,
      title: 'Marketing',
      description: 'Dynamically fabricate innovative products and distributed web services.'
    }
  ];

  return (
    <section className="services-section">
      <h2>We Provide Huge Range of Services</h2>
      <p>Holistically transform excellent systems rather than collaborative leadership. Credibly pursue compelling outside-the-box solutions.</p>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-item" key={index}>
            <img src={service.icon} alt={`${service.title} Icon`} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceCard;
