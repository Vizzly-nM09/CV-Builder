import { useState, useEffect } from "react"; // ← add useEffect here
import "./App.css";

function App() {
  // ← CHANGED: instead of empty strings, we check localStorage first
  // JSON.parse converts the saved text back into a JavaScript object
  // If nothing is saved yet, use the empty default object
  const [cvData, setCvData] = useState(() => {
    const saved = localStorage.getItem("cvData");
    return saved
      ? JSON.parse(saved)
      : {
          name: "",
          email: "",
          phone: "",
          summary: "",
          jobTitle: "",
          company: "",
          workYear: "",
          school: "",
          degree: "",
          eduYear: "",
          skills: "",
        };
  });

  // ← NEW: useEffect watches cvData for any change
  // Every time cvData changes, it saves to localStorage automatically
  // JSON.stringify converts the object into text for storage
  useEffect(() => {
    localStorage.setItem("cvData", JSON.stringify(cvData));
  }, [cvData]); // ← [cvData] means "run this effect when cvData changes"

  function handleChange(e) {
    setCvData({ ...cvData, [e.target.name]: e.target.value });
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

          <h2>Work Experience</h2>
          <label>Job Title</label>
          <input
            name="jobTitle"
            value={cvData.jobTitle}
            onChange={handleChange}
            placeholder="e.g. Frontend Developer"
          />
          <label>Company</label>
          <input
            name="company"
            value={cvData.company}
            onChange={handleChange}
            placeholder="e.g. UIB"
          />
          <label>Year</label>
          <input
            name="workYear"
            value={cvData.workYear}
            onChange={handleChange}
            placeholder="e.g. 2023 - Present"
          />
          <hr />

          <h2>Education</h2>
          <label>School / University</label>
          <input
            name="school"
            value={cvData.school}
            onChange={handleChange}
            placeholder="e.g. Universitas Internasional Batam"
          />
          <label>Degree</label>
          <input
            name="degree"
            value={cvData.degree}
            onChange={handleChange}
            placeholder="e.g. S1 Informatika"
          />
          <label>Year</label>
          <input
            name="eduYear"
            value={cvData.eduYear}
            onChange={handleChange}
            placeholder="e.g. 2021 - 2025"
          />
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

          {/* ← NEW: Clear button so user can reset the form */}
          <button
            className="clear-btn"
            onClick={() => {
              localStorage.removeItem("cvData");
              setCvData({
                name: "",
                email: "",
                phone: "",
                summary: "",
                jobTitle: "",
                company: "",
                workYear: "",
                school: "",
                degree: "",
                eduYear: "",
                skills: "",
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
              <p>{cvData.jobTitle || "Your Job Title"}</p>
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

            {cvData.company && (
              <div className="cv-section">
                <h4>Work Experience</h4>
                <div className="cv-entry">
                  <div className="cv-entry-left">
                    <p className="cv-role">{cvData.jobTitle}</p>
                    <p className="cv-sub">{cvData.company}</p>
                  </div>
                  <span className="cv-year-badge">{cvData.workYear}</span>
                </div>
              </div>
            )}

            {cvData.school && (
              <div className="cv-section">
                <h4>Education</h4>
                <div className="cv-entry">
                  <div className="cv-entry-left">
                    <p className="cv-role">{cvData.degree}</p>
                    <p className="cv-sub">{cvData.school}</p>
                  </div>
                  <span className="cv-year-badge">{cvData.eduYear}</span>
                </div>
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
