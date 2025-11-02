import React, { useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const Template = ({name,title,about,careerObjective,education,projects,contact,skills,hobbies,languages,
}) => {
  // 👇 create a ref for the resume section
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
    <div className="flex flex-col items-center my-6">
      {/* Download Button */}
      <button onClick={handleDownloadPDF}className="mb-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
      >
        Download PDF
      </button>

      {/* Resume Section */}
      <div ref={resumeRef}className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-8 border border-gray-300">
        {/* Header */}
        <header className="text-center mb-6">
          <h1 className="text-4xl font-bold text-blue-700">{name}</h1>
          <p className="text-lg text-gray-600">{title}</p>
        </header>

        {/* About Section */}
        <section className="mb-4">
          <h2 className="text-xl font-semibold text-blue-600 border-b border-blue-200 pb-1">
            About
          </h2>
          <p className="text-gray-700 mt-2">{about}</p>
        </section>

        {/* Career Objective */}
        <section className="mb-4">
          <h2 className="text-xl font-semibold text-blue-600 border-b border-blue-200 pb-1">
            Career Objective
          </h2>
          <p className="text-gray-700 mt-2">{careerObjective}</p>
        </section>

        {/* Education */}
        <section className="mb-4">
          <h2 className="text-xl font-semibold text-blue-600 border-b border-blue-200 pb-1">
            Education
          </h2>
          <ul className="list-disc ml-6 text-gray-700">
            {Array.isArray(education) &&
              education.map((edu, i) => <li key={i}>{edu}</li>)}
          </ul>
        </section>

        {/* Skills */}
        <section className="mb-4">
          <h2 className="text-xl font-semibold text-blue-600 border-b border-blue-200 pb-1">
            Skills
          </h2>
          <div className="flex flex-wrap gap-2 mt-2 items-center  justify-center" >
            {skills && skills.length > 0 ? (
              skills.map((skill, i) => (
                <span key={i}className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm "
                >
                  {skill}
                </span>
              ))
            ) : (
              <p className="text-gray-500 italic">No skills added</p>
            )}
          </div>
        </section>

        {/* Projects */}
        <section className="mb-4">
          <h2 className="text-xl font-semibold text-blue-600 border-b border-blue-200 pb-1">
            Projects
          </h2>
          <ul className="list-disc ml-6 text-gray-700 mt-2">
            {projects && projects.length > 0 ? (
              projects.map((project, i) => <li key={i}>{project}</li>)
            ) : (
              <p className="text-gray-500 italic">No projects listed</p>
            )}
          </ul>
        </section>

        {/* Hobbies */}
        <section className="mb-4">
          <h2 className="text-xl font-semibold text-blue-600 border-b border-blue-200 pb-1">
            Hobbies
          </h2>
          <p className="text-gray-700 mt-2">
            {hobbies && hobbies.length > 0
              ? hobbies.join(", ")
              : "No hobbies listed"}
          </p>
        </section>

        {/* Languages */}
        <section className="mb-4">
          <h2 className="text-xl font-semibold text-blue-600 border-b border-blue-200 pb-1">
            Languages
          </h2>
          <p className="text-gray-700 mt-2">
            {languages && languages.length > 0
              ? languages.join(", ")
              : "No languages listed"}
          </p>
        </section>

        {/* Contact */}
        <footer className="mt-6 text-gray-500 text-sm text-center border-t pt-2">
          Contact: {contact || "No contact information"}
        </footer>
      </div>
    </div>
  );
};

export default Template;
