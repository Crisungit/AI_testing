import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo">
              <div className="logo-icon">🔧</div>
              PutkiPro Oy
            </div>
            <p>
              Ammattimaista putkityötä pääkaupunkiseudulla vuodesta 2005.
              Luotettava kumppani kaikissa putki- ja lämpötekniikan töissä.
            </p>
          </div>
          <div>
            <h4>Palvelut</h4>
            <ul className="footer-links">
              <li>
                <a href="#palvelut">Putkiremontit</a>
              </li>
              <li>
                <a href="#palvelut">Kylpyhuoneremontit</a>
              </li>
              <li>
                <a href="#palvelut">Lämmitysjärjestelmät</a>
              </li>
              <li>
                <a href="#palvelut">Tukokset & viemärityöt</a>
              </li>
              <li>
                <a href="#palvelut">Vuodon korjaus</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Yhtiö</h4>
            <ul className="footer-links">
              <li>
                <a href="#meista">Meistä</a>
              </li>
              <li>
                <a href="#palautteet">Asiakaspalautteet</a>
              </li>
              <li>
                <a href="#ota-yhteys">Ota yhteyttä</a>
              </li>
              <li>
                <a href="#">Työpaikat</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Yhteystiedot</h4>
            <ul className="footer-links">
              <li>
                <a href="tel:+35891234567">09 123 4567</a>
              </li>
              <li>
                <a href="mailto:info@putkipro.fi">info@putkipro.fi</a>
              </li>
              <li>Teollisuuskatu 12</li>
              <li>00510 Helsinki</li>
              <li style={{ marginTop: 10 }}>
                <a href="#">Y-tunnus: 1234567-8</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2024 PutkiPro Oy. Kaikki oikeudet pidätetään.</span>
          <div style={{ display: "flex", gap: 20 }}>
            <a href="#">Yksityisyyskäytäntö</a>
            <a href="#">Käyttöehdot</a>
            <a href="#">Evästekäytäntö</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
