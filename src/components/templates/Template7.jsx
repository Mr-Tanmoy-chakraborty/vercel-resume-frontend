import React,{useRef} from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
const Template7 = ({ name,title,about,careerObjective,education,projects,contact,skills,hobbies,languages
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
    <div ref={resumeRef} className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200">
      {/* Header */}
      <header className="bg-red-600 text-white p-6 text-center">
        <h1 className="text-3xl font-bold">{name}</h1>
        <p className="text-lg">{title}</p>
      </header>

      {/* Main */}
      <main className="p-6">

        {/* About Section */}
        {about && (
          <section className="mb-4">
            <h2 className="text-xl font-semibold text-red-600 mb-1">About</h2>
            <p className="text-gray-700">{about}</p>
          </section>
        )}

        {/* Career Objective */}
        {careerObjective && (
          <section className="mb-4">
            <h2 className="text-xl font-semibold text-red-600 mb-1">
              Career Objective
            </h2>
            <p className="text-gray-700">{careerObjective}</p>
          </section>
        )}

        {/* Education */}
        {education && education.length > 0 && (
          <section className="mb-4 border-black">
            <h2 className="text-xl font-semibold text-red-600 mb-2">Education</h2>
            <ul className="list-disc ml-6 text-gray-700">
          {Array.isArray(education) && education.map((edu, i) => (
            <li key={i}>{edu}</li>
          ))}

        </ul>
          </section>
        )}

        {/* Projects */}
        {projects && projects.length > 0 && (
          <section className="mb-4">
            <h2 className="text-xl font-semibold text-red-600 mb-2">Projects</h2>
            <ul className="list-disc ml-6 text-gray-700">
              {projects.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Skills */}
        {skills && skills.length > 0 && (
          <section className="mb-4">
            <h2 className="text-xl font-semibold text-red-600 mb-1">Skills</h2>
            <div className="flex flex-wrap gap-2 mt-1">
              {skills.map((s, i) => (
                <span
                  key={i}
                  className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm"
                >
                  {s}
                </span>
              ))}
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-red-50 p-4 text-center text-gray-700">
        {contact && <p>Contact: {contact}</p>}
        {hobbies && hobbies.length > 0 && <p>Hobbies: {hobbies.join(", ")}</p>}
        {languages && languages.length > 0 && <p>Languages: {languages.join(", ")}</p>}
      </footer>
    </div>
    </>
  );
};

export default Template7;
