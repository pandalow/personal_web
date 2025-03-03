import Project from "./Project";

export default function Projects() {
    const projectList = [
      { title: "Neon Warrior", description: "A cyberpunk pixel art game" },
      { title: "Future City", description: "A 3D cyberpunk city simulation" },
      { title: "AI Companion", description: "An intelligent chatbot assistant" }
    ];
  
    return (
      <section class='nes-container with-title is-centered'>
        <h2 class='nes-text is-primary'>Portfolio</h2>
        <div className="project-list">
          {projectList.map((proj, index) => (
            <Project key={index} title={proj.title} description={proj.description} />
          ))}
        </div>
      </section>
    );
  }


