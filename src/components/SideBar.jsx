import "../styles/SideBar.css";
import icon1 from "../assets/icon-1.svg";
import icon2 from "../assets/icon-2.svg";
import icon3 from "../assets/icon-3.svg";
import icon4 from "../assets/icon-4.svg";

export default function SideBar() {
  return (
    <nav className="sidebar">
      <ul>
        <li>
          <a href="/">
            <img src={icon1} alt="Yoga" />
          </a>
        </li>
        <li>
          <a href="/">
            <img src={icon2} alt="Natation" />
          </a>
        </li>
        <li>
          <a href="/">
            <img src={icon3} alt="Cyclisme" />
          </a>
        </li>
        <li>
          <a href="/">
            <img src={icon4} alt="Musculation" />
          </a>
        </li>
      </ul>
      <span>Copyright, SportSee 2020</span>
    </nav>
  );
}
