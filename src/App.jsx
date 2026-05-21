import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [cvData, setCvData] = useState(() => {
    const saved = localStorage.getItem("cvData");
    return saved
      ? JSON.parse(saved)
      : {
          // Personal info — same as before
          name: "",
          email: "",
          phone: "",
          summary: "",
          skills: "",

          // 💡 NEW: arrays of objects instead of flat fields
          experiences: [{ jobTitle: "", company: "", workYear: "" }],
          educations: [{ degree: "", school: "", eduYear: "" }],
        };
  });

  useEffect(() => {
    localStorage.setItem("cvData", JSON.stringify(cvData));
  }, [cvData]);

  // Same as before — handles personal info fields
  function handleChange(e) {
    setCvData({ ...cvData, [e.target.name]: e.target.value });
  }

  // 💡 NEW: handles changes inside an experience entry
  // index = which job (0, 1, 2...)
  // e.target.name = which field (jobTitle, company, workYear)
  function handleExpChange(index, e) {
    const updated = [...cvData.experiences]; // copy the array
    updated[index][e.target.name] = e.target.value; // update that one field
    setCvData({ ...cvData, experiences: updated });
  }

  // 💡 NEW: adds a new empty experience entry
  function addExperience() {
    setCvData({
      ...cvData,
      experiences: [
        ...cvData.experiences,
        { jobTitle: "", company: "", workYear: "" },
      ],
    });
  }

  // 💡 NEW: removes experience at a specific index
  // filter() keeps everything EXCEPT the one at this index
  function removeExperience(index) {
    const updated = cvData.experiences.filter((_, i) => i !== index);
    setCvData({ ...cvData, experiences: updated });
  }

  // 💡 Same pattern repeated for education
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

  return (
    <div className="app-container">
      <header>
        <h1>My Awesome CV Builder</h1>
      </header>

      <main className="builder-layout">
        {/* ===== LEFT: FORM ===== */}
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

          {/* 💡 NEW: loop through experiences array
              each exp = one job entry
              index = its position (0, 1, 2...) */}
          <h2>Work Experience</h2>
          {cvData.experiences.map((exp, index) => (
            <div key={index} className="entry-block">
              {/* Only show Remove button if there's more than 1 entry */}
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

          {/* Add button appends a new empty entry */}
          <button className="add-btn" onClick={addExperience}>
            + Add Experience
          </button>
          <hr />

          {/* 💡 Same pattern for education */}
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
          <button
            className="clear-btn"
            onClick={() => {
              localStorage.removeItem("cvData");
              setCvData({
                name: "",
                email: "",
                phone: "",
                summary: "",
                skills: "",
                experiences: [{ jobTitle: "", company: "", workYear: "" }],
                educations: [{ degree: "", school: "", eduYear: "" }],
              });
            }}
          >
            Clear All & Reset
          </button>
        </section>

        {/* ===== RIGHT: PREVIEW ===== */}
        <section className="preview-section">
          <div className="preview-controls">
            <span className="preview-label-text">LIVE PREVIEW</span>
            <button onClick={() => window.print()} className="download-btn">
              Download PDF
            </button>
          </div>

          <div className="cv-document">
            <div className="cv-top">
              <h3>{cvData.name || "Your Name"}</h3>
              {/* Show first job title in header */}
              <p>{cvData.experiences[0]?.jobTitle || "Your Job Title"}</p>
              <div className="cv-contacts">
                {cvData.email && <span>✉ {cvData.email}</span>}
                {cvData.phone && <span>📞 {cvData.phone}</span>}
              </div>
            </div>

            {cvData.summary && (
              <div className="cv-section">
                <h4>About Me</h4>
                <p>{cvData.summary}</p>
              </div>
            )}

            {/* 💡 NEW: loop through ALL experiences for preview */}
            {cvData.experiences.some((exp) => exp.company) && (
              <div className="cv-section">
                <h4>Work Experience</h4>
                {cvData.experiences.map(
                  (exp, index) =>
                    exp.company && (
                      <div
                        key={index}
                        className="cv-entry"
                        style={{ marginBottom: "10px" }}
                      >
                        <div className="cv-entry-left">
                          <p className="cv-role">{exp.jobTitle}</p>
                          <p className="cv-sub">{exp.company}</p>
                        </div>
                        <span className="cv-year-badge">{exp.workYear}</span>
                      </div>
                    ),
                )}
              </div>
            )}

            {/* 💡 Same for education */}
            {cvData.educations.some((edu) => edu.school) && (
              <div className="cv-section">
                <h4>Education</h4>
                {cvData.educations.map(
                  (edu, index) =>
                    edu.school && (
                      <div
                        key={index}
                        className="cv-entry"
                        style={{ marginBottom: "10px" }}
                      >
                        <div className="cv-entry-left">
                          <p className="cv-role">{edu.degree}</p>
                          <p className="cv-sub">{edu.school}</p>
                        </div>
                        <span className="cv-year-badge">{edu.eduYear}</span>
                      </div>
                    ),
                )}
              </div>
            )}

            {cvData.skills && (
              <div className="cv-section">
                <h4>Skills</h4>
                <div className="skills-list">
                  {cvData.skills.split(",").map((skill, index) => (
                    <span key={index} className="skill-tag">
                      {skill.trim()}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
