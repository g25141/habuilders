from pydantic import BaseModel, EmailStr
from typing import Optional, List
from datetime import datetime


# Service schemas
class ServiceBase(BaseModel):
    title: str
    slug: str
    description: str
    content: Optional[str] = None
    image_url: Optional[str] = None

class ServiceCreate(ServiceBase):
    pass

class Service(ServiceBase):
    id: int
    is_active: bool
    created_at: datetime
    updated_at: Optional[datetime] = None
    
    class Config:
        from_attributes = True

# Contact schemas
class ContactMessageBase(BaseModel):
    name: str
    email: EmailStr
    phone: Optional[str] = None
    subject: str
    message: str
    service_interest: Optional[str] = None

class ContactMessageCreate(ContactMessageBase):
    pass

class ContactMessage(ContactMessageBase):
    id: int
    is_read: bool
    created_at: datetime
    
    class Config:
        from_attributes = True

# Project schemas
class ProjectBase(BaseModel):
    title: str
    description: str
    image_url: Optional[str] = None
    service_id: Optional[int] = None

class ProjectCreate(ProjectBase):
    pass

class Project(ProjectBase):
    id: int
    is_featured: bool
    created_at: datetime
    
    class Config:
        from_attributes = True

