#!/usr/bin/env python3
"""
Seed script to populate the database with sample data for HA-Builders
"""

import sys
import os
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

from sqlalchemy.orm import Session
from app.database import SessionLocal, engine
from app import models

def create_sample_data():
    """Create sample data for the application"""
    
    # Create tables
    models.Base.metadata.create_all(bind=engine)
    
    db = SessionLocal()
    
    try:
        # Create sample services
        services_data = [
            {
                "title": "House Extensions",
                "slug": "house-extensions",
                "description": "Extend your living space with our professional house extension services. We handle everything from planning permission to completion.",
                "content": """
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
                """,
                "image_url": None
            },
            {
                "title": "Loft Conversions",
                "slug": "loft-conversions",
                "description": "Transform your loft into a beautiful, functional living space. Perfect for adding bedrooms, offices, or playrooms.",
                "content": """
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
                """,
                "image_url": None
            },
            {
                "title": "Garage Conversions",
                "slug": "garage-conversions",
                "description": "Convert your garage into additional living or working space. Ideal for home offices, gyms, or extra bedrooms.",
                "content": """
                    <h3>Transform Your Garage into Living Space</h3>
                    <p>Garage conversions provide a cost-effective way to add living space without extending your property footprint. We ensure proper insulation, ventilation, and compliance with building regulations.</p>
                    
                    <h4>Popular Garage Conversion Uses:</h4>
                    <ul>
                        <li>Home office or study</li>
                        <li>Gym or fitness room</li>
                        <li>Extra bedroom or guest room</li>
                        <li>Playroom or family room</li>
                        <li>Utility room or storage</li>
                    </ul>
                """,
                "image_url": None
            },
            {
                "title": "Property Refurbishments",
                "slug": "property-refurbishments",
                "description": "Complete property makeovers with modern finishes and fixtures. From cosmetic updates to full renovations.",
                "content": """
                    <h3>Complete Property Refurbishments</h3>
                    <p>Our refurbishment services cover everything from updating kitchens and bathrooms to complete home makeovers. We work with quality materials and modern design trends.</p>
                    
                    <h4>Refurbishment Services:</h4>
                    <ul>
                        <li>Kitchen renovations</li>
                        <li>Bathroom makeovers</li>
                        <li>Flooring installation</li>
                        <li>Painting and decorating</li>
                        <li>Electrical and plumbing updates</li>
                    </ul>
                """,
                "image_url": None
            },
            {
                "title": "Outdoor Living",
                "slug": "outdoor-living",
                "description": "Create stunning outdoor spaces for relaxation and entertainment. Patios, decking, and outdoor kitchens.",
                "content": """
                    <h3>Create Your Perfect Outdoor Living Space</h3>
                    <p>Transform your garden into an outdoor living space with our landscaping and hardscaping services. We create beautiful, functional outdoor areas that extend your living space.</p>
                    
                    <h4>Outdoor Living Features:</h4>
                    <ul>
                        <li>Patios and decking</li>
                        <li>Outdoor kitchens</li>
                        <li>Garden rooms and pergolas</li>
                        <li>Fire pits and seating areas</li>
                        <li>Lighting and heating solutions</li>
                    </ul>
                """,
                "image_url": None
            },
            {
                "title": "Roof Renovation",
                "slug": "roof-renovation",
                "description": "Professional roof repair, replacement, and renovation services. Protect your property with quality roofing solutions.",
                "content": """
                    <h3>Professional Roof Renovation Services</h3>
                    <p>Our expert roofers provide comprehensive roofing services including repairs, replacements, and complete roof renovations. We work with quality materials and ensure your roof is weatherproof and durable.</p>
                    
                    <h4>Roof Renovation Services:</h4>
                    <ul>
                        <li>Roof repairs and maintenance</li>
                        <li>Complete roof replacement</li>
                        <li>Gutter installation and repair</li>
                        <li>Roof insulation and ventilation</li>
                        <li>Emergency roof repairs</li>
                        <li>Flat roof solutions</li>
                        <li>Slate and tile roofing</li>
                    </ul>
                    
                    <h4>Why Choose Us for Roof Renovation?</h4>
                    <ul>
                        <li>Experienced and certified roofers</li>
                        <li>Quality materials and workmanship</li>
                        <li>Weatherproof and durable solutions</li>
                        <li>Competitive pricing</li>
                        <li>Full insurance coverage</li>
                    </ul>
                """,
                "image_url": None
            },
            {
                "title": "Landscaping Services",
                "slug": "landscaping",
                "description": "Professional landscaping to enhance your outdoor environment. Garden design and maintenance.",
                "content": """
                    <h3>Professional Landscaping Services</h3>
                    <p>Our landscaping services include garden design, planting, lawn installation, and ongoing maintenance. We create beautiful, sustainable outdoor spaces.</p>
                    
                    <h4>Landscaping Services:</h4>
                    <ul>
                        <li>Garden design and planning</li>
                        <li>Planting and lawn installation</li>
                        <li>Hardscaping and paving</li>
                        <li>Water features and irrigation</li>
                        <li>Garden maintenance</li>
                    </ul>
                """,
                "image_url": None
            },
            {
                "title": "Kitchens",
                "slug": "kitchens",
                "description": "Design and install beautiful, functional kitchen spaces. From design to installation.",
                "content": """
                    <h3>Beautiful Kitchen Design & Installation</h3>
                    <p>Kitchen renovations are one of our specialties. We work with leading suppliers to create stunning, functional kitchens that become the heart of your home.</p>
                    
                    <h4>Kitchen Services:</h4>
                    <ul>
                        <li>Kitchen design and planning</li>
                        <li>Cabinet installation</li>
                        <li>Worktop fitting</li>
                        <li>Appliance installation</li>
                        <li>Plumbing and electrical work</li>
                    </ul>
                """,
                "image_url": None
            },
            {
                "title": "Bathrooms",
                "slug": "bathrooms",
                "description": "Luxurious bathroom renovations and installations. Modern fixtures and finishes.",
                "content": """
                    <h3>Luxurious Bathroom Renovations</h3>
                    <p>Transform your bathroom into a spa-like retreat with our bathroom renovation services. We handle everything from plumbing to tiling and finishing.</p>
                    
                    <h4>Bathroom Services:</h4>
                    <ul>
                        <li>Bathroom design and planning</li>
                        <li>Bath and shower installation</li>
                        <li>Tiling and flooring</li>
                        <li>Plumbing and electrical work</li>
                        <li>Fixtures and fittings</li>
                    </ul>
                """,
                "image_url": None
            }
        ]
        
        for service_data in services_data:
            # Check if service already exists
            existing_service = db.query(models.Service).filter(
                models.Service.slug == service_data["slug"]
            ).first()
            
            if not existing_service:
                service = models.Service(**service_data)
                db.add(service)
                print(f"Created service: {service_data['title']}")
            else:
                print(f"Service already exists: {service_data['title']}")
        
        
        # Create sample contact messages
        sample_messages = [
            {
                "name": "John Smith",
                "email": "john.smith@email.com",
                "phone": "+44 7723058250",
                "subject": "House Extension Quote",
                "message": "Hi, I'm interested in getting a quote for a single-story extension to my kitchen. The property is a 3-bedroom semi-detached house built in the 1980s. Could you please provide an estimate?",
                "service_interest": "House Extensions",
                "is_read": True
            },
            {
                "name": "Sarah Johnson",
                "email": "sarah.j@email.com",
                "phone": "+44 7723058250",
                "subject": "Loft Conversion Inquiry",
                "message": "We're looking to convert our loft into a master bedroom with ensuite. The loft is currently unused and has good headroom. Could you arrange a site visit?",
                "service_interest": "Loft Conversions",
                "is_read": False
            }
        ]
        
        for message_data in sample_messages:
            existing_message = db.query(models.ContactMessage).filter(
                models.ContactMessage.email == message_data["email"],
                models.ContactMessage.subject == message_data["subject"]
            ).first()
            
            if not existing_message:
                message = models.ContactMessage(**message_data)
                db.add(message)
                print(f"Created contact message from: {message_data['name']}")
        
        db.commit()
        print("\n✅ Sample data created successfully!")
        
    except Exception as e:
        print(f"❌ Error creating sample data: {e}")
        db.rollback()
    finally:
        db.close()

if __name__ == "__main__":
    create_sample_data()
