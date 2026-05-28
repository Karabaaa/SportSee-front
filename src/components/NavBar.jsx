import logo from "../assets/logo.svg";
import "../styles/NavBar.css";

export default function NavBar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <div className="logo-container">
            <img src={logo} alt="SportSee Logo" className="logo" />
          </div>
        </li>
        <li>
          <a href="/">Accueil</a>
        </li>
        <li>
          <a href="/">Profil</a>
        </li>
        <li>
          <a href="/">Réglage</a>
        </li>
        <li>
          <a href="/">Communauté</a>
        </li>
      </ul>
    </nav>
  );
}
