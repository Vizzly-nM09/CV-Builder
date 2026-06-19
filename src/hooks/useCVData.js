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
          experiences: [{ jobTitle: "", company: "", workYear: "" }],
          educations: [{ degree: "", school: "", eduYear: "" }],
        };
  });

  const [selectedTemplate, setSelectedTemplate] = useState(() => {
    return localStorage.getItem("selectedTemplate") || "modern";
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    localStorage.setItem("cvData", JSON.stringify(cvData));
  }, [cvData]);

  useEffect(() => {
    localStorage.setItem("selectedTemplate", selectedTemplate);
  }, [selectedTemplate]);

  function handleChange(e) {
    const { name, value } = e.target;
    setCvData({ ...cvData, [name]: value });

    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
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
        { jobTitle: "", company: "", workYear: "" },
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
        { degree: "", school: "", eduYear: "" },
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
      experiences: [{ jobTitle: "", company: "", workYear: "" }],
      educations: [{ degree: "", school: "", eduYear: "" }],
    });
    setSelectedTemplate("modern");
    setErrors({});
  }

  function validate() {
    const newErrors = {};

    if (!cvData.name.trim()) newErrors.name = "Full name is required";

    if (!cvData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cvData.email))
      newErrors.email = "Email format is invalid";

    if (!cvData.phone.trim()) newErrors.phone = "Phone number is required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }

  return {
    cvData,
    selectedTemplate,
    setSelectedTemplate,
    errors, // ← NEW
    validate, // ← NEW
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
