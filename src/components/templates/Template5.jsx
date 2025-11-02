import React,{useRef} from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
const Template5 = ({ name, title, about, education, careerObjective, projects, contact, skills, hobbies, languages 
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
    <div  ref={resumeRef} className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-8 border border-gray-200 text-center">
      <header className="mb-6">
        <h1 className="text-4xl font-bold text-purple-700">{name}</h1>
        <p className="text-lg text-gray-600">{title}</p>
        <p className="mt-2 text-gray-500">{contact}</p>
      </header>

      {/* About Section */}
      <section className="mb-4">
        <h2 className="text-2xl font-semibold text-purple-600 mb-1">About</h2>
        <p className="text-gray-700">{about}</p>
      </section>

      {/* Education Section */}
      <section className="mb-4">
        <h2 className="text-2xl font-semibold text-purple-600 mb-1">Education</h2>
        <ul className="list-disc list-inside text-gray-700">
          {Array.isArray(education) && education.map((edu, i) => (
  <li key={i}>{edu}</li>
))}

        </ul>
      </section>

      {/* Career Objective */}
      <section className="mb-4">
        <h2 className="text-2xl font-semibold text-purple-600 mb-1">Career Objective</h2>
        <p className="text-gray-700">{careerObjective}</p>
      </section>

      {/* Skills */}
      <section className="mb-4">
        <h2 className="text-2xl font-semibold text-purple-600 mb-2">Skills</h2>
        <div className="flex flex-wrap justify-center gap-2">
          {skills.map((s, i) => (
            <span 
              key={i} 
              className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm"
            >
              {s}
            </span>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="mb-4">
        <h2 className="text-2xl font-semibold text-purple-600 mb-2">Projects</h2>
        <ul className="list-disc list-inside text-gray-700">
          {projects.map((p, i) => <li key={i}>{p}</li>)}
        </ul>
      </section>

      {/* Hobbies */}
      <section className="mb-4">
        <h2 className="text-xl font-semibold text-purple-600">Hobbies</h2>
        <p className="text-gray-700">{hobbies.join(", ")}</p>
      </section>

      {/* Languages */}
      <section>
        <h2 className="text-xl font-semibold text-purple-600">Languages</h2>
        <p className="text-gray-700">{languages.join(", ")}</p>
      </section>
    </div>
    </>
  );
};

export default Template5;
