from sqlalchemy.orm import Session
from typing import List

from . import models, schemas

def get_services(db: Session, skip: int = 0, limit: int = 100) -> list[models.Service]:
    return db.query(models.Service).filter(models.Service.is_active == True).offset(skip).limit(limit).all()

def get_service_by_slug(db: Session, slug: str) -> models.Service:
    return db.query(models.Service).filter(models.Service.slug == slug, models.Service.is_active == True).first()

def create_contact_message(db: Session, message: schemas.ContactMessageCreate) -> models.ContactMessage:
    db_message = models.ContactMessage(**message.dict())
    db.add(db_message)
    db.commit()
    db.refresh(db_message)
    return db_message

def get_contact_messages(db: Session, skip: int = 0, limit: int = 100) -> list[models.ContactMessage]:
    return db.query(models.ContactMessage).offset(skip).limit(limit).all()
