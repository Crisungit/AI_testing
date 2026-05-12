import { useState } from 'react'
import './App.css'

function App() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormState(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formState)
    setFormSubmitted(true)
    setTimeout(() => {
      setFormSubmitted(false)
      setFormState({ name: '', email: '', phone: '', service: '', message: '' })
    }, 5000)
  }

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
    setMobileMenuOpen(false)
  }

  return (
    <div className="app">
      {/* Header */}
      <header className="header" id="header">
        <div className="container header-inner">
          <div className="logo">
            <div className="logo-icon">
              <svg viewBox="0 0 40 40" width="40" height="40">
                <circle cx="20" cy="20" r="18" fill="#1a5276" />
                <path d="M12 20 Q16 14 20 20 Q24 26 28 20" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                <circle cx="20" cy="14" r="3" fill="#f39c12" />
              </svg>
            </div>
            <span className="logo-text">
              <span className="logo-main">PutkiPro</span>
              <span className="logo-sub">Luotettava putkityö</span>
            </span>
          </div>
          <nav className={`nav ${mobileMenuOpen ? 'nav-open' : ''}`}>
            <a href="#etusivu" onClick={(e) => { e.preventDefault(); scrollToSection('etusivu'); }}>Etusivu</a>
            <a href="#palvelut" onClick={(e) => { e.preventDefault(); scrollToSection('palvelut'); }}>Palvelut</a>
            <a href="#meista" onClick={(e) => { e.preventDefault(); scrollToSection('meista'); }}>Meistä</a>
            <a href="#asiakkaita" onClick={(e) => { e.preventDefault(); scrollToSection('asiakkaita'); }}>Asiakaspalautteet</a>
            <a href="#ota-yhteytta" className="nav-cta" onClick={(e) => { e.preventDefault(); scrollToSection('ota-yhteytta'); }}>Ota yhteyttä</a>
          </nav>
          <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Valikko">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="etusivu" className="hero">
        <div className="hero-overlay">
          <div className="container hero-content">
            <div className="hero-badge">✓ Lisensoitu & Vakuutettu</div>
            <h1 className="hero-title">Ammattimaiset Putkityöt<br />Luotettavasti Oikeaan Aikaan</h1>
            <p className="hero-subtitle">
              Olemme palvelleet Helsingin ja Uudenmaan alueen kotitalouksia ja yrityksiä jo vuodesta 2005.
              Tarjoamme laadukkaita putkipalveluja, joihin voit luottaa.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={() => scrollToSection('ota-yhteytta')}>
                Pyydä Ilmainen Tarjous
              </button>
              <a href="tel:+35891234567" className="btn btn-phone">
                📞 09 123 4567
              </a>
            </div>
            <div className="trust-badges">
              <div className="badge">
                <span className="badge-icon">🛡️</span>
                <span>20+ vuotta kokemusta</span>
              </div>
              <div className="badge">
                <span className="badge-icon">⚡</span>
                <span>24/7 hätäpalvelu</span>
              </div>
              <div className="badge">
                <span className="badge-icon">⭐</span>
                <span>5000+ tyytyväistä asiakasta</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Banner */}
      <div className="emergency-banner">
        <div className="container emergency-inner">
          <span>🚨 Putkiremontti? Soita heti: <a href="tel:+358401234567"><strong>040 123 4567</strong></a></span>
          <span>Palvelemme ympäri vuorokauden, myös pyhät</span>
        </div>
      </div>

      {/* Services Section */}
      <section id="palvelut" className="services">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Palvelumme</span>
            <h2>Kattavat Putkipalvelut Kaikkiin Tarpeisiisi</h2>
            <p>Tarjoamme laajan valikoiman putkipalveluja kotitalouksille ja yrityksille. Ammattitaitomme ja kokemuksemme takaavat laadukkaan lopputuloksen.</p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon-wrapper">
                <svg viewBox="0 0 48 48" width="48" height="48" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M8 24h32M24 8v32" strokeLinecap="round" />
                  <circle cx="24" cy="24" r="8" />
                </svg>
              </div>
              <h3>Putkiasennukset</h3>
              <p>Asennamme vesiputkistoja, viemäreitä ja jätevesijärjestelmiä ammattitaidolla. Uudet rakennukset ja remontit.</p>
              <ul className="service-features">
                <li>✓ Vesiputkistojen asennus</li>
                <li>✓ Viemäröinti</li>
                <li>✓ Jätevesijärjestelmät</li>
              </ul>
            </div>
            <div className="service-card">
              <div className="service-icon-wrapper">
                <svg viewBox="0 0 48 48" width="48" height="48" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="24" cy="24" r="16" />
                  <path d="M24 16v8l6 4" strokeLinecap="round" />
                </svg>
              </div>
              <h3>Vianetsintä & Korjaukset</h3>
              <p>Etsimme ja korjaamme vuodot, tukokset ja muut putkistoviat nopeasti ja tehokkaasti.</p>
              <ul className="service-features">
                <li>✓ Vuodonetsintä</li>
                <li>✓ Tukosten puhdistus</li>
                <li>✓ Putkiston korjaus</li>
              </ul>
            </div>
            <div className="service-card">
              <div className="service-icon-wrapper">
                <svg viewBox="0 0 48 48" width="48" height="48" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="8" y="8" width="32" height="32" rx="4" />
                  <path d="M16 24h16M24 16v16" strokeLinecap="round" />
                </svg>
              </div>
              <h3>Kylpyhuone- & Keittiöremontit</h3>
              <p>Kunnostamme ja remontoimme kylpyhuoneet ja keittiöt. Kokonaisvaltainen palvelu alusta loppuun.</p>
              <ul className="service-features">
                <li>✓ Kylpyhuoneremontit</li>
                <li>✓ Keittiöremontit</li>
                <li>✓ Saniteettiasennukset</li>
              </ul>
            </div>
            <div className="service-card">
              <div className="service-icon-wrapper">
                <svg viewBox="0 0 48 48" width="48" height="48" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 36V20l12-12 12 12v16a4 4 0 0 1-4 4H16a4 4 0 0 1-4-4z" />
                  <path d="M20 36v-8h8v8" />
                </svg>
              </div>
              <h3>Lämmitysjärjestelmät</h3>
              <p>Lämpövesijärjestelmien asennus, huolto ja korjaus. Patterit, kaukolämpö ja maalämpö.</p>
              <ul className="service-features">
                <li>✓ Patteri-asennukset</li>
                <li>✓ Kaukolämpöliitännät</li>
                <li>✓ Lämpövesijärjestelmät</li>
              </ul>
            </div>
            <div className="service-card">
              <div className="service-icon-wrapper">
                <svg viewBox="0 0 48 48" width="48" height="48" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M24 4l4 8h8l-6 6 2 10-8-4-8 4 2-10-6-6h8z" />
                </svg>
              </div>
              <h3>Saneeraukset</h3>
              <p>Putkiston saneeraus ja uusiminen. Varmistamme että putkistosi on kunnossa vuosiksi eteenpäin.</p>
              <ul className="service-features">
                <li>✓ Putkiston uusiminen</li>
                <li>✓ Saneerausprojektit</li>
                <li>✓ Rakennusten kunnostus</li>
              </ul>
            </div>
            <div className="service-card service-card-highlight">
              <div className="service-icon-wrapper">
                <svg viewBox="0 0 48 48" width="48" height="48" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="24" cy="24" r="18" />
                  <path d="M16 24l4 4 12-12" strokeLinecap="round" />
                </svg>
              </div>
              <h3>24/7 Hätäpalvelu</h3>
              <p>Putkiremontit eivät odota. Palvelemme ympäri vuorokauden, myös viettöpäivinä.</p>
              <ul className="service-features">
                <li>✓ Paikalla 30 min içinde</li>
                <li>✓ Yö- ja viikkopäiväpalvelu</li>
                <li>✓ Nopea vianetsintä</li>
              </ul>
              <a href="tel:+358401234567" className="btn btn-sm btn-warning">Soita: 040 123 4567</a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-us">
        <div className="container">
          <div className="why-us-grid">
            <div className="why-us-content">
              <span className="section-tag">Miksi Valita Meidät?</span>
              <h2>Luotettavuus ja Laatu Jokaisessa Työssä</h2>
              <p>Olemme palvelleet Helsingin ja Uudenmaan asukkaita jo vuodesta 2005. Kokemuksellemme perustuen tarjoamme parasta mahdollista palvelua.</p>
              <div className="benefits">
                <div className="benefit-item">
                  <div className="benefit-icon">✓</div>
                  <div className="benefit-content">
                    <strong>Lisensoitu ja Vakuutettu</strong>
                    <p>Kaikki työmme suoritetaan ammattimaisesti ja turvallisesti. Olemme täysin vakuutetut.</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">✓</div>
                  <div className="benefit-content">
                    <strong>Kokeneet Ammattilaiset</strong>
                    <p>Tiimimme koostuu alan parhaista putkimestareista ja asiantuntijoista.</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">✓</div>
                  <div className="benefit-content">
                    <strong>Reilu Hinnoittelu</strong>
                    <p>Ei piilokuluja. Saat aina selkeän tarjouksen ennen työn aloitusta.</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">✓</div>
                  <div className="benefit-content">
                    <strong>Nopea Palvelu</strong>
                    <p>Paikalla 30 minuutissa Helsingin keskustassa. Hätäpalvelu ympäri vuorokauden.</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">✓</div>
                  <div className="benefit-content">
                    <strong>Laatutakuu</strong>
                    <p>Tarjoamme takuun kaikkiin töihimme. Olemme ylpeitä työstämme.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="why-us-stats">
              <div className="stat-card">
                <div className="stat-number">20+</div>
                <div className="stat-label">Vuotta Kokemusta</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">5 000+</div>
                <div className="stat-label">Tyytyväistä Asiakasta</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">15</div>
                <div className="stat-label">Asiantuntijaa</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Hätäpalvelu</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="meista" className="about">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Meistä</span>
            <h2>Tutustu Yritykseemme</h2>
            <p>PutkiPro Oy on luotettava putkityöyritys, joka on palvellut suomalaisia kotitalouksia ja yrityksiä vuodesta 2005.</p>
          </div>
          <div className="about-grid">
            <div className="about-text">
              <h3>Perinteitä ja Ammattitaitoa Vuodesta 2005</h3>
              <p>
                PutkiPro Oy on perustettu vuonna 2005 ja olemme siitä lähteen palvelleet
                Helsingin ja Uudenmaan alueen kotitalouksia sekä yrityksiä. Olemme kasvaneet
                pienestä perheyrityksestä alan johtavaksi palveluntarjoajaksi.
              </p>
              <p>
                Uskomme, että laadukas työ ja asiakkaiden tyytyväisyys rakentuvat yksityiskohtiin.
                Siksi jokainen projektimme suoritetaan huolellisesti ja ammattitaidolla.
                Henkilökuntamme koostuu kokeneista putkimestareista ja asiantuntijoista,
                jotka pitävät asiakkaamme aina ajan tasalla työn edistymisestä.
              </p>
              <p>
                Olemme ylpeitä siitä, että olemme osaltamme varmistaneet turvallisen
                ja toimivan vesikannan yli 5 000 kodissa ja yrityksessä.
              </p>
            </div>
            <div className="about-values">
              <div className="value-card">
                <div className="value-icon">🏆</div>
                <h4>Laatu</h4>
                <p>Käytämme aina korkealaatuisia materiaaleja ja noudatamme tiukkoja laatuvaatimuksia.</p>
              </div>
              <div className="value-card">
                <div className="value-icon">🤝</div>
                <h4>Luottamus</h4>
                <p>Rakennamme pitkäaikaisia suhteita asiakkaidemme kanssa rehellisyyden kautta.</p>
              </div>
              <div className="value-card">
                <div className="value-icon">🔧</div>
                <h4>Ammattitaito</h4>
                <p>Henkilökuntamme on koulutettu ja sertifioitu tarjoamaan parasta mahdollista palvelua.</p>
              </div>
              <div className="value-card">
                <div className="value-icon">⏰</div>
                <h4>Luottamuksellisuus</h4>
                <p>Pidämme lupauksemme ja saavutamme sopitut aikataulut aina.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Näin Toimimme</span>
            <h2>Helppo ja Sujuva Palvelu</h2>
            <p>Prosessimme on suunniteltu olemaan mahdollisimman helppo ja selkeä asiakkaalle.</p>
          </div>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Ota Yhteyttä</h3>
              <p>Soita meille tai täytä yhteystiedot-lomake. Otamme yhteyttä mahdollisimman pian.</p>
            </div>
            <div className="process-arrow">→</div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Ilmainen Kartoitus</h3>
              <p>Tulemme paikalle, kartoitamme tilanteen ja annamme ilmaisen tarjouksen.</p>
            </div>
            <div className="process-arrow">→</div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Ammatillinen Työ</h3>
              <p>Suorutamme työn ammattimaisesti, ajallaan ja sopimuksen mukaisesti.</p>
            </div>
            <div className="process-arrow">→</div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Takuu & Tyydyttävyys</h3>
              <p>Tarkistamme työn laadun ja tarjoamme takuun. Olemme tyytyväisiä vain kun olet sinäkin.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="asiakkaita" className="testimonials">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Asiakaspalautteet</span>
            <h2>Mitä Asiakkaamme Sanovat</h2>
            <p>Älä luota meihin - luota asiakkaisiimme. Lue mitä he ajattelevat palvelustamme.</p>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">"Erinomainen palvelu! Putkisto korjattiin nopeasti ja ammattimaisesti. Työmies oli ystävällinen ja teki puhtaan työn. Suosittelen lämpimästi kaikille."</p>
              <div className="testimonial-author">
                <div className="author-avatar">MV</div>
                <div className="author-info">
                  <strong>Matti Virtanen</strong>
                  <span>Helsinki • Putkikorjaus</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">"PutkiPro auttoi meidät aamuyöllä kun putki puhkesi. Nopea ja luotettava hätäpalvelu! Paikalla alle tunnissa ja vika korjattiin saman tien."</p>
              <div className="testimonial-author">
                <div className="author-avatar">LM</div>
                <div className="author-info">
                  <strong>Liisa Mäkinen</strong>
                  <span>Espoo • Hätäpalvelu</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">"Kylpyhuoneremontti sujui sujuvasti ja hinta oli reilu. Työ tehtiin ajallaan ja laadukkaasti. Erittäin tyytyväinen lopputulokseen!"</p>
              <div className="testimonial-author">
                <div className="author-avatar">PK</div>
                <div className="author-info">
                  <strong>Pekka Korhonen</strong>
                  <span>Vantaa • Kylpyhuoneremontti</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <div className="container cta-inner">
          <div className="cta-content">
            <h2>Tarvitsetko Putkimies Apua?</h2>
            <p>Ota yhteyttä ja saat ilmaisen tarjouksen. Palvelemme maanantaista sunnuntaihin.</p>
          </div>
          <div className="cta-actions">
            <a href="tel:+35891234567" className="btn btn-phone-large">📞 09 123 4567</a>
            <button className="btn btn-primary" onClick={() => scrollToSection('ota-yhteytta')}>Pyydä Tarjous</button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="ota-yhteytta" className="contact">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Ota Yhteyttä</span>
            <h2>ole Yhteys Meihin</h2>
            <p>Olemme valmiita palvelemaan sinua. Täytä lomake tai soita meille niin palaamme asiaan mahdollisimman pian.</p>
          </div>
          <div className="contact-grid">
            <div className="contact-form-wrapper">
              <div className="contact-form">
                {formSubmitted ? (
                  <div className="form-success">
                    <div className="success-icon">✓</div>
                    <h3>Viesti Lähetetty!</h3>
                    <p>Kiitos viestistäsi. Palaamme asiaan mahdollisimman pian.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <h3>Lähetä Viesti</h3>
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="name">Nimi *</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleInputChange}
                          placeholder="Matti Meikäläinen"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="phone">Puhelin *</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formState.phone}
                          onChange={handleInputChange}
                          placeholder="040 123 4567"
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Sähköposti</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleInputChange}
                        placeholder="matti@esimerkki.fi"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="service">Palvelu</label>
                      <select
                        id="service"
                        name="service"
                        value={formState.service}
                        onChange={handleInputChange}
                      >
                        <option value="">Valitse palvelu...</option>
                        <option value="putkiasennus">Putkiasennukset</option>
                        <option value="vianetsinta">Vianetsintä & Korjaukset</option>
                        <option value="kylpyhuone">Kylpyhuone- & Keittiöremontit</option>
                        <option value="laamitys">Lämmitysjärjestelmät</option>
                        <option value="saneeraus">Saneeraukset</option>
                        <option value="hattapalvelu">24/7 Hätäpalvelu</option>
                        <option value="muu">Muu</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="message">Viesti *</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleInputChange}
                        placeholder="Kuvaile lyhyesti mitä tarvitset..."
                        rows={5}
                        required
                      />
                    </div>
                    <div className="form-submit">
                      <button type="submit" className="btn btn-primary btn-submit">Lähetä Viesti</button>
                      <p className="form-note">Palaamme asiaan 2 tunnin kuluessa arkipäivisin.</p>
                    </div>
                  </form>
                )}
              </div>
            </div>
            <div className="contact-info">
              <h3>Yhteystietomme</h3>
              <div className="contact-items">
                <div className="contact-item">
                  <div className="contact-icon">📍</div>
                  <div className="contact-detail">
                    <strong>Osoite</strong>
                    <p>Malminkaari 3<br />00700 Helsinki</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">📞</div>
                  <div className="contact-detail">
                    <strong>Puhelin</strong>
                    <p><a href="tel:+35891234567">09 123 4567</a> (toimisto)<br /><a href="tel:+358401234567">040 123 4567</a> (hätäpalvelu)</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">✉️</div>
                  <div className="contact-detail">
                    <strong>Sähköposti</strong>
                    <p><a href="mailto:info@putkipro.fi">info@putkipro.fi</a></p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">🕐</div>
                  <div className="contact-detail">
                    <strong>Avoinnaja</strong>
                    <p>Ma-To 08-17, Pe 08-15<br />Hätäpalvelu: 24/7</p>
                  </div>
                </div>
              </div>
              <div className="contact-map">
                <div className="map-placeholder">
                  <div className="map-icon">🗺️</div>
                  <p>Malminkaari 3, 00700 Helsinki</p>
                  <a href="https://www.google.com/maps/search/Malminkaari+3+Helsinki" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline">Avaa Kartassa</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <div className="footer-logo">
                <span className="footer-logo-main">PutkiPro</span>
                <span className="footer-logo-sub">Luotettava putkityö</span>
              </div>
              <p className="footer-desc">Olemme palvelleet Helsingin ja Uudenmaan aluetta vuodesta 2005. Laadukkaat putkipalvelut kotitalouksille ja yrityksille.</p>
              <div className="footer-trust">
                <span>✓ Lisensoitu</span>
                <span>✓ Vakuutettu</span>
                <span>✓ Sertifioitu</span>
              </div>
            </div>
            <div className="footer-col">
              <h4>Palvelut</h4>
              <ul>
                <li><a href="#palvelut">Putkiasennukset</a></li>
                <li><a href="#palvelut">Vianetsintä & Korjaukset</a></li>
                <li><a href="#palvelut">Kylpyhuoneremontit</a></li>
                <li><a href="#palvelut">Lämmitysjärjestelmät</a></li>
                <li><a href="#palvelut">Saneeraukset</a></li>
                <li><a href="#palvelut">24/7 Hätäpalvelu</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Yritys</h4>
              <ul>
                <li><a href="#meista">Meistä</a></li>
                <li><a href="#asiakkaita">Asiakaspalautteet</a></li>
                <li><a href="#ota-yhteytta">Ota yhteyttä</a></li>
                <li><a href="#">Työpaikat</a></li>
                <li><a href="#">Blogi</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Yhteystiedot</h4>
              <ul>
                <li>Malminkaari 3</li>
                <li>00700 Helsinki</li>
                <li><a href="tel:+35891234567">09 123 4567</a></li>
                <li><a href="mailto:info@putkipro.fi">info@putkipro.fi</a></li>
                <li>Y-tunnus: 1234567-8</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2024 PutkiPro Oy. Kaikki oikeudet pidätetään.</p>
            <div className="footer-links">
              <a href="#">Käyttöehdot</a>
              <a href="#">Yksityisyys</a>
              <a href="#">Evästeet</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App