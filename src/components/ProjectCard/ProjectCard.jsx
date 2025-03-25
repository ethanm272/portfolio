import "./ProjectCard.css";

export const ProjectCard = ({
  title,
  hasGitHubLink,
  gitHubLink,
  hasSiteLink,
  siteLink,
  technologies,
  projectDescription,
  projectImage,
}) => {
  return (
    <div className="project-card-container">
      <img className="project-image" src={projectImage} alt="Project Image" />
      <div className="title-link-container">
        <div className="project-title">{title}</div>
        <div className="link-container">
          {hasGitHubLink && (
            <a href={gitHubLink} target="_blank">
              <img
                className="link-icon"
                src="icons8-github-30.png"
                alt="github"
                height="30"
                width="30"
              />
            </a>
          )}
          {hasSiteLink && (
            <a href={siteLink} target="_blank">
              <img
                className="link-icon"
                src="icons8-link-24.png"
                alt="site link"
                height="24"
                width="24"
              />
            </a>
          )}
        </div>
      </div>
      <div className="project-technologies">
        {technologies.map((technology, index) => {
          return (
            <div key={index} className="project-technology">
              {technology}
            </div>
          );
        })}
      </div>
      <div className="project-description">{projectDescription}</div>
    </div>
  );
};
