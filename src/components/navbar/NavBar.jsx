import logo from "../../assets/logo.svg";
import styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <div className={styles.logoContainer}>
            <img src={logo} alt="SportSee Logo" className={styles.logo} />
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
