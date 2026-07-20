import { useCVContext } from "../../context/CVContext.jsx";

function ExperienceForm() {
  const {
    cvData,
    handleExpChange,
    removeExperience,
    addExperience,
    moveExperienceUp,
    moveExperienceDown,
    errors,
  } = useCVContext();

  return (
    <div>
      <h2>Work Experience</h2>

      {/* Loop di DALAM component — bukan dari App.jsx */}
      {cvData.experiences.map((exp, index) => (
        <div key={exp.id} className="entry-block">
          {cvData.experiences.length > 1 && (
            <div className="entry-actions">
              <button
                className="btn remove-btn"
                onClick={() => removeExperience(index)}
              >
                ✕ Remove
              </button>
              <div className="move-buttons">
                <button
                  className="btn move-btn"
                  onClick={() => moveExperienceUp(index)}
                  disabled={index === 0}
                >
                  ↑
                </button>
                <button
                  className="btn move-btn"
                  onClick={() => moveExperienceDown(index)}
                  disabled={index === cvData.experiences.length - 1}
                >
                  ↓
                </button>
              </div>
            </div>
          )}

          <label>Job Title</label>
          <input
            name="jobTitle"
            value={exp.jobTitle}
            onChange={(e) => handleExpChange(index, e)}
            placeholder="e.g. Frontend Developer"
            className={errors.jobTitle && index === 0 ? "input-error" : ""}
          />
          {errors.jobTitle && index === 0 && (
            <span className="error-msg">{errors.jobTitle}</span>
          )}

          <label>Company</label>
          <input
            name="company"
            value={exp.company}
            onChange={(e) => handleExpChange(index, e)}
            placeholder="e.g. UIB"
            className={errors.company && index === 0 ? "input-error" : ""}
          />
          {errors.company && index === 0 && (
            <span className="error-msg">{errors.company}</span>
          )}

          <label>Year</label>
          <input
            name="workYear"
            value={exp.workYear}
            onChange={(e) => handleExpChange(index, e)}
            placeholder="e.g. 2023 - Present"
          />
        </div>
      ))}

      <button className="btn add-btn" onClick={addExperience}>
        + Add Experience
      </button>
      <hr />
    </div>
  );
}

export default ExperienceForm;
