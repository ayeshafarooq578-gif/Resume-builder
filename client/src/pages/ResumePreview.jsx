import { useEffect, useState } from "react";
import axios from "axios";
import profile from "../assets/profile.jpg";

function ResumePreview() {
  const [resumeData, setResumeData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    summary: "",
    education: "",
    skills: "",
    experience: "",
     projects: "",
  languages: "",
  });

  useEffect(() => {
    const savedData = JSON.parse(
      localStorage.getItem("resumeData")
    );

    if (savedData) {
      setResumeData(savedData);
    }
  }, []);

  const downloadPDF = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5002/api/generate-pdf",
        resumeData,
        {
          responseType: "blob",
        }
      );

      const file = new Blob([response.data], {
        type: "application/pdf",
      });

      const fileURL = URL.createObjectURL(file);

      const a = document.createElement("a");
      a.href = fileURL;
      a.download = "resume.pdf";

      document.body.appendChild(a);
      a.click();

      document.body.removeChild(a);

      URL.revokeObjectURL(fileURL);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="preview-page">
      <div className="resume-template">

        {/* Header */}
        <div className="resume-header">
          

          <div><img
  src={profile}
  alt="Profile"
  className="avatar-image"
/>

<div className="header-content">
            <h1>
              {resumeData.fullName || "Your Name"}
            </h1>

            <p>
              PROFESSIONAL PROFILE
            </p>
          </div>
          </div>
        </div>

        {/* Resume Body */}
        <div className="resume-body">

          {/* Sidebar */}
          <div className="resume-sidebar">

            <div className="section">
              <h3>🎓 Education</h3>

              <p>
                {resumeData.education ||
                  "Education details"}
              </p>
            </div>

            <div className="section">
              <h3>💻 Skills</h3>

              <p>
                {resumeData.skills ||
                  "Skills"}
              </p>
            </div>

            <div className="section">
              <h3>📞 Contact</h3>

              <p>
                {resumeData.phone}
              </p>

              <p>
                {resumeData.email}
              </p>

              <p>
                {resumeData.address}
              </p>
            </div>

          </div>

          <div className="section">
  <h3>🌍 Languages</h3>

  <p>
    {resumeData.languages}
  </p>
</div>

          {/* Main Content */}
          <div className="resume-main">

            <div className="section">
              <h3>👤 About Me</h3>

              <p>
                {resumeData.summary ||
                  "Professional summary"}
              </p>
            </div>

            <div className="section">
              <h3>💼 Experience</h3>

              <p>
                {resumeData.experience ||
                  "Work experience"}
              </p>
            </div>

            <div className="section">
  <h3>🚀 Projects</h3>

  <p>
    {resumeData.projects}
  </p>
</div>

          </div>

        </div>
      </div>

      <div className="download-section">
        <button
          className="download-btn"
          onClick={downloadPDF}
        >
          Download Resume PDF
        </button>
      </div>
    </div>
  );
}

export default ResumePreview;