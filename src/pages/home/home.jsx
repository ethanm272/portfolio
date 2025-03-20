import { Id_Badge } from "../../components/Id_Card";
import { RepeatTypewriter } from "../../components/RepeatTypewriter";
import { Menu } from "../../components/Menu";
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
      <Menu />
      <RepeatTypewriter texts={typewriterMessages} />
      <Id_Badge />
    </div>
  );
};
