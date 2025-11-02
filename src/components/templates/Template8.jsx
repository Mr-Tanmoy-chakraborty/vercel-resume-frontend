import React,{useRef} from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
const Template8 = ({name,title,about,careerObjective,education,projects,contact,skills,hobbies,languages
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
    <div ref={resumeRef}className="max-w-3xl mx-auto bg-white border border-gray-300 rounded-xl shadow-md p-8 space-y-6">
      {/* Header */}
      <header className="text-center">
        <h1 className="text-3xl font-bold text-gray-800">{name}</h1>
        <p className="text-gray-500">{title}</p>
      </header>

      {/* About */}
      {about && (
        <section className="space-y-2">
          <h2 className="font-semibold text-gray-700">About</h2>
          <p className="text-gray-600">{about}</p>
        </section>
      )}

      {/* Career Objective */}
      {careerObjective && (
        <section className="space-y-2">
          <h2 className="font-semibold text-gray-700">Career Objective</h2>
          <p className="text-gray-600">{careerObjective}</p>
        </section>
      )}

      {/* Education */}
      {education && education.length > 0 && (
        <section className="space-y-2">
          <h2 className="font-semibold text-gray-700">Education</h2>
          <ul className="list-disc ml-6list-disc list-inside text-gray-600">
          {Array.isArray(education) && education.map((edu, i) => (
            <li key={i}>{edu}</li>
          ))}
        </ul>
        </section>
      )}

      {/* Projects */}
      {projects && projects.length > 0 && (
        <section className="space-y-2">
          <h2 className="font-semibold text-gray-700">Projects</h2>
          <ul className="list-disc list-inside text-gray-600">
            {projects.map((p, i) => <li key={i}>{p}</li>)}
          </ul>
        </section>
      )}

      {/* Skills */}
      {skills && skills.length > 0 && (
        <section className="space-y-2">
          <h2 className="font-semibold text-gray-700">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((s, i) => (
              <span key={i} className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">{s}</span>
            ))}
          </div>
        </section>
      )}

      {/* Hobbies & Languages */}
      <section className="flex justify-between text-gray-700">
        {hobbies && <div><strong>Hobbies:</strong> {hobbies.join(", ")}</div>}
        {languages && <div><strong>Languages:</strong> {languages.join(", ")}</div>}
      </section>

      {/* Footer */}
      {contact && (
        <footer className="text-center text-sm text-gray-500">
          Contact: {contact}
        </footer>
      )}
    </div>
    </> 
  );
};

export default Template8;
