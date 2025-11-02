// src/App.jsx
import React, { useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import Para1 from "./components/Para1";
import Para2 from "./components/Para2";
import Para3 from "./components/Para3";
import ChooseTemplates from "./components/ChooseTemplates";
import ResumeForm from "./components/ResumeForm";
import Login from "./components/Login";
import { signInWithGoogle, logout } from "./firebase";

// Templates
import Template from "./components/templates/Template";
import Template2 from "./components/templates/Template2";
import Template3 from "./components/templates/Template3";
import Template4 from "./components/templates/Template4";
import Template5 from "./components/templates/Template5";
import Template6 from "./components/templates/Template6";
import Template7 from "./components/templates/Template7";
import Template8 from "./components/templates/Template8";
import Template9 from "./components/templates/Template9";
import Template10 from "./components/templates/Template10";

const App = () => {
  const [user, setUser] = useState(null);
  const [showChooseTemplates, setShowChooseTemplates] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [formData, setFormData] = useState({name: "",title: "",about: "",careerObjective: "",
    education: "",projects: [],contact: "",skills: [],hobbies: [],languages: [],
  });

  // 🔹 Google Sign-In
  const handleLogin = async () => {
    const loggedInUser = await signInWithGoogle();
    if (loggedInUser) {
      setUser(loggedInUser);
      alert(`Welcome ${loggedInUser.name}!`);
    }
  };

  // 🔹 Google Logout
  const handleLogout = async () => {
    await logout();
    setUser(null);
    alert("You have logged out.");
  };

  // 🔹 Save resume usage data to backend
  const handleGenerateResume = async () => {
    if (!user) {
      alert("Please sign in with Google first!");
      return;
    }

    try {
      await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/updateResumeCount`, {
                 name: user.name,
                 email: user.email,
        });
        
      alert("✅ Press download to get the resume in pdf format!");
    } catch (error) {
      console.error("Error updating resume count:", error);
    }
  };

  // Navigation handlers
  const handleOpenChooseTemplates = () => setShowChooseTemplates(true);
  const handleGoBack = () => {
    setShowChooseTemplates(false);
    setSelectedTemplate(null);
  };
  const handleOpenHome = () => {
    setShowChooseTemplates(false);
    setSelectedTemplate(null);
  };

  // Template selection
  const handleTemplateSelect = (templateNumber) => setSelectedTemplate(templateNumber);

  // Form update
  const handleFormChange = (updatedData) => setFormData(updatedData);
 
  
  // Render selected template
  const renderTemplate = () => {
    const templates = {
      1: Template,
      2: Template2,
      3: Template3,
      4: Template4,
      5: Template5,
      6: Template6,
      7: Template7,
      8: Template8,
      9: Template9,
      10:Template10,
    };
    const SelectedTemplate = templates[selectedTemplate];
    return SelectedTemplate ? <SelectedTemplate {...formData} /> : null;
  };

 return (
  <>
    {/* If user NOT logged in → show only Sign In screen */}
    {!user ? (
      <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-r from-yellow-200 to-red-300">
        <h1 className="text-4xl font-bold text-red-700 mb-6">Welcome to Resume Builder</h1>
        <button onClick={handleLogin}className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700"
        >
          Sign in with Google to continue
        </button>
      </div>
    ) : (
      // If user IS logged in → show full app
      <>
        <Navbar onOpenChooseTemplates={handleOpenChooseTemplates} onOpenHome={handleOpenHome}
             user={user} onLogin={handleLogin} onLogout={handleLogout}
        />
        {/* Home Page */}
        {!showChooseTemplates && !selectedTemplate && (
          <>
            <Para1 />
            <Para2 />
            <Para3 onOpenChooseTemplates={handleOpenChooseTemplates} />
          </>
        )}

        {/* Template Choose Page */}
        {showChooseTemplates && !selectedTemplate && (
          <>
            <ChooseTemplates onTemplateSelect={handleTemplateSelect} />
            <div className="flex justify-center mt-4">
              <button onClick={handleGoBack}className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800"
              >
                Back
              </button>
            </div>
          </>
        )}

        {/* Selected Template + Form Page */}
        {selectedTemplate && (
          <div className="flex flex-col md:flex-row justify-around p-8">
            {/* Form Section */}
            <div className="w-full md:w-1/2 p-4">
              <h2 className="text-2xl font-bold text-blue-700 mb-4 text-center">
                Resume Information
              </h2>
              <ResumeForm formData={formData} onFormChange={handleFormChange} />
              <div className="text-center mt-4 space-x-3">
                <button onClick={handleGoBack}className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800"
                >
                  Back
                </button>
                <button onClick={handleGenerateResume}className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800"
                >
                  Generate Resume
                </button>
              </div>
            </div>

            {/* Live Preview Section */}
            <div className="w-full md:w-1/2 p-4">{renderTemplate()}</div>
          </div>
        )}
      </>
    )}
  </>
);

};

export default App;
