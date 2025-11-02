import React,{useRef} from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas"
const Template3 = ({ name, title, about, education, careerObjective, projects, contact, skills, hobbies,languages 
}) => {
 const resumeRef = useRef();

  // 👇 function to generate and download PDF
  const handleDownloadPDF = async () => {
  const element = resumeRef.current;

  // Convert HTML to canvas
  const canvas = await html2canvas(element, { scale: 2 });
  const imgData = canvas.toDataURL("image/png");

  const pdf = new jsPDF("p", "mm", "a4");
  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = pdf.internal.pageSize.getHeight();

  // Image height in mm
  const imgProps = pdf.getImageProperties(imgData);
  const imgHeight = (imgProps.height * pdfWidth) / imgProps.width;

  let heightLeft = imgHeight;
  let position = 0;

  // Add first page
  pdf.addImage(imgData, "PNG", 0, position, pdfWidth, imgHeight);
  heightLeft -= pdfHeight;

  // Add extra pages if needed
  while (heightLeft > 0) {
    position = heightLeft - imgHeight;
    pdf.addPage();
    pdf.addImage(imgData, "PNG", 0, position, pdfWidth, imgHeight);
    heightLeft -= pdfHeight;
  }

  pdf.save(`${name ? name : "resume"}.pdf`);
};
  return (
    <>
     <button onClick={handleDownloadPDF} className="mb-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition">Download</button>
    <div ref={resumeRef} className="max-w-3xl mx-auto p-6">
      <header className="text-center mb-6">
        <h1 className="text-4xl font-bold text-indigo-700">{name}</h1>
        <p className="text-lg text-gray-600">{title}</p>
      </header>

      {/* About Card */}
      <div className="bg-purple-50 border-l-4 border-purple-500 p-4 mb-4 rounded">
        <h2 className="font-semibold text-purple-700 mb-1">About</h2>
        <p className="text-gray-700">{about}</p>
      </div>

      {/* Education Card */}
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4 rounded">
        <h2 className="font-semibold text-blue-700 mb-1">Education</h2>
        <ul className="list-disc ml-6 text-gray-700">
          {Array.isArray(education) && education.map((edu, i) => (
            <li key={i}>{edu}</li>
          ))}

        </ul>
      </div>

      {/* Career Objective Card */}
      <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 mb-4 rounded">
        <h2 className="font-semibold text-indigo-700 mb-1">Career Objective</h2>
        <p className="text-gray-700">{careerObjective}</p>
      </div>

      {/* Skills Card */}
      <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-4 rounded">
        <h2 className="font-semibold text-green-700 mb-2">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((s, i) => (
            <span key={i}className="bg-green-100 px-3 py-1 rounded-full text-sm"
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* Projects Card */}
      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-4 rounded">
        <h2 className="font-semibold text-yellow-700 mb-2">Projects</h2>
        <ul className="list-disc ml-6 text-gray-700">
          {projects.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
      </div>

      {/* Footer Card */}
      <div className="bg-gray-50 border-l-4 border-gray-500 p-4 rounded">
        <h2 className="font-semibold text-gray-700 mb-1">Contact</h2>
        <p className="text-gray-600">{contact}</p>
        <p className="mt-2">
          <strong>Hobbies:</strong> {hobbies.join(", ")}
        </p>
        <p className="mt-1">
          <strong>Languages:</strong> {languages.join(", ")}
        </p>
      </div>
    </div>
    </>
  );
};

export default Template3;
