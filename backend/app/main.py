import os

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.routes.prediction import router as prediction_router


app = FastAPI(
    title="InsuraAI",
    description="AI-powered Health Insurance Premium Prediction API",
    version="1.0.0"
)


# ----------------------------------------
# CORS
# ----------------------------------------

FRONTEND_URL = os.getenv(
    "FRONTEND_URL",
    "http://localhost:5173"
)

app.add_middleware(
    CORSMiddleware,

    allow_origins=[
        FRONTEND_URL
    ],

    allow_credentials=True,

    allow_methods=["*"],

    allow_headers=["*"]
)


app.include_router(prediction_router)