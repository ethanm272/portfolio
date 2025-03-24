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
  title = "my-app";
  projectImage = "/Lanyard_Image.png";
  hasGitHubLink = true;
  hasSiteLink = true;
  siteLink = "https://tides-1.vercel.app";
  gitHubLink = "https://github.com/ethanm272";
  technologies = ["python", "rust", "java"];
  projectDescription =
    "This is an app that can tell you the tides. It is made in react with the help of the NOAA CO-OPS API. It currently services the state of Florida. Local storage is used to store tide stations when not on site.";
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
        {technologies.map((technology) => {
          return <div className="project-technology">{technology}</div>;
        })}
      </div>
      <div className="project-description">{projectDescription}</div>
    </div>
  );
};
