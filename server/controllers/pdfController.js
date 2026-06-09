import PDFDocument from "pdfkit";

export const generatePDF = (req, res) => {
  const data = req.body;

  const doc = new PDFDocument({
    size: "A4",
    margin: 0,
  });

  res.setHeader(
    "Content-Type",
    "application/pdf"
  );

  res.setHeader(
    "Content-Disposition",
    "attachment; filename=resume.pdf"
  );

  doc.pipe(res);

  // HEADER
  doc.rect(0, 0, 595, 140).fill("#8CB8FF");

  // Profile Circle
  doc.circle(90, 70, 40).fill("#FFFFFF");

  doc
    .fillColor("#000")
    .fontSize(28)
    .text(
      (data.fullName || "A")
        .charAt(0)
        .toUpperCase(),
      78,
      56
    );

  doc
    .fillColor("#FFFFFF")
    .fontSize(30)
    .text(
      data.fullName || "Your Name",
      150,
      45
    );

  doc
    .fontSize(13)
    .text(
      "COMPUTER SCIENCE STUDENT",
      150,
      85
    );

  // Divider
  

  // Divider
doc
  .moveTo(220, 160)
  .lineTo(220, 790)
  .stroke("#D6D6D6");

const leftX = 30;
const rightX = 250;

// =====================
// LEFT COLUMN
// =====================

let leftY = 170;

doc.fillColor("#6B7CFF")
  .fontSize(15)
  .text("EDUCATION", leftX, leftY);

leftY = doc.y + 10;

doc.fillColor("#000")
  .fontSize(10)
  .text(
    data.education || "",
    leftX,
    leftY,
    {
      width: 160,
    }
  );

leftY = doc.y + 25;

doc.fillColor("#6B7CFF")
  .fontSize(15)
  .text("SKILLS", leftX, leftY);

leftY = doc.y + 10;

doc.fillColor("#000")
  .fontSize(10)
  .text(
    data.skills || "",
    leftX,
    leftY,
    {
      width: 160,
    }
  );

leftY = doc.y + 25;

doc.fillColor("#6B7CFF")
  .fontSize(15)
  .text("CONTACT", leftX, leftY);

leftY = doc.y + 10;

doc.fillColor("#000")
  .fontSize(10)
  .text(
    `${data.phone || ""}

${data.email || ""}

${data.address || ""}`,
    leftX,
    leftY,
    {
      width: 160,
    }
  );

leftY = doc.y + 25;

doc.fillColor("#6B7CFF")
  .fontSize(15)
  .text("LANGUAGES", leftX, leftY);

leftY = doc.y + 10;

doc.fillColor("#000")
  .fontSize(10)
  .text(
    data.languages || "",
    leftX,
    leftY,
    {
      width: 160,
    }
  );

// =====================
// RIGHT COLUMN
// =====================

let rightY = 170;

doc.fillColor("#6B7CFF")
  .fontSize(15)
  .text("ABOUT ME", rightX, rightY);

rightY = doc.y + 10;

doc.fillColor("#000")
  .fontSize(10)
  .text(
    data.summary || "",
    rightX,
    rightY,
    {
      width: 300,
      align: "justify",
    }
  );

rightY = doc.y + 25;

doc.fillColor("#6B7CFF")
  .fontSize(15)
  .text("EXPERIENCE", rightX, rightY);

rightY = doc.y + 10;

doc.fillColor("#000")
  .fontSize(10)
  .text(
    data.experience || "",
    rightX,
    rightY,
    {
      width: 300,
      align: "justify",
    }
  );

rightY = doc.y + 25;

doc.fillColor("#6B7CFF")
  .fontSize(15)
  .text("PROJECTS", rightX, rightY);

rightY = doc.y + 10;

doc.fillColor("#000")
  .fontSize(10)
  .text(
    data.projects || "",
    rightX,
    rightY,
    {
      width: 300,
      align: "justify",
    }
  );

doc.end();
};