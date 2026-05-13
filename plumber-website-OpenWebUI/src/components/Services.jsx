import React from "react";

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

export default Services;
