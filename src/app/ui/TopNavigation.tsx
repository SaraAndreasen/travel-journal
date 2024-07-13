"use client";

import Link from "next/link";
import styles from "./Home.module.css";
import GlobetrotterGramLogo from "./globetrotter-gram-logo";
import { NavLinksDesktop } from "./nav-links-desktop";
import { NavLinksMobile } from "./nav-links-mobile";

export default function TopNavigation() {
  return (
    <>
      <nav className={styles.nav}>
        <div className="logo align-baseline">
          <Link href={"/"} key={"index"}>
            <GlobetrotterGramLogo />
          </Link>
        </div>
        <div className="hidden md:block mt-3 align-center">
          <NavLinksDesktop />
        </div>
        <div className="md:hidden">
          <NavLinksMobile />
        </div>
      </nav>
    </>
  );
}
