const Projects = () => {
  const projectsList = [
    {
      id: 1,
      title: "Legal Document RAG System",
      description: "A retrieval-augmented generation system to extract necessary permits from legal documents.",
      link: "", // Add your project link here
      github: "", // Add your GitHub repo link here
    },
    {
      id: 2,
      title: "Confidential Data Processing",
      description: "Backend lead for secure analysis of unstructured text data in social work research.",
      link: "", // Add your project link here
      github: "", // Add your GitHub repo link here
    },
    // Add more projects here
  ];

  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projectsList.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                GitHub Repo
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects; 