import os
from typing import Optional
from fastapi import FastAPI
import uvicorn
import random

app = FastAPI()

@app.get("/")
def home():
    return {"Hello": "World from FastAPI"}

# get random number between min(default:0) and max(default:9)
@app.get("/random/")
def get_random(min: Optional[int] = 0, max: Optional[int] = 9):
    rval = random.randint(min, max)
    return { "value": rval }

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=int(os.getenv("PORT", default=5000)), log_level="info")
