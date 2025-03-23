// import { useState } from "react";
// import "./ProjectDashboard.css";

// export default function ProjectDashboard() {
//   const [projects, setProjects] = useState([
//     { name: "AI Chatbot", description: "A chatbot using NLP for customer support.", contributors: 5 },
//     { name: "E-commerce Website", description: "A full-stack MERN e-commerce app.", contributors: 3 },
//     { name: "Finance Tracker", description: "A personal finance management tool.", contributors: 4 },
//   ]);
//   const [showForm, setShowForm] = useState(false);
//   const [newProject, setNewProject] = useState({
//     name: "",
//     description: "",
//     contributors: 1,
//   });

//   const handleCreateProject = () => {
//     setShowForm(true);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setNewProject((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setProjects([...projects, newProject]);
//     setNewProject({ name: "", description: "", contributors: 1 });
//     setShowForm(false);
//   };

//   return (
//     <div className="dashboard-container">
//       <div className="dashboard-content">
//         <div className="sidebar">
//           <h2>Create New Project</h2>
//           <button onClick={handleCreateProject} className="create-button">
//             + Create Project
//           </button>
//           {showForm && (
//             <div className="form-container">
//               <h3>New Project</h3>
//               <form onSubmit={handleSubmit}>
//                 <div className="form-group">
//                   <label>Name:</label>
//                   <input type="text" name="name" value={newProject.name} onChange={handleChange} required />
//                 </div>
//                 <div className="form-group">
//                   <label>Description:</label>
//                   <textarea name="description" value={newProject.description} onChange={handleChange} required></textarea>
//                 </div>
//                 <div className="form-group">
//                   <label>Number of Contributors:</label>
//                   <input type="number" name="contributors" value={newProject.contributors} onChange={handleChange} min="1" required />
//                 </div>
//                 <div className="form-buttons">
//                   <button type="submit" className="save-button">Save Project</button>
//                   <button type="button" className="cancel-button" onClick={() => setShowForm(false)}>Cancel</button>
//                 </div>
//               </form>
//             </div>
//           )}
//         </div>

//         <div className="projects-section">
//           <h2 className="projects-heading">Previous Projects</h2>
//           <div className="projects-grid">
//             {projects.map((project, index) => (
//               <div key={index} className="project-card">
//                 <h3>{project.name}</h3>
//                 <p>{project.description}</p>
//                 <p className="contributors">Contributors: {project.contributors}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ProjectDashboard.css";

export default function ProjectDashboard() {
  const navigate = useNavigate(); // Initialize navigation

  const [projects, setProjects] = useState([
    { name: "AI Chatbot", description: "A chatbot using NLP for customer support.", contributors: 5 },
    { name: "E-commerce Website", description: "A full-stack MERN e-commerce app.", contributors: 3 },
    { name: "Finance Tracker", description: "A personal finance management tool.", contributors: 4 },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [newProject, setNewProject] = useState({
    name: "",
    description: "",
    contributors: 1,
  });

  const handleCreateProject = () => {
    setShowForm(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProject((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProjects([...projects, newProject]);
    setNewProject({ name: "", description: "", contributors: 1 });
    setShowForm(false);
  };

  const handleLogout = () => {
    // Delete token from cookies
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    
    // Redirect to login page
    navigate("/");
  };

//   return (
//     <div className="dashboard-container">
//       {/* Logout Button */}
//       {/* <div className="top-bar">
//         <button onClick={handleLogout} className="logout-button">
//           Logout
//         </button>
//       </div> */
//       <div className="top-bar">
//   <button onClick={handleLogout} className="logout-button">
//     Logout
//   </button>
// </div>}

//       <div className="dashboard-content">
//         <div className="sidebar">
//           <h2>Create New Project</h2>
//           <button onClick={handleCreateProject} className="create-button">
//             + Create Project
//           </button>
//           {showForm && (
//             <div className="form-container">
//               <h3>New Project</h3>
//               <form onSubmit={handleSubmit}>
//                 <div className="form-group">
//                   <label>Name:</label>
//                   <input type="text" name="name" value={newProject.name} onChange={handleChange} required />
//                 </div>
//                 <div className="form-group">
//                   <label>Description:</label>
//                   <textarea name="description" value={newProject.description} onChange={handleChange} required></textarea>
//                 </div>
//                 <div className="form-group">
//                   <label>Number of Contributors:</label>
//                   <input type="number" name="contributors" value={newProject.contributors} onChange={handleChange} min="1" required />
//                 </div>
//                 <div className="form-buttons">
//                   <button type="submit" className="save-button">Save Project</button>
//                   <button type="button" className="cancel-button" onClick={() => setShowForm(false)}>Cancel</button>
//                 </div>
//               </form>
//             </div>
//           )}
//         </div>

//         <div className="projects-section">
//           <h2 className="projects-heading">Previous Projects</h2>
//           <div className="projects-grid">
//             {projects.map((project, index) => (
//               <div key={index} className="project-card">
//                 <h3>{project.name}</h3>
//                 <p>{project.description}</p>
//                 <p className="contributors">Contributors: {project.contributors}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

return (
  <div className="dashboard-container">
    {/* Logout Button */}
    <div className="top-bar">
      <button onClick={handleLogout} className="logout-button">
        Logout
      </button>
    </div>

    <div className="dashboard-content">
      <div className="sidebar">
        <h2>Create New Project</h2>
        <button onClick={handleCreateProject} className="create-button">
          + Create Project
        </button>
        {showForm && (
          <div className="form-container">
            <h3>New Project</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Name:</label>
                <input
                  type="text"
                  name="name"
                  value={newProject.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Description:</label>
                <textarea
                  name="description"
                  value={newProject.description}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className="form-group">
                <label>Number of Contributors:</label>
                <input
                  type="number"
                  name="contributors"
                  value={newProject.contributors}
                  onChange={handleChange}
                  min="1"
                  required
                />
              </div>
              <div className="form-buttons">
                <button type="submit" className="save-button">
                  Save Project
                </button>
                <button
                  type="button"
                  className="cancel-button"
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}
      </div>

      <div className="projects-section">
        <h2 className="projects-heading">Previous Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <p className="contributors">Contributors: {project.contributors}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);
}