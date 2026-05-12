import React from "react";

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

export default Testimonials;
