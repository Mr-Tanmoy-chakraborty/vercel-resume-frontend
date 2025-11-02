import React,{useRef} from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas"
const Template4 = ({ name, title, about, education, careerObjective, projects, contact, skills, hobbies, languages 
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
  }
  return (
    <>
     <button onClick={handleDownloadPDF} className="mb-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition">Download</button>
    <div ref={resumeRef} className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg flex flex-col md:flex-row border border-gray-200 overflow-hidden">
      
      {/* Left Column */}
      <div className="md:w-1/2 bg-blue-100 p-6">
        <h1 className="text-3xl font-bold text-blue-900">{name}</h1>
        <p className="text-blue-800 mb-4">{title}</p>

        {/* About Section */}
        <h2 className="font-semibold text-blue-900 mt-4">About</h2>
        <p className="text-blue-800">{about}</p>

        {/* Education Section */}
        <h2 className="font-semibold text-blue-900 mt-4">Education</h2>
        <ul className="list-disc ml-6 text-blue-800">
          {Array.isArray(education) && education.map((edu, i) => (
  <li key={i}>{edu}</li>
))}

        </ul>

        <h2 className="font-semibold text-blue-900 mt-4">Career Objective</h2>
        <p className="text-blue-800">{careerObjective}</p>

        <h2 className="font-semibold text-blue-900 mt-4">Skills</h2>
        <div className="flex flex-wrap gap-2 mt-2">
          {skills.map((s, i) => (
            <span 
              key={i} 
              className="bg-blue-200 px-2 py-1 rounded-full text-sm"
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* Right Column */}
      <div className="md:w-1/2 p-6 bg-gray-50">
        <h2 className="font-semibold text-gray-700">Projects</h2>
        <ul className="list-disc ml-6 text-gray-700 mt-2">
          {projects.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>

        <h2 className="font-semibold text-gray-700 mt-4">Contact</h2>
        <p>{contact}</p>

        <h2 className="font-semibold text-gray-700 mt-4">Hobbies</h2>
        <p>{hobbies.join(", ")}</p>

        <h2 className="font-semibold text-gray-700 mt-4">Languages</h2>
        <p>{languages.join(", ")}</p>
      </div>
    </div>
    </>
  );
};

export default Template4;
