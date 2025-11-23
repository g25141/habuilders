import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import './ServiceDetail.css';

const ServiceDetail = () => {
  const { slug } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchService();
  }, [slug]);

  const fetchService = async () => {
    try {
      const response = await axios.get(`/api/services/${slug}`);
      setService(response.data);
    } catch (error) {
      console.error('Error fetching service:', error);
      // Fallback to static data if API fails
      setService(getStaticService(slug));
    } finally {
      setLoading(false);
    }
  };

  const getStaticService = (slug) => {
    const services = {
      'house-extensions': {
        id: 1,
        title: 'House Extensions',
        slug: 'house-extensions',
        description: 'Extend your living space with our professional house extension services. We handle everything from planning permission to completion.',
        content: `
          <h3>Transform Your Home with Professional House Extensions</h3>
          <p>At HA-Builders, we specialize in creating beautiful, functional house extensions that seamlessly blend with your existing property. Whether you need extra living space, a larger kitchen, or additional bedrooms, our experienced team will bring your vision to life.</p>
          
          <h4>Our House Extension Services Include:</h4>
          <ul>
            <li><strong>Single Story Extensions:</strong> Perfect for expanding your kitchen, dining room, or living area</li>
            <li><strong>Double Story Extensions:</strong> Maximize your space with additional bedrooms and bathrooms</li>
            <li><strong>Kitchen Extensions:</strong> Create the kitchen of your dreams with modern design and functionality</li>
            <li><strong>Rear Extensions:</strong> Extend into your garden space for additional living areas</li>
            <li><strong>Side Extensions:</strong> Utilize side space for additional rooms or storage</li>
          </ul>
          
          <h4>Why Choose HA-Builders for Your Extension?</h4>
          <ul>
            <li>Over 20 years of experience in house extensions</li>
            <li>Full planning permission assistance</li>
            <li>High-quality materials and craftsmanship</li>
            <li>Minimal disruption to your daily life</li>
            <li>Comprehensive project management</li>
            <li>Building regulation compliance guaranteed</li>
          </ul>
          
          <h4>The Process:</h4>
          <ol>
            <li><strong>Initial Consultation:</strong> We discuss your requirements and assess your property</li>
            <li><strong>Design & Planning:</strong> Our team creates detailed plans and handles planning permission</li>
            <li><strong>Construction:</strong> Professional construction with regular updates and quality checks</li>
            <li><strong>Completion:</strong> Final inspection and handover of your completed extension</li>
          </ol>
        `,
        image_url: null
      },
      'loft-conversions': {
        id: 2,
        title: 'Loft Conversions',
        slug: 'loft-conversions',
        description: 'Transform your loft into a beautiful, functional living space. Perfect for adding bedrooms, offices, or playrooms.',
        content: `
          <h3>Maximize Your Space with Professional Loft Conversions</h3>
          <p>Unlock the potential of your loft space with our expert conversion services. We transform unused attic space into beautiful, functional rooms that add significant value to your property.</p>
          
          <h4>Types of Loft Conversions:</h4>
          <ul>
            <li><strong>Dormer Conversions:</strong> Add headroom and natural light with dormer windows</li>
            <li><strong>Hip-to-Gable Conversions:</strong> Maximize space by extending the roof</li>
            <li><strong>Mansard Conversions:</strong> Create additional living space with steep roof angles</li>
            <li><strong>Velux Conversions:</strong> Simple conversions using roof windows</li>
          </ul>
          
          <h4>Popular Loft Conversion Uses:</h4>
          <ul>
            <li>Master bedroom with ensuite bathroom</li>
            <li>Home office or study space</li>
            <li>Children's playroom or bedroom</li>
            <li>Guest bedroom</li>
            <li>Home gym or hobby room</li>
          </ul>
          
          <h4>Our Loft Conversion Process:</h4>
          <ol>
            <li><strong>Structural Assessment:</strong> We evaluate your loft's potential and structural requirements</li>
            <li><strong>Design Planning:</strong> Create detailed plans that maximize space and natural light</li>
            <li><strong>Building Regulations:</strong> Ensure compliance with all building standards</li>
            <li><strong>Construction:</strong> Professional installation with minimal disruption</li>
            <li><strong>Finishing:</strong> Complete with high-quality fixtures and fittings</li>
          </ol>
        `,
        image_url: null
      }
    };
    
    return services[slug] || {
      id: 0,
      title: 'Service Not Found',
      slug: slug,
      description: 'The requested service could not be found.',
      content: '<p>Please check the URL or return to our services page.</p>',
      image_url: null
    };
  };

  if (loading) {
    return (
      <div className="service-detail-page">
        <div className="container">
          <div className="loading">
            <h2>Loading Service Details...</h2>
          </div>
        </div>
      </div>
    );
  }

  if (!service) {
    return (
      <div className="service-detail-page">
        <div className="container">
          <div className="error">
            <h2>Service Not Found</h2>
            <p>The requested service could not be found.</p>
            <Link to="/services" className="btn btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="service-detail-page">
      <div className="container">
        <div className="breadcrumb">
          <Link to="/">Home</Link>
          <span> / </span>
          <Link to="/services">Services</Link>
          <span> / </span>
          <span>{service.title}</span>
        </div>

        <div className="service-header">
          <div className="service-image">
            <img src={getServiceImage(service.slug)} alt={service.title} />
          </div>
          <div className="service-info">
            <h1>{service.title}</h1>
            <p className="service-description">{service.description}</p>
            <div className="service-actions">
              <Link to="/contact" className="btn btn-primary">
                Get Free Quote
              </Link>
              <Link to="/services" className="btn btn-outline">
                View All Services
              </Link>
            </div>
          </div>
        </div>

        <div className="service-content">
          <div 
            className="content"
            dangerouslySetInnerHTML={{ __html: service.content }}
          />
        </div>

        <div className="service-cta">
          <h2>Ready to Start Your {service.title} Project?</h2>
          <p>
            Contact our team today for a free consultation and detailed quote. 
            We'll discuss your requirements and provide expert advice on your project.
          </p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-primary">
              Contact Us Today
            </Link>
            <a href="tel:+447723058250" className="btn btn-secondary">
              Call Now: +44 7723058250
            </a>
          </div>
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
  return images[slug] || '/images/services/house-extensions.jpg';
};

export default ServiceDetail;
