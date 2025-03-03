import Projects from "./Projects";
import Resume from "./Resume";
import Contact from "./Contact";

export default function AboutMe() {
    return (
        <div className="flex flex-col flex-grow">
            <Resume />
            <Projects />
            <Contact />
        </div>
    );
}