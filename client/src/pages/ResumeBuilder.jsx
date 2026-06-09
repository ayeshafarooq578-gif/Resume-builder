import { useState } from "react";

function ResumeBuilder() {
  const [resumeData, setResumeData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    summary: "",
    education: "",
    skills: "",
    experience: "",
  });

  const handleChange = (e) => {
    setResumeData({
      ...resumeData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="builder-page">
      {/* Header */}
      <div className="builder-header">
        <div className="header-icon">📄</div>

        <div>
          <h1>Resume Information</h1>
          <p>
            Fill in the details below to create
            your professional resume.
          </p>
        </div>
      </div>

      {/* Form Card */}
      <div className="resume-form-card">
        <h2>Personal Information</h2>

        <div className="grid-two">
          <input
            type="text"
            name="fullName"
            placeholder="Enter your full name"
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            onChange={handleChange}
          />
        </div>

        <div className="grid-two">
          <input
            type="text"
            name="phone"
            placeholder="Enter your phone"
            onChange={handleChange}
          />

          <input
            type="text"
            name="address"
            placeholder="Enter your address"
            onChange={handleChange}
          />
        </div>

        <h2>Professional Summary</h2>

        <textarea
          name="summary"
          rows="5"
          placeholder="Write your summary..."
          onChange={handleChange}
        />

        <div className="grid-two">
          <div>
            <h2>Education</h2>

            <textarea
              name="education"
              rows="5"
              placeholder="Enter your education..."
              onChange={handleChange}
            />
          </div>

          <div>
            <h2>Skills</h2>

            <textarea
              name="skills"
              rows="5"
              placeholder="HTML, CSS, React..."
              onChange={handleChange}
            />
          </div>
        </div>

        <h2>Work Experience</h2>

        <textarea
          name="experience"
          rows="6"
          placeholder="Enter your work experience..."
          onChange={handleChange}
        />

            <h2>Projects</h2>

<textarea
  name="projects"
  rows="5"
  placeholder="Describe your projects..."
  onChange={handleChange}
/>

<h2>Languages</h2>

<textarea
  name="languages"
  rows="3"
  placeholder="English, Urdu..."
  onChange={handleChange}
/>


       <button
        className="preview-btn"
        onClick={() => {
            localStorage.setItem(
            "resumeData",
            JSON.stringify(resumeData)
            );

            window.location.href = "/preview";
        }}
        >
        Save & Preview Resume →
        </button>
            </div>
            </div>
  );
}

export default ResumeBuilder;