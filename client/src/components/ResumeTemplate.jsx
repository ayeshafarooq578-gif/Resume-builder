function ResumeForm({ resumeData}) {
    return(
        <div
        style={{
            width: "500px",
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "10px",
            backgroundColor :"#fff",
            color: "#000",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        }}
        >
             <h1 style={{ marginBottom: "10px" }}>
        {resumeData.name || "Your Name"}
      </h1>

      <p>
        <strong>Email:</strong>{" "}
        {resumeData.email || "your@email.com"}
      </p>

      <p>
        <strong>Phone:</strong>{" "}
        {resumeData.phone || "+92 300 1234567"}
      </p>

      <hr />

      {/* Education */}
      <h2>Education</h2>

      <p>
        {resumeData.education ||
          "Your education details will appear here."}
      </p>

      <hr />

      {/* Experience */}
      <h2>Experience</h2>

      <p>
        {resumeData.experience ||
          "Your experience details will appear here."}
      </p>

      <hr />

      {/* Skills */}
      <h2>Skills</h2>

      <p>
        {resumeData.skills ||
          "Your skills will appear here."}
      </p>
    </div>
  );
}

export default ResumePreview;
        