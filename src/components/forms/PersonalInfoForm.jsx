function PersonalInfoForm({ cvData, handleChange }) {
  return (
    <>
      <h2>Personal Info</h2>
      <label htmlFor="nameInput">Full Name</label>
      <input
        id="nameInput"
        name="name"
        value={cvData.name}
        onChange={handleChange}
        placeholder="Your full name"
      />
      <label htmlFor="emailInput">Email</label>
      <input
        id="emailInput"
        name="email"
        value={cvData.email}
        onChange={handleChange}
        placeholder="e.g. your@email.com"
      />

      <label htmlFor="phoneInput">Phone</label>
      <input
        id="phoneInput"
        name="phone"
        value={cvData.phone}
        onChange={handleChange}
        placeholder="e.g. 08123456789"
      />

      <label htmlFor="summaryInput">Summary</label>
      <textarea
        id="summaryInput"
        name="summary"
        value={cvData.summary}
        onChange={handleChange}
        placeholder="Tell us about yourself..."
      />
      <hr />
    </>
  );
}

export default PersonalInfoForm;
