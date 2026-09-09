import { useState } from "react";

import {
  ArrowLeft,
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  RotateCcw,
} from "lucide-react";

import { predictPremium } from "../services/api";

const steps = [
  "Personal",
  "Health",
  "Lifestyle",
  "Policy",
];

const initialForm = {
  age: 30,
  gender: "Male",
  bmi: 25,
  smoking_status: "Non-Smoker",
  alcohol_consumption: "None",
  exercise_frequency: 3,
  chronic_conditions: 0,
  previous_claims: 0,
  annual_income: 600000,
  dependents: 0,
  city_tier: "Tier 2",
  hospitalization_history: 0,
  family_medical_history: 0,
  policy_duration: 5,
  coverage_amount: 1000000,
};

export default function Prediction() {
  const [step, setStep] = useState(0);

  const [form, setForm] =
    useState(initialForm);

  const [result, setResult] =
    useState(null);

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const updateField = (
    field,
    value
  ) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const nextStep = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    }
  };

  const previousStep = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const handlePrediction = async () => {
    setLoading(true);
    setError("");

    try {
      const response =
        await predictPremium({
          ...form,

          age: Number(form.age),
          bmi: Number(form.bmi),

          exercise_frequency:
            Number(form.exercise_frequency),

          chronic_conditions:
            Number(form.chronic_conditions),

          previous_claims:
            Number(form.previous_claims),

          annual_income:
            Number(form.annual_income),

          dependents:
            Number(form.dependents),

          hospitalization_history:
            Number(form.hospitalization_history),

          family_medical_history:
            Number(form.family_medical_history),

          policy_duration:
            Number(form.policy_duration),

          coverage_amount:
            Number(form.coverage_amount),
        });

      setResult(response);
    } catch (err) {
      console.error(err);

      setError(
        "Unable to connect to the prediction service. Make sure FastAPI is running."
      );
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setForm(initialForm);
    setStep(0);
    setResult(null);
    setError("");
  };

  if (result) {
    return (
      <PredictionResult
        result={result}
        reset={reset}
      />
    );
  }

  return (
    <div className="mx-auto max-w-5xl">

      <div className="mb-8">

        <div
          className="
            mb-3 flex items-center gap-2
            text-sm text-blue-400
          "
        >
          <BrainCircuit size={18} />
          AI Premium Analysis
        </div>

        <h1
          className="
            text-3xl font-bold
            tracking-tight
          "
        >
          Create a prediction
        </h1>

        <p
          className="
            mt-2 text-sm
            text-gray-500
          "
        >
          Provide the customer profile
          information below.
        </p>

      </div>

      {/* Progress */}
      <div
        className="
          mb-8 flex items-center
        "
      >
        {steps.map((item, index) => {
          const completed =
            index < step;

          const active =
            index === step;

          return (
            <div
              key={item}
              className="flex flex-1 items-center"
            >

              <div
                className="
                  flex items-center gap-2
                "
              >

                <div
                  className={`
                    flex h-9 w-9
                    items-center justify-center
                    rounded-full text-xs
                    font-semibold
                    ${
                      completed || active
                        ? "bg-blue-600 text-white"
                        : "bg-white/5 text-gray-500"
                    }
                  `}
                >
                  {completed ? (
                    <CheckCircle2 size={17} />
                  ) : (
                    index + 1
                  )}
                </div>

                <span
                  className={`
                    hidden text-sm
                    sm:block
                    ${
                      active
                        ? "text-white"
                        : "text-gray-600"
                    }
                  `}
                >
                  {item}
                </span>

              </div>

              {index !== steps.length - 1 && (
                <div
                  className="
                    mx-3 h-px flex-1
                    bg-white/10
                  "
                />
              )}

            </div>
          );
        })}
      </div>

      <div
        className="
          rounded-3xl
          border border-white/10
          bg-white/[0.025]
          p-5 sm:p-8
        "
      >

        {step === 0 && (
          <PersonalStep
            form={form}
            updateField={updateField}
          />
        )}

        {step === 1 && (
          <HealthStep
            form={form}
            updateField={updateField}
          />
        )}

        {step === 2 && (
          <LifestyleStep
            form={form}
            updateField={updateField}
          />
        )}

        {step === 3 && (
          <PolicyStep
            form={form}
            updateField={updateField}
          />
        )}

        {error && (
          <div
            className="
              mt-6 rounded-xl
              border border-red-500/20
              bg-red-500/10
              p-4 text-sm
              text-red-400
            "
          >
            {error}
          </div>
        )}

        <div
          className="
            mt-8 flex
            justify-between
            border-t border-white/10
            pt-6
          "
        >

          <button
            onClick={previousStep}
            disabled={step === 0}
            className="
              inline-flex items-center gap-2
              rounded-xl border
              border-white/10
              px-4 py-2.5
              text-sm text-gray-400
              transition
              hover:bg-white/5
              disabled:cursor-not-allowed
              disabled:opacity-30
            "
          >
            <ArrowLeft size={16} />
            Back
          </button>

          {step < steps.length - 1 ? (
            <button
              onClick={nextStep}
              className="
                inline-flex items-center gap-2
                rounded-xl bg-blue-600
                px-5 py-2.5
                text-sm font-semibold
                text-white
                transition
                hover:bg-blue-500
              "
            >
              Continue
              <ArrowRight size={16} />
            </button>
          ) : (
            <button
              onClick={handlePrediction}
              disabled={loading}
              className="
                inline-flex items-center gap-2
                rounded-xl bg-blue-600
                px-5 py-2.5
                text-sm font-semibold
                text-white
                shadow-lg
                shadow-blue-600/20
                transition
                hover:bg-blue-500
                disabled:cursor-not-allowed
                disabled:opacity-50
              "
            >
              {loading ? (
                <>
                  <span
                    className="
                      h-4 w-4
                      animate-spin
                      rounded-full
                      border-2
                      border-white/30
                      border-t-white
                    "
                  />

                  Analyzing...
                </>
              ) : (
                <>
                  <BrainCircuit size={17} />
                  Analyze Premium
                </>
              )}
            </button>
          )}

        </div>

      </div>

    </div>
  );
}


/* -----------------------------------
   REUSABLE INPUT
----------------------------------- */

function Input({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
}) {
  return (
    <div>

      <label
        className="
          mb-2 block
          text-sm font-medium
          text-gray-300
        "
      >
        {label}
      </label>

      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) =>
          onChange(e.target.value)
        }
        className="
          w-full rounded-xl
          border border-white/10
          bg-black/20
          px-4 py-3
          text-sm text-white
          outline-none
          transition
          placeholder:text-gray-700
          focus:border-blue-500/50
          focus:ring-2
          focus:ring-blue-500/10
        "
      />

    </div>
  );
}


/* -----------------------------------
   SELECT
----------------------------------- */

function Select({
  label,
  value,
  onChange,
  options,
}) {
  return (
    <div>

      <label
        className="
          mb-2 block
          text-sm font-medium
          text-gray-300
        "
      >
        {label}
      </label>

      <select
        value={value}
        onChange={(e) =>
          onChange(e.target.value)
        }
        className="
          w-full rounded-xl
          border border-white/10
          bg-[#10151f]
          px-4 py-3
          text-sm text-white
          outline-none
          focus:border-blue-500/50
        "
      >
        {options.map((option) => (
          <option
            key={option}
            value={option}
          >
            {option}
          </option>
        ))}
      </select>

    </div>
  );
}


/* -----------------------------------
   PERSONAL
----------------------------------- */

function PersonalStep({
  form,
  updateField,
}) {
  return (
    <div>

      <StepTitle
        title="Personal information"
        description="Basic customer information."
      />

      <div
        className="
          grid gap-5
          md:grid-cols-2
        "
      >

        <Input
          label="Age"
          type="number"
          value={form.age}
          onChange={(v) =>
            updateField("age", v)
          }
        />

        <Select
          label="Gender"
          value={form.gender}
          onChange={(v) =>
            updateField("gender", v)
          }
          options={[
            "Male",
            "Female",
          ]}
        />

        <Input
          label="Number of dependents"
          type="number"
          value={form.dependents}
          onChange={(v) =>
            updateField("dependents", v)
          }
        />

        <Select
          label="City tier"
          value={form.city_tier}
          onChange={(v) =>
            updateField("city_tier", v)
          }
          options={[
            "Tier 1",
            "Tier 2",
            "Tier 3",
          ]}
        />

      </div>

    </div>
  );
}


/* -----------------------------------
   HEALTH
----------------------------------- */

function HealthStep({
  form,
  updateField,
}) {
  return (
    <div>

      <StepTitle
        title="Health profile"
        description="Tell us about the customer's health."
      />

      <div
        className="
          grid gap-5
          md:grid-cols-2
        "
      >

        <Input
          label="BMI"
          type="number"
          value={form.bmi}
          onChange={(v) =>
            updateField("bmi", v)
          }
        />

        <Input
          label="Chronic conditions"
          type="number"
          value={form.chronic_conditions}
          onChange={(v) =>
            updateField(
              "chronic_conditions",
              v
            )
          }
        />

        <Select
          label="Hospitalization history"
          value={
            form.hospitalization_history
              ? "Yes"
              : "No"
          }
          onChange={(v) =>
            updateField(
              "hospitalization_history",
              v === "Yes" ? 1 : 0
            )
          }
          options={[
            "No",
            "Yes",
          ]}
        />

        <Select
          label="Family medical history"
          value={
            form.family_medical_history
              ? "Yes"
              : "No"
          }
          onChange={(v) =>
            updateField(
              "family_medical_history",
              v === "Yes" ? 1 : 0
            )
          }
          options={[
            "No",
            "Yes",
          ]}
        />

        <Input
          label="Previous insurance claims"
          type="number"
          value={form.previous_claims}
          onChange={(v) =>
            updateField(
              "previous_claims",
              v
            )
          }
        />

      </div>

    </div>
  );
}


/* -----------------------------------
   LIFESTYLE
----------------------------------- */

function LifestyleStep({
  form,
  updateField,
}) {
  return (
    <div>

      <StepTitle
        title="Lifestyle"
        description="Lifestyle factors can influence the predicted premium."
      />

      <div
        className="
          grid gap-5
          md:grid-cols-2
        "
      >

        <Select
          label="Smoking status"
          value={form.smoking_status}
          onChange={(v) =>
            updateField(
              "smoking_status",
              v
            )
          }
          options={[
            "Non-Smoker",
            "Former Smoker",
            "Smoker",
          ]}
        />

        <Select
          label="Alcohol consumption"
          value={
            form.alcohol_consumption
          }
          onChange={(v) =>
            updateField(
              "alcohol_consumption",
              v
            )
          }
          options={[
            "None",
            "Low",
            "Moderate",
            "High",
          ]}
        />

        <Input
          label="Exercise days per week"
          type="number"
          value={form.exercise_frequency}
          onChange={(v) =>
            updateField(
              "exercise_frequency",
              v
            )
          }
        />

        <Input
          label="Annual income (₹)"
          type="number"
          value={form.annual_income}
          onChange={(v) =>
            updateField(
              "annual_income",
              v
            )
          }
        />

      </div>

    </div>
  );
}


/* -----------------------------------
   POLICY
----------------------------------- */

function PolicyStep({
  form,
  updateField,
}) {
  return (
    <div>

      <StepTitle
        title="Policy information"
        description="Configure the customer's insurance policy."
      />

      <div
        className="
          grid gap-5
          md:grid-cols-2
        "
      >

        <Input
          label="Policy duration (years)"
          type="number"
          value={form.policy_duration}
          onChange={(v) =>
            updateField(
              "policy_duration",
              v
            )
          }
        />

        <Select
          label="Coverage amount"
          value={String(
            form.coverage_amount
          )}
          onChange={(v) =>
            updateField(
              "coverage_amount",
              Number(v)
            )
          }
          options={[
            "500000",
            "750000",
            "1000000",
            "1500000",
            "2000000",
            "3000000",
          ]}
        />

      </div>

      <div
        className="
          mt-6 rounded-xl
          border border-blue-500/10
          bg-blue-500/5
          p-4
        "
      >

        <p
          className="
            text-sm font-medium
            text-blue-400
          "
        >
          Ready for AI analysis
        </p>

        <p
          className="
            mt-1 text-xs
            leading-5 text-gray-500
          "
        >
          Our trained regression model will
          analyze the submitted profile and
          estimate the annual insurance premium.
        </p>

      </div>

    </div>
  );
}


/* -----------------------------------
   STEP TITLE
----------------------------------- */

function StepTitle({
  title,
  description,
}) {
  return (
    <div className="mb-7">

      <h2
        className="
          text-xl font-semibold
        "
      >
        {title}
      </h2>

      <p
        className="
          mt-1 text-sm
          text-gray-500
        "
      >
        {description}
      </p>

    </div>
  );
}


/* -----------------------------------
   RESULT
----------------------------------- */

function PredictionResult({
  result,
  reset,
}) {
  const riskStyles = {
    Low: {
      text: "text-green-400",
      bg: "bg-green-500/10",
      border: "border-green-500/20",
    },

    Moderate: {
      text: "text-yellow-400",
      bg: "bg-yellow-500/10",
      border: "border-yellow-500/20",
    },

    High: {
      text: "text-orange-400",
      bg: "bg-orange-500/10",
      border: "border-orange-500/20",
    },

    "Very High": {
      text: "text-red-400",
      bg: "bg-red-500/10",
      border: "border-red-500/20",
    },
  };

  const style =
    riskStyles[result.risk_level] ||
    riskStyles.Moderate;

  return (
    <div
      className="
        mx-auto max-w-4xl
      "
    >

      <div
        className="
          mb-8 text-center
        "
      >

        <div
          className="
            mx-auto mb-4
            flex h-14 w-14
            items-center justify-center
            rounded-2xl
            bg-blue-500/10
            text-blue-400
          "
        >
          <BrainCircuit size={28} />
        </div>

        <p
          className="
            text-sm text-blue-400
          "
        >
          AI Analysis Complete
        </p>

        <h1
          className="
            mt-2 text-3xl
            font-bold
          "
        >
          Premium Prediction
        </h1>

      </div>

      <div
        className="
          rounded-3xl
          border border-white/10
          bg-white/[0.025]
          p-6 text-center
          sm:p-10
        "
      >

        <p
          className="
            text-sm text-gray-500
          "
        >
          Estimated Annual Premium
        </p>

        <h2
          className="
            mt-3 text-5xl
            font-bold tracking-tight
            sm:text-6xl
          "
        >
          ₹
          {Number(
            result.predicted_premium
          ).toLocaleString("en-IN")}
        </h2>

        <div
          className="
            mt-6 flex
            justify-center
          "
        >

          <div
            className={`
              inline-flex
              items-center gap-2
              rounded-full
              border
              px-4 py-2
              text-sm font-semibold
              ${style.bg}
              ${style.border}
              ${style.text}
            `}
          >

            <span
              className="
                h-2 w-2
                rounded-full
                bg-current
              "
            />

            {result.risk_level} Risk

          </div>

        </div>

        <div
          className="
            mx-auto mt-10
            max-w-xl
            rounded-2xl
            border border-white/10
            bg-black/20
            p-5 text-left
          "
        >

          <p
            className="
              text-sm font-semibold
            "
          >
            Prediction summary
          </p>

          <p
            className="
              mt-2 text-sm
              leading-6 text-gray-500
            "
          >
            The model estimates an annual
            insurance premium of{" "}
            <span className="text-gray-300">
              ₹
              {Number(
                result.predicted_premium
              ).toLocaleString("en-IN")}
            </span>{" "}
            based on the submitted health,
            lifestyle and policy profile.
          </p>

        </div>

        <button
          onClick={reset}
          className="
            mt-8 inline-flex
            items-center gap-2
            rounded-xl
            border border-white/10
            px-5 py-3
            text-sm font-medium
            text-gray-300
            transition
            hover:bg-white/5
          "
        >
          <RotateCcw size={16} />
          New Prediction
        </button>

      </div>

    </div>
  );
}