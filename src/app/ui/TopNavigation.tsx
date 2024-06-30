import NavLinks from "./nav-links";
import styles from "./Home.module.css";

export default function TopNavigation() {
  return (
    <>
      <nav className={styles.nav}>
        <div className="logo align-baseline p-1.5">logo here</div>
        <div className="nav-links">
          <NavLinks />
        </div>
      </nav>
    </>
  );
}
