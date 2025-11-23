from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List

from ..database import get_db
from .. import schemas, services

router = APIRouter()

@router.get("/", response_model=List[schemas.Service])
def get_services(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    services_list = services.get_services(db, skip=skip, limit=limit)
    return services_list

@router.get("/{slug}", response_model=schemas.Service)
def get_service(slug: str, db: Session = Depends(get_db)):
    service = services.get_service_by_slug(db, slug=slug)
    if service is None:
        raise HTTPException(status_code=404, detail="Service not found")
    return service
