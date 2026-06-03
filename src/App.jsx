import "./App.css";
import { useCVData } from "./hooks/useCVData";
import TemplateATS from "./components/templates/TemplateATS";
import TemplateModern from "./components/templates/TemplateModern";
import TemplateMinimal from "./components/templates/TemplateMinimal";
import TemplateSelector from "./components/TemplateSelector";

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
      <header>
        <h1>My Awesome CV Builder</h1>
      </header>

      <main className="builder-layout">
        <section className="form-section">
          <h2>Personal Info</h2>
          <label>Full name</label>
          <input
            name="name"
            value={cvData.name}
            onChange={handleChange}
            placeholder="Your full name"
          />
          <label>Email</label>
          <input
            name="email"
            value={cvData.email}
            onChange={handleChange}
            placeholder="e.g. your@email.com"
          />
          <label>Phone</label>
          <input
            name="phone"
            value={cvData.phone}
            onChange={handleChange}
            placeholder="e.g. 08123456789"
          />
          <label>Summary</label>
          <textarea
            name="summary"
            value={cvData.summary}
            onChange={handleChange}
            placeholder="Tell us about yourself..."
          />
          <hr />

          <h2>Work Experience</h2>
          {cvData.experiences.map((exp, index) => (
            <div key={index} className="entry-block">
              {cvData.experiences.length > 1 && (
                <button
                  className="remove-btn"
                  onClick={() => removeExperience(index)}
                >
                  ✕ Remove
                </button>
              )}
              <label>Job Title</label>
              <input
                name="jobTitle"
                value={exp.jobTitle}
                onChange={(e) => handleExpChange(index, e)}
                placeholder="e.g. Frontend Developer"
              />
              <label>Company</label>
              <input
                name="company"
                value={exp.company}
                onChange={(e) => handleExpChange(index, e)}
                placeholder="e.g. UIB"
              />
              <label>Year</label>
              <input
                name="workYear"
                value={exp.workYear}
                onChange={(e) => handleExpChange(index, e)}
                placeholder="e.g. 2023 - Present"
              />
            </div>
          ))}
          <button className="add-btn" onClick={addExperience}>
            + Add Experience
          </button>
          <hr />

          <h2>Education</h2>
          {cvData.educations.map((edu, index) => (
            <div key={index} className="entry-block">
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
