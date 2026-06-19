import { useCVContext } from "../../context/CVContext.jsx";

function EducationForm() {
  const { cvData, handleEduChange, addEducation, removeEducation } =
    useCVContext();

  return (
    <div>
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
    </div>
  );
}
export default EducationForm;
