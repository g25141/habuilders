import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Services.css';

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await axios.get('/api/services/');
      // Ensure response.data is an array
      if (Array.isArray(response.data)) {
        setServices(response.data);
      } else {
        throw new Error('Invalid API response format');
      }
    } catch (error) {
      console.error('Error fetching services:', error);
      // Fallback to static data if API fails
      setServices(getStaticServices());
    } finally {
      setLoading(false);
    }
  };

  const getStaticServices = () => [
    {
      id: 1,
      title: 'House Extensions',
      slug: 'house-extensions',
      description: 'Extend your living space with our professional house extension services. We handle everything from planning permission to completion.',
      content: 'Our house extension services include single and double-story extensions, kitchen extensions, and rear extensions. We work with you to maximize your space while maintaining the character of your existing property.',
      image_url: null
    },
    {
      id: 2,
      title: 'Loft Conversions',
      slug: 'loft-conversions',
      description: 'Transform your loft into a beautiful, functional living space. Perfect for adding bedrooms, offices, or playrooms.',
      content: 'Loft conversions are an excellent way to add value and space to your home. We specialize in dormer, hip-to-gable, and mansard conversions, ensuring maximum headroom and natural light.',
      image_url: null
    },
    {
      id: 3,
      title: 'Garage Conversions',
      slug: 'garage-conversions',
      description: 'Convert your garage into additional living or working space. Ideal for home offices, gyms, or extra bedrooms.',
      content: 'Garage conversions provide a cost-effective way to add living space without extending your property footprint. We ensure proper insulation, ventilation, and compliance with building regulations.',
      image_url: null
    },
    {
      id: 4,
      title: 'Property Refurbishments',
      slug: 'property-refurbishments',
      description: 'Complete property makeovers with modern finishes and fixtures. From cosmetic updates to full renovations.',
      content: 'Our refurbishment services cover everything from updating kitchens and bathrooms to complete home makeovers. We work with quality materials and modern design trends.',
      image_url: null
    },
    {
      id: 5,
      title: 'Outdoor Living',
      slug: 'outdoor-living',
      description: 'Create stunning outdoor spaces for relaxation and entertainment. Patios, decking, and outdoor kitchens.',
      content: 'Transform your garden into an outdoor living space with our landscaping and hardscaping services. We create beautiful, functional outdoor areas that extend your living space.',
      image_url: null
    },
    {
      id: 6,
      title: 'Roof Renovation',
      slug: 'roof-renovation',
      description: 'Professional roof repair, replacement, and renovation services. Protect your property with quality roofing solutions.',
      content: 'Our expert roofers provide comprehensive roofing services including repairs, replacements, and complete roof renovations. We work with quality materials and ensure your roof is weatherproof and durable.',
      image_url: null
    },
    {
      id: 7,
      title: 'Landscaping Services',
      slug: 'landscaping',
      description: 'Professional landscaping to enhance your outdoor environment. Garden design and maintenance.',
      content: 'Our landscaping services include garden design, planting, lawn installation, and ongoing maintenance. We create beautiful, sustainable outdoor spaces.',
      image_url: null
    },
    {
      id: 8,
      title: 'Kitchens',
      slug: 'kitchens',
      description: 'Design and install beautiful, functional kitchen spaces. From design to installation.',
      content: 'Kitchen renovations are one of our specialties. We work with leading suppliers to create stunning, functional kitchens that become the heart of your home.',
      image_url: null
    },
    {
      id: 9,
      title: 'Bathrooms',
      slug: 'bathrooms',
      description: 'Luxurious bathroom renovations and installations. Modern fixtures and finishes.',
      content: 'Transform your bathroom into a spa-like retreat with our bathroom renovation services. We handle everything from plumbing to tiling and finishing.',
      image_url: null
    }
  ];

  if (loading) {
    return (
      <div className="services-page">
        <div className="container">
          <div className="loading">
            <h2>Loading Services...</h2>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="services-page">
      <div className="container">
        <div className="page-header">
          <h1>Our Services</h1>
          <p>
            From small renovations to major construction projects, we provide 
            comprehensive building services to bring your vision to life.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-card-image">
                <img src={getServiceImage(service.slug)} alt={service.title} />
              </div>
              <div className="service-card-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link 
                  to={`/services/${service.slug}`} 
                  className="btn btn-primary"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="services-cta">
          <h2>Can't Find What You're Looking For?</h2>
          <p>
            We offer a wide range of construction and renovation services. 
            Contact us to discuss your specific requirements.
          </p>
          <Link to="/contact" className="btn btn-secondary">
            Contact Us Today
          </Link>
        </div>
      </div>
    </div>
  );
};

const getServiceImage = (slug) => {
  const images = {
    'house-extensions': '/images/services/house-extensions.jpg',
    'loft-conversions': '/images/services/loft-conversions.jpg',
    'garage-conversions': '/images/services/garage-conversions.jpg',
    'property-refurbishments': '/images/services/property-refurbishments.jpg',
    'outdoor-living': '/images/services/outdoor-living.jpg',
    'roof-renovation': '/images/services/HA_Roof.jpg',
    'landscaping': '/images/services/landscaping.jpg',
    'kitchens': '/images/services/kitchens.jpg',
    'bathrooms': '/images/services/bathrooms.jpg'
  };
  return images[slug] || '/images/services/house-extensions.svg';
};

export default Services;
