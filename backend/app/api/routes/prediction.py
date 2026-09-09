from fastapi import APIRouter

from app.schemas.prediction import (
    PredictionRequest,
    PredictionResponse
)

from app.services.prediction_service import (
    predict_premium
)


router = APIRouter(
    prefix="/api/v1",
    tags=["Prediction"]
)


@router.post(
    "/predict",
    response_model=PredictionResponse
)
def predict(
    request: PredictionRequest
):

    result = predict_premium(
        request.model_dump()
    )

    return result