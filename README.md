# InsuraAI

AI-powered Health Insurance Premium Prediction System.

## Project Structure

- `ml/generate_dataset.py` - generates 15,000 synthetic records
- `ml/visualize.py` - EDA and visualizations
- `ml/train_model.py` - trains and compares regression models and saves the best pipeline
- `backend/app/main.py` - FastAPI application
- `backend/app/api/routes/prediction.py` - prediction API
- `backend/app/schemas/prediction.py` - request/response validation
- `backend/app/services/prediction_service.py` - loads and runs the model
- `frontend/` - React + Vite + Tailwind professional dashboard

## 1. Generate and train

From the project root:

```bash
pip install -r backend/requirements.txt
python ml/generate_dataset.py
python ml/train_model.py
```

This creates `models/insurance_premium_model.pkl`.

## 2. Start FastAPI

```bash
uvicorn backend.app.main:app --reload
```

Swagger: http://127.0.0.1:8000/docs

## 3. Start frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend: http://localhost:5173

## Important

The dataset is synthetic and intended for ML/software demonstration. It is not suitable for real insurance underwriting or medical decision-making.
