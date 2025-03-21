import { Header } from "../../components/Header/Header";

export const About = () => {
  return (
    <>
      <Header pages={["home", "projects", "contact"]} />
      <div className="about-info">
        {/** animated element
         * About
         * short desc bold
         * photo
         */}
        <p className="about-me-intro">{/** paragraph(s) */}</p>
        <p className="about-me-quote">{/** quote  */}</p>
        <p className="about-me-experience">{/** exp */}</p>
        <p className="about-me-skills">{/** skills*/}</p>
        <div className="about-me-resume">{/** resume */}</div>
      </div>
    </>
  );
};
