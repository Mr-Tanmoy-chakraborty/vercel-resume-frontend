// // src/Home.jsx
// import React, { useState } from "react";
// import Navbar from "./components/Navbar";
// import Para1 from "./components/Para1";
// import Para2 from "./components/Para2";
// import Para3 from "./components/Para3";
// import ResumeForm from "./components/ResumeForm";
// import TemplateSelector from "./components/TemplateSelector";
// import ResumePreview from "./components/ResumePreview";

// const Home = () => {
//   const [formData, setFormData] = useState({});
//   const [selectedTemplate, setSelectedTemplate] = useState(1);

//   return (
//     <>
//       <Navbar />
//       <Para1 />
//       <Para2 />
//       <Para3 />

//       {/* Resume Builder Section */}
//       <ResumeForm onFormChange={setFormData} />
//       <TemplateSelector
//         selectedTemplate={selectedTemplate}
//         onTemplateChange={setSelectedTemplate}
//       />
//       <ResumePreview data={formData} selectedTemplate={selectedTemplate} />
//     </>
//   );
// };

// export default Home;
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPMBNrriczRLh3o-jd4To2o8etsd6uHEY",
  authDomain: "resumebuilder-b73a7.firebaseapp.com",
  projectId: "resumebuilder-b73a7",
  storageBucket: "resumebuilder-b73a7.firebasestorage.app",
  messagingSenderId: "517717752641",
  appId: "1:517717752641:web:d3bfba5255c33dc53c3fc0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);