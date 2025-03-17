import { Id_Badge } from "../../components/Id_Card";
import { Typewriter } from '../../components/Typewriter';
import "./home.css";

const typewriter_messages = [
  '',
]

export const Home = () => {
  return (
    <div className="home-page">
      <Typewriter texts={['hello friends', 'my name is ethan']}/>
      <Id_Badge />
    </div>
  );
};
