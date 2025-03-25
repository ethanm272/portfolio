import { Header } from "../../components/Header/Header";
import { ProjectCard } from "../../components/ProjectCard/ProjectCard";
import "./Projects.css";
import data from "../../data/projects.json";

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
          {data.projects.map((project, index) => {
            return (
              <ProjectCard
                key={index}
                title={project.title}
                hasGitHubLink={project.hasGitHubLink}
                gitHubLink={project.gitHubLink}
                hasSiteLink={project.hasSiteLink}
                siteLink={project.siteLink}
                technologies={project.technologies}
                projectDescription={project.projectDescription}
                projectImage={project.projectImage}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
