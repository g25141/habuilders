import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    service_interest: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await axios.post('/api/contact/', formData);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        service_interest: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    'House Extensions',
    'Loft Conversions',
    'Garage Conversions',
    'Property Refurbishments',
    'Outdoor Living',
    'Roof Renovation',
    'Landscaping Services',
    'Kitchens',
    'Bathrooms',
    'Other'
  ];

  return (
    <div className="contact-page">
      <div className="container">
        <div className="page-header">
          <h1>Contact Us</h1>
          <p>
            Ready to start your construction project? Get in touch with our team 
            for a free consultation and quote.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-section">
              <h3>Get In Touch</h3>
              <p>
                We're here to help with all your construction needs. Contact us 
                today to discuss your project and get a free quote.
              </p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">📞</div>
                  <div>
                    <h4>Phone</h4>
                    <p>+44 7723058250</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">✉️</div>
                  <div>
                    <h4>Email</h4>
                    <p>info@ha-builders.co.uk</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">📍</div>
                  <div>
                    <h4>Address</h4>
                    <p>
                      156 Cippenham Lane<br />
                      Slough, England<br />
                      SL1 5BA
                    </p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">🕒</div>
                  <div>
                    <h4>Business Hours</h4>
                    <p>
                      Monday - Friday: 8:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="info-section">
              <h3>Why Choose HA-Builders?</h3>
              <ul className="features-list">
                <li>✅ Over 20 years of experience</li>
                <li>✅ Fully insured and certified</li>
                <li>✅ Free consultations and quotes</li>
                <li>✅ Quality guaranteed workmanship</li>
                <li>✅ Competitive pricing</li>
                <li>✅ On-time project delivery</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
