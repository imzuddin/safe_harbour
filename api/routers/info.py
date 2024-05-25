
from fastapi import APIRouter, HTTPException
from starlette import status 

router = APIRouter()

@router.get("/")
async def start():
    return {"message": "Hello, world!"}