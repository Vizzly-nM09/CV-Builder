import { memo } from "react";

function TemplateSelector({ selectedTemplate, onTemplateChange }) {
  return (
    <div className="template-selector">
      <label className="template-selector">
        <input
          type="radio"
          name="template"
          value="ats"
          checked={selectedTemplate === "ats"}
          onChange={(e) => onTemplateChange(e.target.value)}
        />
        <span>ATS (Plain)</span>
      </label>

      <label className="selector-label">
        <input
          type="radio"
          name="template"
          value="modern"
          checked={selectedTemplate === "modern"}
          onChange={(e) => onTemplateChange(e.target.value)}
        />
        <span>Modern (Dark)</span>
      </label>

      <label className="selector-label">
        <input
          type="radio"
          name="template"
          value="minimal"
          checked={selectedTemplate === "minimal"}
          onChange={(e) => onTemplateChange(e.target.value)}
        />
        <span>Minimal (Sidebar)</span>
      </label>
    </div>
  );
}

export default memo(TemplateSelector);
