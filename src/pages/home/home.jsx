import { Id_Badge } from "../../components/Id_Card";
import { Typewriter } from '../../components/Typewriter';
import "./home.css";

const typewriterMessages = [
  'welcome to Ethan\'s portfolio',
  'building smarter software',
  'in my element - <div>',
  'machine learning enthusiast',
  'the picasso of front-end',
  'turning ☕ into 💻',
  'data-driven decision maker',
  'breaking loops, not promises'
]

export const Home = () => {
  return (
    <div className="home-page">
      <Typewriter texts={typewriterMessages}/>
      <Id_Badge />
    </div>
  );
};
