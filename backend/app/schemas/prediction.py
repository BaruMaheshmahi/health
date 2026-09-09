from pydantic import BaseModel, Field

class PredictionRequest(BaseModel):
    age: int = Field(ge=18, le=100)
    gender: str
    bmi: float = Field(ge=10, le=60)
    smoking_status: str
    alcohol_consumption: str
    exercise_frequency: int = Field(ge=0, le=7)
    chronic_conditions: int = Field(ge=0, le=10)
    previous_claims: int = Field(ge=0, le=20)
    annual_income: float = Field(gt=0)
    dependents: int = Field(ge=0, le=20)
    city_tier: str
    hospitalization_history: int = Field(ge=0, le=1)
    family_medical_history: int = Field(ge=0, le=1)
    policy_duration: int = Field(ge=1, le=50)
    coverage_amount: float = Field(gt=0)

class PredictionResponse(BaseModel):
    predicted_premium: float
    risk_level: str
