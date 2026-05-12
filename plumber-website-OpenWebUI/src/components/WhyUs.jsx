import React from "react";

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

export default WhyUs;
