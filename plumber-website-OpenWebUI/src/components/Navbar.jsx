import React, { useState, useEffect } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Etusivu", href: "#etusivu" },
    { label: "Palvelut", href: "#palvelut" },
    { label: "Meistä", href: "#meista" },
    { label: "Asiakaspalautteet", href: "#palautteet" },
    { label: "Ota yhteyttä", href: "#ota-yhteys" },
  ];

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="container">
          <a href="#etusivu" className="logo">
            <div className="logo-icon">🔧</div>
            PutkiPro Oy
          </a>
          <div className="nav-links">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
            <a href="#ota-yhteys" className="nav-cta">
              Pyydä tarjous
            </a>
          </div>
          <button className="mobile-toggle" onClick={() => setMobileOpen(true)}>
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>
      {mobileOpen && (
        <div className="mobile-menu">
          <button className="close-btn" onClick={() => setMobileOpen(false)}>
            ✕
          </button>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}

export default Navbar;
