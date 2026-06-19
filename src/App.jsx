import "./App.css";
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
  const { selectedTemplate, setSelectedTemplate, validate, resetAll } =
    useCVContext();


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

  return (
    <div className="app-container">
      <main className="builder-layout">
        <section className="form-section">
          <PersonalInfoForm />
          <ExperienceForm />
          <EducationForm />
          <SkillsForm />
          <button className="clear-btn" onClick={resetAll}>
            Clear All & Reset
          </button>
        </section>

        <section className="preview-section">
          <div className="preview-controls">
            <span className="preview-label-text">TEMPLATE SELECTOR</span>
            <button
              onClick={() => {
                const isValid = validate();
                if (isValid) window.print();
              }}
              className="download-btn"
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
