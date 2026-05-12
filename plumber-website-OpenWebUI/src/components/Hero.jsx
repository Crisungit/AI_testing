import React from "react";

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

export default Hero;