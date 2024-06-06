from fastapi import APIRouter, HTTPException
from starlette import status 
from utils.db_manager import DBManager
from utils.models import User
import uuid

router = APIRouter()

db = DBManager()
db.connect()

@router.post("/create_user")
async def create_user(user: User):
    id = str(uuid.uuid4())
    username = user.username
    email = user.email
    password = user.password 


    db.create_user(
        id,
        username,
        email,
        password
    )

    print(f"added user")