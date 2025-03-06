import Project from "./Project";
import projectList from "../contents/protfolio.json";

export default function Projects() {
  return (
    <section className="nes-container with-title text-center p-6 mt-6 mb-6">
      <h2 className="title text-xl font-bold">Portfolio</h2>

      {/* 横向滑动 */}
      <div className="overflow-x-auto">
        <div className="flex space-x-6 p-4">
          {projectList.map((proj, index) => (
            <Project 
              key={index} 
              title={proj.title} 
              description={proj.description} 
              githubLink={proj.githubLink} 
              image={proj.image} 
              logo={proj.logo} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
