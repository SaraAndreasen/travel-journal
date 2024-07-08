import NavLinks from "./nav-links";
import styles from "./Home.module.css";
import GlobetrotterGramLogo from "./globetrotter-gram-logo";

export default function TopNavigation() {
  return (
    <>
      <nav className={styles.nav}>
        <div className="logo align-baseline p-1.5">
          <GlobetrotterGramLogo />
        </div>
        <div className="nav-links">
          <NavLinks />
        </div>
      </nav>
    </>
  );
}
