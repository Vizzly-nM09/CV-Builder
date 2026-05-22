import { useState, useEffect } from "react";
import "./App.css";
import TemplateATS from "./components/templates/TemplateATS";
import TemplateModern from "./components/templates/TemplateModern";
import TemplateMinimal from "./components/templates/TemplateMinimal";
import TemplateSelector from "./components/TemplateSelector";

function App() {
  const [cvData, setCvData] = useState(() => {
    const saved = localStorage.getItem("cvData");
    return saved
      ? JSON.parse(saved)
      : {
          name: "",
          email: "",
          phone: "",
          summary: "",
          skills: "",
          experiences: [{ jobTitle: "", company: "", workYear: "" }],
          educations: [{ degree: "", school: "", eduYear: "" }],
        };
  });

  const [selectedTemplate, setSeletcedTemplate] = useState(() => {
    const saved = localStorage.getItem("selectedTemplate");
    return saved || "modern";
  });

  useEffect(() => {
    localStorage.setItem("cvData", JSON.stringify(cvData));
  }, [cvData]);

  useEffect(() => {
    localStorage.setItem("selectedTemplate", selectedTemplate);
  }, [selectedTemplate]);

  function handleChange(e) {
    setCvData({ ...cvData, [e.target.name]: e.target.value });
  }

  function handleExpChange(index, e) {
    const updated = [...cvData.experiences];
    updated[index][e.target.name] = e.target.value;
    setCvData({ ...cvData, experiences: updated });
  }

  function addExperience() {
    setCvData({
      ...cvData,
      experiences: [
        ...cvData.experiences,
        { jobTitle: "", company: "", workYear: "" },
      ],
    });
  }

  function removeExperience(index) {
    const updated = cvData.experience.filter((_, i) => i !== index);
    setCvData({ ...cvData, experiences: updated });
  }

  function handleEduChange(index, e) {
    const updated = [...cvData.educations];
    updated[index][e.target.name] = e.target.value;
    setCvData({ ...cvData, educations: updated });
  }

  function addEducation() {
    setCvData({
      ...cvData,
      educations: [
        ...cvData.educations,
        { degree: "", school: "", eduYear: "" },
      ],
    });
  }

  function removeEducation(index) {
    const updated = cvData.educations.filter((_, i) => i !== index);
    setCvData({ ...cvData, educations: updated });
  }

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
      <header>My CV</header>

      <main className="builder-layout">
        <section className="form-section">
          <h2>Biodata</h2>
          <label>Full Name</label>
          <input
            name="name"
            value={cvData.name}
            onChange={handleChange}
            placeholder="e.g. John Doe"
          />
          <label>Email</label>
          <input
            name="email"
            value={cvData.email}
            onChange={handleChange}
            placeholder="e.g. john.doe@example.com"
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
            placeholder="Tell us about yourself"
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
                  X Remove
                </button>
              )}

              <label>Job Title</label>
              <input
                name="jobTitle"
                value={exp.jobTitle}
                onChange={(e) => handleExpChange(index, e)}
                placeholder="e.g. Software Engineer"
              />
              <label>Company</label>
              <input
                name="company"
                value={exp.company}
                onChange={(e) => handleExpChange(index, e)}
                placeholder="e.g. Tech Corp"
              />
              <label>Years</label>
              <input
                name="workYear"
                value={exp.workYear}
                onChange={(e) => handleExpChange(index, e)}
                placeholder="e.g. 2020 - 2023"
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
                  X Remove
                </button>
              )}

              <label>School/University</label>
              <input
                name="school"
                value={edu.school}
                onChange={(e) => handleEduChange(index, e)}
                placeholder="e.g. Your University/School"
              />
              <label>Degree</label>
              <input
                name="degree"
                value={edu.degree}
                onChange={(e) => handleEduChange(index, e)}
                placeholder="e.g. Bachelor of Science in Computer Science"
              />
              <label>Years</label>
              <input
                name="eduYear"
                value={edu.eduYear}
                onChange={(e) => handleEduChange(index, e)}
                placeholder="e.g. 2016 - 2020"
              />
            </div>
          ))}
          <button className="add-btn" onClick={addEducation}>
            + Add Education
          </button>
          <hr />

          <h2>Skills</h2>
          <label>List your skills separated by commas</label>
          <input
            name="skills"
            value={cvData.skills}
            onChange={handleChange}
            placeholder="e.g. Figma, Excel, JavaScript"
          />

          <hr />
          <button
            className="clear-btn"
            onClick={() => {
              localStorage.removeItem("cvData");
              localStorage.removeItem("selectedTemplate");
              setCvData({
                name: "",
                email: "",
                phone: "",
                summary: "",
                experiences: [{ jobTitle: "", company: "", workYear: "" }],
                educations: [{ school: "", degree: "", eduYear: "" }],
                skills: "",
              });
            }}
          >
            Clear All & Reset
          </button>
        </section>

        <section className="preview-section">
          <div className="preview-controls">
            <span className="preview-label-text">Template Selector</span>
            <button onClick={() => window.print()} className="download-btn">
              Download PDF
            </button>
          </div>

          <TemplateSelector
            selectedTemplate={selectedTemplate}
            onTemplateChange={setSeletcedTemplate}
          />
          <div className="cv-document">{renderTemplate()}</div>
        </section>
      </main>
    </div>
  );
}

export default App;
