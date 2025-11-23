import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const services = [
    {
      title: 'House Extensions',
      slug: 'house-extensions',
      description: 'Extend your living space with our professional house extension services.',
      image: '/images/services/house-extensions.jpg'
    },
    {
      title: 'Loft Conversions',
      slug: 'loft-conversions',
      description: 'Transform your loft into a beautiful, functional living space.',
      image: '/images/services/loft-conversions.jpg'
    },
    {
      title: 'Garage Conversions',
      slug: 'garage-conversions',
      description: 'Convert your garage into additional living or working space.',
      image: '/images/services/garage-conversions.jpg'
    },
    {
      title: 'Property Refurbishments',
      slug: 'property-refurbishments',
      description: 'Complete property makeovers with modern finishes and fixtures.',
      image: '/images/services/property-refurbishments.jpg'
    },
    {
      title: 'Outdoor Living',
      slug: 'outdoor-living',
      description: 'Create stunning outdoor spaces for relaxation and entertainment.',
      image: '/images/services/outdoor-living.jpg'
    },
    {
      title: 'Roof Renovation',
      slug: 'roof-renovation',
      description: 'Professional roof repair, replacement, and renovation services.',
      image: '/images/services/HA_Roof.jpg'
    },
    {
      title: 'Landscaping Services',
      slug: 'landscaping',
      description: 'Professional landscaping to enhance your outdoor environment.',
      image: '/images/services/landscaping.jpg'
    },
    {
      title: 'Kitchens',
      slug: 'kitchens',
      description: 'Design and install beautiful, functional kitchen spaces.',
      image: '/images/services/kitchens.jpg'
    },
    {
      title: 'Bathrooms',
      slug: 'bathrooms',
      description: 'Luxurious bathroom renovations and installations.',
      image: '/images/services/bathrooms.jpg'
    }
  ];

  const features = [
    {
      icon: '✅',
      title: 'Quality Guaranteed',
      description: 'We stand behind our work with comprehensive warranties and quality guarantees.'
    },
    {
      icon: '👷',
      title: 'Experienced Team',
      description: 'Our skilled craftsmen bring decades of experience to every project.'
    },
    {
      icon: '⏰',
      title: 'On-Time Delivery',
      description: 'We respect your time and deliver projects on schedule, every time.'
    },
    {
      icon: '💰',
      title: 'Competitive Pricing',
      description: 'Fair, transparent pricing with no hidden costs or surprises.'
    }
  ];

  const testimonials = [
    {
      text: 'HA-Builders transformed our house extension project. The team was professional, punctual, and the quality of work exceeded our expectations.',
      author: 'Sarah & John Thompson'
    },
    {
      text: 'Our loft conversion is absolutely stunning. The attention to detail and craftsmanship is outstanding. Highly recommended!',
      author: 'Michael Chen'
    },
    {
      text: 'From design to completion, HA-Builders made our kitchen renovation stress-free. The result is exactly what we envisioned.',
      author: 'Emma Williams'
    }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Professional Construction Services</h1>
            <p>
              Transform your property with HA-Builders. We deliver exceptional construction 
              services including house extensions, loft conversions, and complete property 
              refurbishments with unmatched quality and craftsmanship.
            </p>
            <div className="hero-buttons">
              <Link to="/services" className="btn btn-secondary">
                View Our Services
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Our Services</h2>
            <p>
              From small renovations to major construction projects, we provide 
              comprehensive building services to bring your vision to life.
            </p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <Link 
                key={index} 
                to={`/services/${service.slug}`} 
                className="service-card"
              >
                <div className="service-card-image">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="service-icon-fallback" style={{display: 'none'}}>
                    {getServiceIcon(service.slug)}
                  </div>
                </div>
                <div className="service-card-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section features">
        <div className="container">
          <div className="section-title">
            <h2>Why Choose HA-Builders?</h2>
            <p>
              We combine traditional craftsmanship with modern techniques to deliver 
              exceptional results for every project.
            </p>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-item">
                <div className="feature-icon">
                  {feature.icon}
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section testimonials">
        <div className="container">
          <div className="section-title">
            <h2>What Our Customers Say</h2>
            <p>
              Don't just take our word for it. Here's what our satisfied customers 
              have to say about their experience with HA-Builders.
            </p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <p className="testimonial-text">{testimonial.text}</p>
                <p className="testimonial-author">— {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Project?</h2>
            <p>
              Get in touch with our team today for a free consultation and quote. 
              Let's discuss how we can bring your construction vision to life.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">
                Contact Us Today
              </Link>
              <Link to="/services" className="btn btn-outline">
                Browse Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const getServiceIcon = (slug) => {
  const icons = {
    'house-extensions': '🏠',
    'loft-conversions': '🏡',
    'garage-conversions': '🚗',
    'property-refurbishments': '🔨',
    'outdoor-living': '🌳',
    'roof-renovation': '🏠',
    'landscaping': '🌿',
    'kitchens': '🍳',
    'bathrooms': '🛁'
  };
  return icons[slug] || '🏗️';
};

export default Home;
