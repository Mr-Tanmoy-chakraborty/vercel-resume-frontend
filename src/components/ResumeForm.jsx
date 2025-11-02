import React from 'react'

const ResumeForm = ({formData,onFormChange}) => {
  const handleChange=(e)=>{
     const{name,value}=e.target;
     onFormChange({ ...formData, [name]: value });
  }
  return (
    <div className="flex flex-col">
      <h2>Name</h2>
      <input type="text" name="name" placeholder="Full Name" value={formData.name}onChange={handleChange} className="border border-gray-300 rounded-lg p-2 m-2"/>
      <h2>Title</h2>
      <input type="text" name="title" placeholder="Job Title / Student"value={formData.title}onChange={handleChange}className="border border-gray-300 rounded-lg p-2 m-2" />
      <h2>About</h2>
      <textarea name="about"placeholder="About" value={formData.about}onChange={handleChange}className="border border-gray-300 rounded-lg p-2 m-2"/>
      <h2>careerObjective</h2>
      <textarea name="careerObjective"placeholder="Career Objective" value={formData.careerObjective} onChange={handleChange}className="border border-gray-300 rounded-lg p-2 m-2"/>
      <h2>Education</h2>
      <textarea  name="education" placeholder="Education (comma separated)"value={formData.education}className="border border-gray-300 rounded-lg p-2 m-2"
        onChange={(e) =>
             onFormChange({
              ...formData,
             education: e.target.value.split(","),
        })
       }
      />

      <h2>Projects</h2>
      <textarea name="projects"placeholder="Projects (comma separated)"value={formData.projects} className="border border-gray-300 rounded-lg p-2 m-2"
         onChange={(e)=>onFormChange({  ...formData,
            projects: e.target.value.split(","),})}
      ></textarea>
      <h2>Contact</h2>
      <input type="text"name="contact"placeholder="Contact"value={formData.contact}onChange={handleChange}className="border border-gray-300 rounded-lg p-2 m-2"/>
      <h2>Skills</h2>
      <textarea name="skills"placeholder="Skills (comma separated)"value={formData.skills}className="border border-gray-300 rounded-lg p-2 m-2"
        onChange={(e) =>
          onFormChange({
            ...formData,
            skills: e.target.value.split(","),
          })
        }
      />
      <h2>Hobbies</h2>
      <textarea name="hobbies"placeholder="Hobbies (comma separated)"value={formData.hobbies}className="border border-gray-300 rounded-lg p-2 m-2"
        onChange={(e) =>
          onFormChange({
            ...formData,
            hobbies: e.target.value.split(","),
          })
        }
      />
      <h2>Languages</h2>
        <textarea name="languages" placeholder="Languages (comma separated)"value={formData.languages}className="border border-gray-300 rounded-lg p-2 m-2"
        onChange={(e) =>
          onFormChange({
            ...formData,
            languages: e.target.value.split(","),
          })
        }
      />
    </div>
  )
}

export default ResumeForm
