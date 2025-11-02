import React,{useRef} from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
const Template9 = ({name,title,about,careerObjective,education,projects,contact,skills,hobbies,languages
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
    <div ref={resumeRef}className="max-w-4xl mx-auto bg-white shadow-xl rounded-xl border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-700 to-purple-500 text-white p-6 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">{name}</h1>
          <p className="text-lg">{title}</p>
        </div>
        <div className="text-right">
          {contact && <p className="text-sm">{contact}</p>}
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6 space-y-4">
        {/* About */}
        {about && (
          <section>
            <h2 className="font-semibold text-purple-700 mb-1">About</h2>
            <p className="text-gray-700">{about}</p>
          </section>
        )}

        {/* Career Objective */}
        {careerObjective && (
          <section>
            <h2 className="font-semibold text-purple-700 mb-1">Career Objective</h2>
            <p className="text-gray-700">{careerObjective}</p>
          </section>
        )}

        {/* Education */}
        {education && education.length > 0 && (
          <section>
            <h2 className="font-semibold text-purple-700 mb-1">Education</h2>
            <ul className="list-disc ml-6list-disc list-inside text-gray-600">
          {Array.isArray(education) && education.map((edu, i) => (
            <li key={i}>{edu}</li>
          ))}
        </ul>
          </section>
        )}

        {/* Skills */}
        {skills && skills.length > 0 && (
          <section>
            <h2 className="font-semibold text-purple-700 mb-1">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((s, i) => (
                <span key={i} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">{s}</span>
              ))}
            </div>
          </section>
        )}

        {/* Projects */}
        {projects && projects.length > 0 && (
          <section>
            <h2 className="font-semibold text-purple-700 mb-1">Projects</h2>
            <ul className="list-disc ml-6 text-gray-700">
              {projects.map((p, i) => <li key={i}>{p}</li>)}
            </ul>
          </section>
        )}

        {/* Hobbies & Languages */}
        {(hobbies || languages) && (
          <section className="flex justify-between text-gray-700 mt-4">
            {hobbies && <div><strong>Hobbies:</strong> {hobbies.join(", ")}</div>}
            {languages && <div><strong>Languages:</strong> {languages.join(", ")}</div>}
          </section>
        )}
      </div>
    </div>
    </>
  );
};

export default Template9;
