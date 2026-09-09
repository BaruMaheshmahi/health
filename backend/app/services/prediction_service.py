import joblib
from pathlib import Path
import pandas as pd

ROOT_DIR = Path(__file__).resolve().parents[3]
MODEL_PATH = ROOT_DIR / "models" / "insurance_premium_model.pkl"

if not MODEL_PATH.exists():
    raise FileNotFoundError(
        f"Model not found at {MODEL_PATH}. "
        "Run: python ml/generate_dataset.py && python ml/train_model.py"
    )

model = joblib.load(MODEL_PATH)

def predict_premium(data: dict):
    input_df = pd.DataFrame([data])
    prediction = max(float(model.predict(input_df)[0]), 0)

    if prediction < 20000:
        risk = "Low"
    elif prediction < 40000:
        risk = "Moderate"
    elif prediction < 65000:
        risk = "High"
    else:
        risk = "Very High"

    return {
        "predicted_premium": round(prediction, 2),
        "risk_level": risk,
    }
