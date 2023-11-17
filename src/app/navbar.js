import Link from 'next/link';
import styles from './navbar.module.css';

export default function NavBar() {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/page1">Visit</Link>
        </li>
        <li>
          <Link href="/page2">Explore</Link>
        </li>
        <li>
          <Link href="/page3">Learn</Link>
        </li>
        <li>
          <Link href="/page4">Support</Link>
        </li>
        <li>
          <Link href="/page5">About</Link>
        </li>
      </ul>
    </nav>
  );
}
