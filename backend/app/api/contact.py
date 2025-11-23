from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List

from ..database import get_db
from .. import schemas, services

router = APIRouter()

@router.post("/", response_model=schemas.ContactMessage)
def create_contact_message(message: schemas.ContactMessageCreate, db: Session = Depends(get_db)):
    return services.create_contact_message(db=db, message=message)

@router.get("/", response_model=List[schemas.ContactMessage])
def get_contact_messages(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    messages = services.get_contact_messages(db, skip=skip, limit=limit)
    return messages
