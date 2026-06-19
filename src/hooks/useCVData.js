import { useState, useEffect } from "react";

export function useCVData() {
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
          experiences: [
            {
              id: crypto.randomUUID(),
              jobTitle: "",
              company: "",
              workYear: "",
            },
          ],
          educations: [
            { id: crypto.randomUUID(), degree: "", school: "", eduYear: "" },
          ],
        };
  });

  const [selectedTemplate, setSelectedTemplate] = useState(() => {
    const saved = localStorage.getItem("selected template");
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
        { id: crypto.randomUUID(), jobTitle: "", company: "", workYear: "" },
      ],
    });
  }

  function removeExperience(index) {
    const updated = cvData.experiences.filter((_, i) => i !== index);
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
        { id: crypto.randomUUID(), degree: "", school: "", eduYear: "" },
      ],
    });
  }

  function removeEducation(index) {
    const updated = cvData.educations.filter((_, i) => i !== index);
    setCvData({ ...cvData, educations: updated });
  }

  function resetAll() {
    localStorage.removeItem("cvData");
    localStorage.removeItem("selectedTemplate");
    setCvData({
      name: "",
      email: "",
      phone: "",
      summary: "",
      skills: "",
      experiences: [
        { id: crypto.randomUUID(), jobTitle: "", company: "", workYear: "" },
      ],
      educations: [
        { id: crypto.randomUUID(), degree: "", school: "", eduYear: "" },
      ],
    });
    setSelectedTemplate("modern");
  }

  return {
    cvData,
    selectedTemplate,
    setSelectedTemplate,
    handleChange,
    handleExpChange,
    addExperience,
    removeExperience,
    handleEduChange,
    addEducation,
    removeEducation,
    resetAll,
  };
}
