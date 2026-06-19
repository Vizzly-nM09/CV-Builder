import { useCVContext } from "../../context/CVContext.jsx";

function SkillsForm() {
  const { cvData, handleChange } = useCVContext();

  return (
    <div>
      <h2>Skills</h2>
      <label>Skills (separate with comma)</label>
      <input
        name="skills"
        value={cvData.skills}
        onChange={handleChange}
        placeholder="e.g. React, CSS, Figma"
      />
      <hr />
    </div>
  );
}

export default SkillsForm;
