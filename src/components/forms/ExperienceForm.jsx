function ExperienceForm({
  experiences,
  handleExpChange,
  addExperience,
  removeExperience,
}) {
  return (
    <>
      <h2>Work Experience</h2>
      {experiences.map((exp, index) => (
        <div key={exp.id} className="entry-block">
          {experiences.length > 1 && (
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
            placeholder="Your company"
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
    </>
  );
}

export default ExperienceForm;
