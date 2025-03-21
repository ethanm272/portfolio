import { SocialsLinks } from "../SocialsLinks";
import { Menu } from "../Menu";
import "./Header.css";

export const Header = () => {
  return (
    <div className="header">
      <SocialsLinks />
      <Menu />
    </div>
  );
};
