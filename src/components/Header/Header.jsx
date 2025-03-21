import { SocialsLinks } from "../SocialsLinks";
import { Menu } from "../Menu";
import "./Header.css";

export const Header = ({ pages }) => {
  return (
    <div className="header">
      <SocialsLinks />
      <Menu pages={pages} />
    </div>
  );
};
