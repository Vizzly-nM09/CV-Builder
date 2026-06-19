import "./App.css";
import { useCVData } from "./hooks/useCVData";
import TemplateATS from "./components/templates/TemplateATS";
import TemplateModern from "./components/templates/TemplateModern";
import TemplateMinimal from "./components/templates/TemplateMinimal";
import TemplateSelector from "./components/TemplateSelector";
import PersonalInfoForm from "./components/forms/PersonalInfoForm";
import ExperienceForm from "./components/forms/ExperienceForm";

function App() {
  const {
    cvData,
    selectedTemplate,
    setSelectedTemplate,
    handleChange,
    handleExpChange,
    addExperience,
    removeExperience,
    handleEduChange,
    addEducation,
    removeEducation,
    resetAll,
  } = useCVData();

  function renderTemplate() {
    switch (selectedTemplate) {
      case "ats":
        return <TemplateATS cvData={cvData} />;
      case "minimal":
        return <TemplateMinimal cvData={cvData} />;
      case "modern":
      default:
        return <TemplateModern cvData={cvData} />;
    }
  }

  return (
    <div className="app-container">
      <main className="builder-layout">
        <section className="form-section">
          <PersonalInfoForm cvData={cvData} handleChange={handleChange} />
          <ExperienceForm
            experiences={cvData.experiences}
            handleExpChange={handleExpChange}
            addExperience={addExperience}
            removeExperience={removeExperience}
          />
          <h2>Education</h2>
          {cvData.educations.map((edu, index) => (
            <div key={edu.id} className="entry-block">
              {cvData.educations.length > 1 && (
                <button
                  className="remove-btn"
                  onClick={() => removeEducation(index)}
                >
                  ✕ Remove
                </button>
              )}
              <label>School / University</label>
              <input
                name="school"
                value={edu.school}
                onChange={(e) => handleEduChange(index, e)}
                placeholder="e.g. Universitas Internasional Batam"
              />
              <label>Degree</label>
              <input
                name="degree"
                value={edu.degree}
                onChange={(e) => handleEduChange(index, e)}
                placeholder="e.g. S1 Informatika"
              />
              <label>Year</label>
              <input
                name="eduYear"
                value={edu.eduYear}
                onChange={(e) => handleEduChange(index, e)}
                placeholder="e.g. 2021 - 2025"
              />
            </div>
          ))}
          <button className="add-btn" onClick={addEducation}>
            + Add Education
          </button>
          <hr />

          <h2>Skills</h2>
          <label>Skills (separate with comma)</label>
          <input
            name="skills"
            value={cvData.skills}
            onChange={handleChange}
            placeholder="e.g. React, CSS, Figma"
          />

          <hr />
          <button className="clear-btn" onClick={resetAll}>
            Clear All & Reset
          </button>
        </section>

        <section className="preview-section">
          <div className="preview-controls">
            <span className="preview-label-text">TEMPLATE SELECTOR</span>
            <button onClick={() => window.print()} className="download-btn">
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
