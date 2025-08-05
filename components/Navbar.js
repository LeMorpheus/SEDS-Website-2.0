import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <>
      {/* Mobile Menu */}
      <div className={`menu ${menuOpen ? 'open' : ''}`} id="menu">
        <div className="close" onClick={closeMenu}>
          <i className="fa-solid fa-xmark"></i>
        </div>
        <Link href="/about">
          <a className="nav-ele">Who We Are</a>
        </Link>
        <Link href="/teams">
          <a className="nav-ele">Team</a>
        </Link>
        <a
          onClick={toggleDropdown}
          className="nav-ele mobile-projects"
          href="#!"
        >
          Projects
        </a>
        <div className={`mobile-dropdown ${dropdownOpen ? 'active' : ''}`} id="mobile-dropdown">
          <Link href="/sacup">
            <a className="nav-project">Rocket</a>
          </Link>
          <Link href="/cansat">
            <a className="nav-project">CanSat</a>
          </Link>
          <Link href="/cubesat">
            <a className="nav-project">CubeSat</a>
          </Link>
          <Link href="/archangel">
            <a className="nav-project">R&D</a>
          </Link>
        </div>
        <Link href="/sponsors">
          <a className="nav-ele">Sponsors</a>
        </Link>
        <Link href="/posts">
          <a className="nav-ele">Blog</a>
        </Link>
        <Link href="/contact">
          <a className="nav-ele">Contact</a>
        </Link>
      </div>

      {/* Main Navigation */}
      <nav className="navbar row">
        <i
          id="menu-open"
          onClick={toggleMenu}
          className="nav-ele fa-solid fa-bars"
        ></i>
        <Link href="/sacup">
          <a className="nav-ele">Rocket</a>
        </Link>
        <Link href="/cansat">
          <a className="nav-ele">CanSat</a>
        </Link>
        <Link href="/">
          <a>
            <Image src="/seds_logo_w.png" alt="SEDS Logo" width={100} height={50} />
          </a>
        </Link>
        <Link href="/cubesat">
          <a className="nav-ele">CubeSat</a>
        </Link>
        <Link href="/archangel">
          <a className="nav-ele">R&D</a>
        </Link>
        <i className="nav-ele fa fa-search" aria-hidden="true"></i>
      </nav>
    </>
  );
}
