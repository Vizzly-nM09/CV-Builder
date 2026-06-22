import { useCVContext } from "../../context/CVContext.jsx";

function EducationForm() {
  const {
    cvData,
    handleEduChange,
    addEducation,
    removeEducation,
    moveEducationUp,
    moveEducationDown,
  } = useCVContext();

  return (
    <div>
      <h2>Education</h2>

      {cvData.educations.map((edu, index) => (
        <div key={index} className="entry-block">
          {cvData.educations.length > 1 && (
            <div className="entry-actions">
              <button
                className="btn remove-btn"
                onClick={() => removeEducation(index)}
              >
                ✕ Remove
              </button>
              <div className="move-buttons">
                <button
                  className="btn move-btn"
                  onClick={() => moveEducationUp(index)}
                  disabled={index === 0}
                >
                  ↑
                </button>
                <button
                  className="btn move-btn"
                  onClick={() => moveEducationDown(index)}
                  disabled={index === cvData.educations.length - 1}
                >
                  ↓
                </button>
              </div>
            </div>
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
      <button className="btn add-btn" onClick={addEducation}>
        + Add Education
      </button>
      <hr />
    </div>
  );
}
export default EducationForm;
