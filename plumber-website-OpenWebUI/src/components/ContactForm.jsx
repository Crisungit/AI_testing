import React, { useState } from "react";

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

export default ContactForm;
