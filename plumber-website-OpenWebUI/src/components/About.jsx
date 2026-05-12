import React from "react";

function About() {
  return (
    <section className="about" id="meista">
      <div className="container">
        <div className="about-grid">
          <div className="about-image">
            <div className="about-image-main">🏠</div>
            <div className="experience-badge">
              <div className="years">18+</div>
              <div className="years-label">vuoden kokemus</div>
            </div>
          </div>
          <div className="about-content">
            <h2>Luotettava putkiliike Helsingin seudulta</h2>
            <p>
              <strong>PutkiPro Oy</strong> on perustettu vuonna 2005, ja olemme
              siitä lähtien palveleet satoja asiakkaita pääkaupunkiseudulla.
              Yrityksemme perustuu ammattitaitoon, reiluuteen ja
              asiakaskeskeiseen palveluun.
            </p>
            <p>
              Tiimimme koostuu kokeneista putki- ja lämpötekniikan
              ammattilaisista, jotka pitävät itsensä ajan tasalla uusimmista
              tekniikoista ja rakentamismääräyksistä. Olemme toimittaneet
              laadukasta putkityötä yksityisasunnoissa, liikekiinteistöissä ja
              julkisissa rakennuksissa.
            </p>
            <p>
              Kaikki työmme suoritetaan sitoutuen Suomen
              rakentamismääräyskokoelmaan ja alan hyväksi havaittuihin
              käytäntöihin. Tarjoamme työllemme kattavan takuun ja olemme aina
              saatavilla jälkipalveluun.
            </p>
            <div className="about-features">
              <div className="about-feature">
                <span className="check">✓</span>
                Lupa- ja sertifioidut asentajat
              </div>
              <div className="about-feature">
                <span className="check">✓</span>
                Kirjallinen tarjous aina
              </div>
              <div className="about-feature">
                <span className="check">✓</span>
                24/7 hätäpalvelu
              </div>
              <div className="about-feature">
                <span className="check">✓</span>2 vuoden takuu työhön
              </div>
              <div className="about-feature">
                <span className="check">✓</span>
                Reilu ja läpinäkyvä hinnoittelu
              </div>
              <div className="about-feature">
                <span className="check">✓</span>
                Siisti ja huolellinen työ
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
