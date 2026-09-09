from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.routes.prediction import (
    router as prediction_router
)


app = FastAPI(
    title="InsuraAI",
    description=(
        "AI-powered Health Insurance "
        "Premium Prediction API"
    ),
    version="1.0.0"
)


# ----------------------------------------
# CORS
# ----------------------------------------

app.add_middleware(
    CORSMiddleware,

    allow_origins=[
        "http://localhost:5173"
    ],

    allow_credentials=True,

    allow_methods=["*"],

    allow_headers=["*"]
)


# ----------------------------------------
# ROUTES
# ----------------------------------------

app.include_router(
    prediction_router
)


@app.get("/")
def root():

    return {
        "application": "InsuraAI",
        "status": "online",
        "message": (
            "Health Insurance "
            "Premium Prediction API"
        )
    }


@app.get("/health")
def health_check():

    return {
        "status": "healthy"
    }
