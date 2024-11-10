import React, { useState } from "react";
import { createProject } from "./services/projectService";

function Notes() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [budget, setBudget] = useState('');
  const [timelimit, setTimelimit] = useState('');
  const [projects, setProjects] = useState([]);

  const addProject = async () => {
    const result = await createProject(name, description, 1, budget, timelimit);
    if (result.success) {
      setProjects([...projects, result.project]);
    }
  };

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Project Name" />
      <input value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
      <input value={budget} onChange={(e) => setBudget(e.target.value)} placeholder="Budget" />
      <input value={timelimit} onChange={(e) => setTimelimit(e.target.value)} placeholder="Time Limit" />
      <button onClick={addProject}>Add Project</button>
      <div>
        {projects.map((project, index) => (
          <div key={index}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notes;