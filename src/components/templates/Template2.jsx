import React,{useRef} from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
const Template2 = ({name,title,about,careerObjective,education,projects,contact,skills,hobbies,languages,
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
    <div ref={resumeRef} className="max-w-4xl mx-auto bg-white shadow-2xl rounded-lg overflow-hidden flex border border-gray-200">
      {/* Sidebar */}
      <aside className="w-1/3 bg-gradient-to-b from-blue-800 to-blue-600 text-white p-6 flex flex-col justify-between">
        <div>
          <h1 className="text-xl font-bold mb-1">{name}</h1>
          <p className="text-gray-200 mb-4">{title}</p>

          <h2 className="font-semibold mt-2">Contact</h2>
          <p className="text-sm">{contact}</p>

          <h2 className="font-semibold mt-4">Languages</h2>
          <ul className="list-disc list-inside text-sm">
            {languages && languages.length > 0 ? (
              languages.map((lang, i) => <li key={i}>{lang}</li>)
            ) : (
              <li>No languages listed</li>
            )}
          </ul>

          <h2 className="font-semibold mt-4">Hobbies</h2>
          <p className="text-sm">
            {hobbies && hobbies.length > 0
              ? hobbies.join(", ")
              : "No hobbies listed"}
          </p>
        </div>
      </aside>

      {/* Main Content */}
      <main className="w-2/3 p-8 bg-gray-50">
        {/* About Section */}
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-blue-700 mb-2">About</h2>
          <p className="text-gray-700">
            {about ? about : "No information provided"}
          </p>
        </section>

        {/* Career Objective */}
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-blue-700 mb-2">
            Career Objective
          </h2>
          <p className="text-gray-700">
            {careerObjective ? careerObjective : "No career objective provided"}
          </p>
        </section>

        {/* Education */}
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-blue-700 mb-2">Education</h2>
          <ul className="list-disc ml-6 text-gray-700">
          {Array.isArray(education) && education.map((edu, i) => (
            <li key={i}>{edu}</li>
          ))}

        </ul>
        </section>

        {/* Skills */}
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-blue-700 mb-2">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills && skills.length > 0 ? (
              skills.map((s, i) => (
                <span
                  key={i}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                >
                  {s}
                </span>
              ))
            ) : (
              <p className="text-gray-500 italic">No skills listed</p>
            )}
          </div>
        </section>

        {/* Projects */}
        <section>
          <h2 className="text-2xl font-bold text-blue-700 mb-2">Projects</h2>
          <ul className="list-disc ml-6 text-gray-700">
            {projects && projects.length > 0 ? (
              projects.map((proj, i) => <li key={i}>{proj}</li>)
            ) : (
              <p className="text-gray-500 italic">No projects listed</p>
            )}
          </ul>
        </section>
      </main>
    </div>
    </>
  );
};

export default Template2;
