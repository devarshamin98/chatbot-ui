from fastapi import FastAPI, Depends, HTTPException
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from fastapi.middleware.cors import CORSMiddleware
from jose import JWTError, jwt
from pydantic import BaseModel
from datetime import datetime, timedelta
from typing import Optional

SECRET_KEY = "your-secret-key"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

app = FastAPI()

# CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # React app URL, change if necessary
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods (GET, POST, PUT, DELETE, etc.)
    allow_headers=["*"],  # Allow all headers
)

# OAuth2 scheme for token
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")
# Dummy user for illustration
fake_user = {"username": "user", "password": "password"}

# Function to authenticate user
def authenticate_user(username: str, password: str):
    if username == fake_user["username"] and password == fake_user["password"]:
        return True
    return False

# Token creation function
def create_access_token(data: dict, expires_delta: Optional[timedelta] = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=15)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

# Login endpoint to generate JWT
@app.post("/token")
async def login(form_data: OAuth2PasswordRequestForm = Depends()):
    print("here")
    if authenticate_user(form_data.username, form_data.password):
        access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
        access_token = create_access_token(data={"sub": form_data.username}, expires_delta=access_token_expires)
        return {"access_token": access_token, "token_type": "bearer"}
    else:
        raise HTTPException(status_code=401, detail="Invalid credentials")

# Define the model for the request body
class Message(BaseModel):
    from_user: str
    text: str

# Protected chatbot interaction endpoint
@app.post("/send-message/")
async def send_message(message: Message):
    # Simulate bot response
    if "hello" in message.text.lower():
        bot_response = "Hello! How can I help you today?"
    elif message.text.lower() == "create report this month":
        bot_response = "I’ll work on the report and send it your way this month."
    elif message.text.lower() == "call lead":
        bot_response = "I'm scheduling a call with the lead right now."
    else:
        bot_response = "I don't understand that yet, but I'm learning!"
    
    # Return bot response
    return {"response": bot_response}

