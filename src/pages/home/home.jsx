import { Id_Badge } from "../../components/Id_Card";
import { RepeatTypewriter } from "../../components/RepeatTypewriter";
import { Header } from "../../components/Header/Header";
import "./home.css";

const typewriterMessages = [
  "welcome to Ethan's portfolio",
  "building smarter software",
  "in my element - <div>",
  "machine learning enthusiast",
  "the picasso of front-end",
  "data-driven decision maker",
  "breaking loops, not promises",
];

export const Home = () => {
  return (
    <div className="home-page">
      <Header pages={["projects", "about", "contact"]} />
      <RepeatTypewriter texts={typewriterMessages} />
      <Id_Badge />
    </div>
  );
};
