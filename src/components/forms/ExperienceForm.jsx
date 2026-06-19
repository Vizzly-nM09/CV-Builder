import { useCVContext } from "../../context/CVContext.jsx";

function ExperienceForm() {
  // Ambil semua yang dibutuhkan dari context
  const { cvData, handleExpChange, removeExperience, addExperience } =
    useCVContext();

  return (
    <div>
      <h2>Work Experience</h2>

      {/* Loop di DALAM component — bukan dari App.jsx */}
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
    </div>
  );
}

export default ExperienceForm;
