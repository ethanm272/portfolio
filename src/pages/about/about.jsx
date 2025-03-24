import { Header } from "../../components/Header/Header";
import "./about.css";

export const About = () => {
  return (
    <>
      <Header pages={["home", "projects", "contact"]} />
      <div className="about-info">
        <div className="about-hero">
          <h1 className="about-h1">About</h1>
          <div className="button-container">
            <a
              className="about-btn btn-layered-3d btn-layered-3d--color"
              href="/Ethan_Mylett_Resume.pdf"
              download="Ethan_Mylett_Resume"
            >
              Resume
            </a>
            <a
              href="#experience"
              className="about-btn btn-layered-3d btn-layered-3d--color"
            >
              Jump to Experience & Skills
            </a>
          </div>
        </div>
        <p className="about-me-intro">
          Going from 0's and 1's to complex algorithms, designs, and crazy
          learning algoriths like neural nets has always fascinated me. Starting
          from when I built my first pc in junior high, I was never afraid to
          jump into a new realm, whether it be my first lines of code in high
          school or constructing complex neural nets in college.
          <br></br>
          <br></br>
          Fast forward to 2025 and even though I feel like I've tried it all --
          machine learning, web design, animation, database design, and more --
          I know there is still so much to learn. Everything (and everyone) I've
          come across has been an amazing learning experience, serving as
          stepping stones to what will soon be my first full-time job in the
          tech industry.
          <br></br>
          <br></br>
          What excites me about becoming a software engineer is that I'll be
          able to meaningfully contribute to a project that I believe in and
          want to succeed. It will set for me lofty goals to attain with new
          teammates and ever-evolving technologies. The pursuit of perfection,
          of a job well done is what I de sire and I can't wait to begin.
          <br></br>
          <br></br>I am an incredibly hard worker who is eager to learn and
          succeed in today's tech industry. My technical experience may be less
          impressive than that of my peers, but I know my strong attitude and
          can-do-anything mentality will shine through. My ability to create
          lasting relationships and outgoing personality is what makes me, me. I
          can't wait to collaborate and show to my coworkers just how much more
          I am than what shows on a resume.
        </p>
        <div>
          <h2 className="about-h2">Experience</h2>
          <p id="experience" className="about-me-experience">
            Degree from The Ohio State University in Computer Science,
            specializing in Database Systems and Data Analytics.
            <br></br>
            <br></br>Over 7 years of customer facing retail and restaurant
            experience
          </p>
        </div>
        <div>
          <h2 className="about-h2">Skills</h2>
          <div className="skills-table">
            <div className="table-column">
              <div className="table-head">Languages</div>
              <div className="table-item">Python</div>
              <div className="table-item">Java</div>
              <div className="table-item">JavaScript</div>
              <div className="table-item">HTML/CSS</div>
              <div className="table-item">C</div>
              <div className="table-item">C#</div>
              <div className="table-item">C++</div>
            </div>
            <div className="table-column">
              <div className="table-head">Frameworks</div>
              <div className="table-item">ReactJS</div>
              <div className="table-item">NextJS</div>
              <div className="table-item">NodeJS</div>
              <div className="table-item">.Net</div>
              <div className="table-item">Flask</div>
              <div className="table-item">PyTorch</div>
              <div className="table-item">Tensorflow</div>
            </div>
            <div className="table-column">
              <div className="table-head">Database</div>
              <div className="table-item">MySQL</div>
              <div className="table-item">PostgreSQL</div>
              <div className="table-item">MongoDB</div>
              <div className="table-item">Elasticsearch</div>
            </div>
            <div className="table-column">
              <div className="table-head">Other Tools</div>
              <div className="table-item">Git</div>
              <div className="table-item">LaTeX</div>
              <div className="table-item">Docker</div>
              <div className="table-item">VS Code</div>
              <div className="table-item">AWS</div>
              <div className="table-item">Microsoft Suite</div>
              <div className="table-item">Pandas</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
