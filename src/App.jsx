import "./App.css";
import { useState } from "react";
import { useCVContext } from "./context/CVContext.jsx";
import TemplateATS from "./components/templates/TemplateATS";
import TemplateModern from "./components/templates/TemplateModern";
import TemplateMinimal from "./components/templates/TemplateMinimal";
import TemplateSelector from "./components/TemplateSelector";
import PersonalInfoForm from "./components/forms/PersonalInfoForm";
import ExperienceForm from "./components/forms/ExperienceForm";
import EducationForm from "./components/forms/EducationForm";
import SkillsForm from "./components/forms/SkillsForm";

function App() {
  const { selectedTemplate, setSelectedTemplate, validateStep, resetAll } =
    useCVContext();

  const [step, setStep] = useState(1);

  const stepLabels = ["Personal Info", "Experience", "Education", "Skills"];

  function renderTemplate() {
    switch (selectedTemplate) {
      case "ats":
        return <TemplateATS />;
      case "minimal":
        return <TemplateMinimal />;
      case "modern":
      default:
        return <TemplateModern />;
    }
  }

  function renderStep() {
    switch (step) {
      case 1:
        return <PersonalInfoForm />;
      case 2:
        return <ExperienceForm />;
      case 3:
        return <EducationForm />;
      case 4:
        return <SkillsForm />;
      default:
        return <PersonalInfoForm />;
    }
  }

  return (
    <div className="app-container">
      <main className="builder-layout">
        <section className="form-section">
          {/* Progress Bar */}
          <div className="wizard-progress">
            <div className="wizard-step-info">
              Step {step} of {stepLabels.length}:{" "}
              <strong>{stepLabels[step - 1]}</strong>
            </div>
            <div className="wizard-bar">
              <div
                className="wizard-bar-fill"
                style={{ width: `${(step / stepLabels.length) * 100}%` }}
              ></div>
            </div>
          </div>
          {/* Active Form */}
          {renderStep()}
          {/* Navigation Buttons */}
          <div className="wizard-nav">
            {step > 1 && (
              <button
                className="btn wizard-btn"
                onClick={() => setStep(step - 1)}
              >
                ← Back
              </button>
            )}
            {step < stepLabels.length ? (
              <button
                className="btn wizard-btn wizard-btn-next"
                onClick={() => {
                  const isValid = validateStep(step);
                  if (!isValid) return;

                  setStep(step + 1);
                }}
              >
                Next →
              </button>
            ) : (
              <button className="btn clear-btn" onClick={resetAll}>
                Clear All & Reset
              </button>
            )}
          </div>
        </section>

        <section className="preview-section">
          <div className="preview-controls">
            <span className="preview-label-text">TEMPLATE SELECTOR</span>
            <button
              onClick={() => {
                const isValid = validateStep(1);
                if (isValid) window.print();
              }}
              className="btn download-btn"
            >
              Download PDF
            </button>
          </div>

          <TemplateSelector
            selectedTemplate={selectedTemplate}
            onTemplateChange={setSelectedTemplate}
          />

          <div className="cv-document">{renderTemplate()}</div>
        </section>
      </main>
    </div>
  );
}

export default App;
