import React, { useState, useEffect } from "react";
import "./index.css";

// ==================== NAVBAR ====================
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

// ==================== HERO ====================
function Hero() {
  return (
    <section className="hero" id="etusivu">
      <div className="container">
        <div className="hero-content">
          <h1
            dangerouslySetInnerHTML={{
              __html: "Ammattimaista <span>putkityötä</span> luotettavasti",
            }}
          />
          <p>
            Olemme toimineet pääkaupunkiseudulla jo vuodesta 2005. Tarjoamme
            laadukasta putkityötä yksityisille, yrityksille ja kiinteistöjen
            hallinnoidoille. Nopea palvelu, reilut hinnat ja täysi tuki.
          </p>
          <div className="hero-buttons">
            <a href="#ota-yhteys" className="btn-primary">
              Pyydä ilmainen tarjous
            </a>
            <a href="#palvelut" className="btn-secondary">
              Tutustu palveluihimme
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">18+</div>
              <div className="stat-label">Vuoden kokemus</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">5 000+</div>
              <div className="stat-label">Tyytyväistä asiakasta</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Hätäpalvelu</div>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-card">
            <h3>🚨 Hätätilanne?</h3>
            <div className="emergency-badge">
              <span className="availability-dot" />
              Hätäpalvelu ympäri vuorokauden
            </div>
            <div className="phone-number">09 123 4567</div>
            <div className="phone-sub">Vastauksenodotus alle 30 min</div>
            <div className="availability">
              <span className="availability-dot" />
              Palvelussa nyt – Helsingin seutu
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== SERVICES ====================
function Services() {
  const services = [
    {
      icon: "🔧",
      title: "Putkiremontit",
      desc: "Toteutamme kaikki putkiremontit alusta loppuun. Vanhat putket uusitaan ammattitaidolla ja modernilla tekniikalla.",
    },
    {
      icon: "🚿",
      title: "Kylpyhuoneremontit",
      desc: "Suunnittelemme ja toteutamme unelmiesi kylpyhuoneen. Lattiakaivosta suihkuun – kaikki yhdellä sopimuksella.",
    },
    {
      icon: "🔥",
      title: "Lämmitysjärjestelmät",
      desc: "Lämpövesijärjestelmien asennus, huolto ja korjaus. Sähköiset ja nestekaasulämmittimet sekä patteriverkostot.",
    },
    {
      icon: "🚰",
      title: "Tukokset & viemärityöt",
      desc: "Poistamme tukokset nopeasti ja tehokkaasti. Viemärin kameraus ja painepuhdistus ammattilaisella kalustolla.",
    },
    {
      icon: "💧",
      title: "Vuotavien putkien korjaus",
      desc: "Löydämme ja korjaamme vuodot nopeasti. Käytämme edistynyttä vuotolokantekniikkaa vaurioiden minimoimiseksi.",
    },
    {
      icon: "🏗️",
      title: "Uudet rakennukset",
      desc: "Koko rakennuksen putkistot suunnittelusta asennukseen. Yksityis- ja kerrostalojen putkistot kaikkiin tarpeisiin.",
    },
  ];

  return (
    <section className="services" id="palvelut">
      <div className="container">
        <div className="section-title">
          <h2>Palvelumme</h2>
          <p>Laaja valikoima putkipalveluja yksityisille ja yrityksille</p>
        </div>
        <div className="services-grid">
          {services.map((service, i) => (
            <div className="service-card" key={i}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==================== ABOUT ====================
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

// ==================== WHY US ====================
function WhyUs() {
  const reasons = [
    {
      icon: "⚡",
      title: "Nopea reagointi",
      desc: "Hätätilanteissa paikalla nopeasti. Vastauksenodotus alle 30 minuuttia.",
    },
    {
      icon: "💰",
      title: "Reilu hinnoittelu",
      desc: "Läpinäkyvä hintakartoitus ilman piilokuluja. Tarjous aina kirjallisena.",
    },
    {
      icon: "🛡️",
      title: "Takuu työhön",
      desc: "Kaikkiin töihemme annamme 2 vuoden takuun. Laatu on meille tärkeää.",
    },
    {
      icon: "⭐",
      title: "Asiakastyytyväisyys",
      desc: "Yli 5 000 tyytyväistä asiakasta. Arvostelut keskiarvolla 4.9/5.",
    },
  ];

  return (
    <section className="why-us">
      <div className="container">
        <div className="section-title">
          <h2>Miksi valita meidät?</h2>
          <p>Asiakkaamme suosittelevat meitä näistä syistä</p>
        </div>
        <div className="why-grid">
          {reasons.map((r, i) => (
            <div className="why-card" key={i}>
              <div className="why-icon">{r.icon}</div>
              <h3>{r.title}</h3>
              <p>{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==================== TESTIMONIALS ====================
function Testimonials() {
  const testimonials = [
    {
      stars: "★★★★★",
      text: "PutkiPro hoiti keittiömme putkiremontin erinomaisesti. Työ tehtiin ajallaan ja budjetissa. Suosittelen lämpimästi!",
      name: "Matti Virtanen",
      location: "Helsinki",
      initials: "MV",
    },
    {
      stars: "★★★★★",
      text: "Hätätilanne lauantai-iltana – putkimies paikalla puolessa tunnissa. Korjasivat vuodon nopeasti ja ammattimaisesti.",
      name: "Liisa Mäkinen",
      location: "Espoo",
      initials: "LM",
    },
    {
      stars: "★★★★★",
      text: "Uuden talomme putkistot toteutettu moitteettomasti. Huolellinen ja siisti työ. Hinta-laatusuhde erinomainen.",
      name: "Jussi Nieminen",
      location: "Vantaa",
      initials: "JN",
    },
  ];

  return (
    <section className="testimonials" id="palautteet">
      <div className="container">
        <div className="section-title">
          <h2>Asiakaspalautteet</h2>
          <p>Näin asiakkaamme kuvaavat kokemustaan</p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div className="testimonial-card" key={i}>
              <div className="testimonial-stars">{t.stars}</div>
              <p>&ldquo;{t.text}&rdquo;</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">{t.initials}</div>
                <div>
                  <div className="testimonial-name">{t.name}</div>
                  <div className="testimonial-location">{t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==================== CONTACT FORM ====================
function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
    urgency: "normaali",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Nimi on pakollinen";
    if (!formData.phone.trim()) newErrors.phone = "Puhelinnumero on pakollinen";
    if (!formData.email.trim()) newErrors.email = "Sähköposti on pakollinen";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Syötä kelvollinen sähköpostiosoite";
    if (!formData.service) newErrors.service = "Valitse palvelu";
    if (!formData.message.trim())
      newErrors.message = "Kuvaile lyhyesti tarvetta";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "",
        message: "",
        urgency: "normaali",
      });
    }, 1500);
  };

  const serviceOptions = [
    { value: "", label: "-- Valitse palvelu --" },
    { value: "putkiremontti", label: "Putkiremontti" },
    { value: "kylpyhuone", label: "Kylpyhuoneremontti" },
    { value: "laamitys", label: "Lämmitysjärjestelmä" },
    { value: "tukos", label: "Tukos / viemärityö" },
    { value: "vuoto", label: "Vuodon korjaus" },
    { value: "uusi-rakennus", label: "Uusi rakennus" },
    { value: "muu", label: "Muut" },
  ];

  if (submitted) {
    return (
      <section className="contact" id="ota-yhteys">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Ota yhteyttä</h2>
              <p>
                Olemme avoinna arkisin klo 7–18. Hätätilanteessa soita ympäri
                vuorokauden numeroomme.
              </p>
              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-item-icon">📞</div>
                  <div className="contact-item-text">
                    <h4>Puhelin</h4>
                    <p>
                      <a href="tel:+35891234567">09 123 4567</a> (24/7)
                    </p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-item-icon">📧</div>
                  <div className="contact-item-text">
                    <h4>Sähköposti</h4>
                    <p>
                      <a href="mailto:info@putkipro.fi">info@putkipro.fi</a>
                    </p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-item-icon">📍</div>
                  <div className="contact-item-text">
                    <h4>Osoite</h4>
                    <p>Teollisuuskatu 12, 00510 Helsinki</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-item-icon">🕐</div>
                  <div className="contact-item-text">
                    <h4>Avoinna</h4>
                    <p>Ma–Pe 7:00–18:00 · Hätä 24/7</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-form-wrapper">
              <div className="form-success">
                <div className="success-icon">✓</div>
                <h3>Viesti lähetetty!</h3>
                <p>
                  Kiitos viestistä. Olemme yhteydessä sinuun mahdollisimman
                  pian, yleensä saman työpäivän aikana.
                </p>
                <br />
                <button
                  className="btn-primary"
                  onClick={() => setSubmitted(false)}
                >
                  Lähetä uusi viesti
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="contact" id="ota-yhteys">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <h2>Ota yhteyttä</h2>
            <p>
              Kerro tarpeestasi niin palaamme asiaan nopeasti. Voimme tarjota
              myös paikanpäälle tulleena tarkastuksen ja kirjallisen tarjouksen.
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-item-icon">📞</div>
                <div className="contact-item-text">
                  <h4>Puhelin</h4>
                  <p>
                    <a href="tel:+35891234567">09 123 4567</a> (24/7)
                  </p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-item-icon">📧</div>
                <div className="contact-item-text">
                  <h4>Sähköposti</h4>
                  <p>
                    <a href="mailto:info@putkipro.fi">info@putkipro.fi</a>
                  </p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-item-icon">📍</div>
                <div className="contact-item-text">
                  <h4>Osoite</h4>
                  <p>Teollisuuskatu 12, 00510 Helsinki</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-item-icon">🕐</div>
                <div className="contact-item-text">
                  <h4>Avoinna</h4>
                  <p>Ma–Pe 7:00–18:00 · Hätä 24/7</p>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-form-wrapper">
            <h3>Lähetä viesti</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>
                    Nimi <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Etunimi Sukunimi"
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? "error" : ""}
                  />
                  {errors.name && (
                    <div className="error-message">{errors.name}</div>
                  )}
                </div>
                <div className="form-group">
                  <label>
                    Puhelinnumero <span className="required">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="040 123 4567"
                    value={formData.phone}
                    onChange={handleChange}
                    className={errors.phone ? "error" : ""}
                  />
                  {errors.phone && (
                    <div className="error-message">{errors.phone}</div>
                  )}
                </div>
              </div>
              <div className="form-group">
                <label>
                  Sähköposti <span className="required">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="nimi@esimerkki.fi"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? "error" : ""}
                />
                {errors.email && (
                  <div className="error-message">{errors.email}</div>
                )}
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>
                    Palvelu <span className="required">*</span>
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={errors.service ? "error" : ""}
                  >
                    {serviceOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <div className="error-message">{errors.service}</div>
                  )}
                </div>
                <div className="form-group">
                  <label>Kiireellisyys</label>
                  <select
                    name="urgency"
                    value={formData.urgency}
                    onChange={handleChange}
                  >
                    <option value="normaali">Normaali</option>
                    <option value="kiireellinen">Kiireellinen</option>
                    <option value="hatta">Hätätilanne!</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label>
                  Viesti <span className="required">*</span>
                </label>
                <textarea
                  name="message"
                  placeholder="Kuvaile lyhyesti mitä tarvitset..."
                  value={formData.message}
                  onChange={handleChange}
                  className={errors.message ? "error" : ""}
                />
                {errors.message && (
                  <div className="error-message">{errors.message}</div>
                )}
              </div>
              <button
                type="submit"
                className="form-submit-btn"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span
                      style={{
                        display: "inline-block",
                        width: 18,
                        height: 18,
                        border: "2px solid rgba(255,255,255,0.3)",
                        borderTopColor: "#fff",
                        borderRadius: "50%",
                        animation: "spin 0.8s linear infinite",
                      }}
                    />
                    Lähetetään...
                  </>
                ) : (
                  "Lähetä viesti →"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

// Add spin animation
const styleSheet = document.createElement("style");
styleSheet.textContent = `@keyframes spin { to { transform: rotate(360deg); } }`;
document.head.appendChild(styleSheet);

// ==================== FOOTER ====================
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

// ==================== APP ====================
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <WhyUs />
      <Testimonials />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
