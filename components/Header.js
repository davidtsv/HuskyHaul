import Link from "next/link";
import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        Husky<span>Haul</span>
      </Link>

      <nav className={styles.nav}>
        <Link href="/guide">How It Works</Link>
        <Link href="/safety">Safety</Link>
        <Link href="/#signup" className={styles.join}>Join The Waitlist</Link>
      </nav>
    </header>
  );
}