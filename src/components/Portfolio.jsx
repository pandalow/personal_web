import Project from "./Project";

function Portfolio() {
  return (
    <div className="flex flex-col flex-grow nes-container with-title is-centered">
      <h2 className="title text-lg font-bold">Portfolio</h2>
      <Project />
    </div>
  );
}

export default Portfolio;