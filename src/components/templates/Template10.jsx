import React,{useRef} from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
const Template10 = ({name,title,about,careerObjective,education,projects,contact,skills,hobbies,languages
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
    <div ref={resumeRef} className="max-w-4xl mx-auto bg-white shadow-2xl rounded-xl flex overflow-hidden border border-gray-200">
      {/* Sidebar */}
      <aside className="w-1/3 bg-gray-900 text-white p-6 flex flex-col justify-between">
        <div>
          <h1 className="text-xl font-bold mb-1">{name}</h1>
          <p className="text-gray-300 mb-4">{title}</p>

          {about && (
            <>
              <h2 className="font-semibold mt-2">About</h2>
              <p className="text-sm">{about}</p>
            </>
          )}

          {education && education.length > 0 && (
            <>
              <h2 className="font-semibold mt-4">Education</h2>
              <ul className="list-disc ml-6list-disc list-inside text-white">
          {Array.isArray(education) && education.map((edu, i) => (
            <li key={i}>{edu}</li>
          ))}
        </ul>
            </>
          )}

          <h2 className="font-semibold mt-4">Contact</h2>
          <p className="text-sm">{contact}</p>

          <h2 className="font-semibold mt-4">Languages</h2>
          <ul className="list-disc list-inside text-sm">
            {languages.map((lang, i) => <li key={i}>{lang}</li>)}
          </ul>

          <h2 className="font-semibold mt-4">Hobbies</h2>
          <p className="text-sm">{hobbies.join(", ")}</p>
        </div>
      </aside>

      {/* Main Content */}
      <main className="w-2/3 p-8 bg-gray-50">
        {careerObjective && (
          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2 border-b-2 border-gray-300 inline-block">Career Objective</h2>
            <p className="text-gray-700">{careerObjective}</p>
          </section>
        )}

        {skills && skills.length > 0 && (
          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2 border-b-2 border-gray-300 inline-block">Skills</h2>
            <div className="flex flex-wrap gap-2 mt-2">
              {skills.map((s, i) => (
                <span key={i} className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">{s}</span>
              ))}
            </div>
          </section>
        )}

        {projects && projects.length > 0 && (
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2 border-b-2 border-gray-300 inline-block">Projects</h2>
            <ul className="list-disc ml-6 text-gray-700 mt-2">
              {projects.map((p, i) => <li key={i}>{p}</li>)}
            </ul>
          </section>
        )}
      </main>
    </div>
    </>
  );
};

export default Template10;
