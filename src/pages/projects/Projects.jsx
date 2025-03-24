import { Header } from "../../components/Header/Header";
import { ProjectCard } from "../../components/ProjectCard/ProjectCard";
import "./Projects.css";

export const Projects = () => {
  return (
    <>
      <Header pages={["home", "about", "contact"]} />
      <div className="projects-container">
        <div className="container-header-description">
          <div className="container-header">
            <span className="blue">/</span>projects
            <span className="blue">.</span>
          </div>
          <div className="container-description">
            A selection of works I've taken on in the past.
          </div>
        </div>
        <div className="projects-list">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </>
  );
};
