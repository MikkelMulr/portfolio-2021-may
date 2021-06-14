import navStyle from '../styles/Nav.module.css'
import Link from 'next/link'


export default function Nav() {
  return (
    <nav className={navStyle.nav}>
      <div className={navStyle.buffer}></div>
      <div className={navStyle.LogoContainer}>
        <Link href="/" className={navStyle.Logo}>
          <div className={navStyle.Logo}></div>        
        </Link>
      </div>
      <ul>
        <li>
          <Link href='/about'>About</Link>
        </li>
        <li>
          <Link href='/projects'>Projects</Link>
        </li>
        <li>
          <Link href='/contact'>Contact</Link>
        </li>
      </ul>
    </nav>
  )
}
