import React from "react";
import "./index.css";

const furnitureItems = [
    {id: 1 , name : "Beds",imageUrl : "https://golden-grove-gallery.lovable.app/assets/cat-beds-BEElWZ5e.jpg"},
    {id: 2 , name : "Sofas",imageUrl : "https://golden-grove-gallery.lovable.app/assets/cat-sofas-D6bCXyEq.jpg"}, 
    {id: 3 , name : "Recliners" , imageUrl : "https://golden-grove-gallery.lovable.app/assets/cat-recliners-CYaYT9t7.jpg"},
    {id: 4 , name : "Dining Tables" , imageUrl : "https://golden-grove-gallery.lovable.app/assets/cat-dining-BxDte3NT.jpg"},
    {id: 5 , name : "Decor Pieces" , imageUrl : "https://golden-grove-gallery.lovable.app/assets/cat-decor-CAB6RkRl.jpg"},
    {id: 6 , name : "Dining Tables" , imageUrl : "https://golden-grove-gallery.lovable.app/assets/treehouse-fULXD3Be.jpg"}
];

const LaverneStudio = () => {
  return (
    <div className="page">
      {/* HEADER */}
      <header className="header">
        <div className="container header-inner">
          <a href="#top" className="logo">
            <img src="https://golden-grove-gallery.lovable.app/assets/logo-D0FeSGT-.png" alt="Laverne Studio" />
          </a>

          <div className="header-actions">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Laverne+Studio"
              target="_blank"
              rel="noreferrer"
              className="btn outline hide-mobile"
            >
              Find our studio
            </a>

            <a
              href="https://instagram.com/laverne_studio"
              target="_blank"
              rel="noreferrer"
              className="btn gold"
            >
              Instagram
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="hero">
        <div className="hero-overlay" />
        <div className="container hero-content">
          <h1>
            Crafting Spaces <br /> <span>That Feel Like Home</span>
          </h1>
          <p>
            Luxury furniture & bespoke designs inspired by nature — meticulously built by master artisans for souls who love rare beauty.
          </p>
          <div className="hero-buttons">
            <a className="btn gold" href="https://instagram.com/laverne_studio" target="_blank" rel="noreferrer">
              View Instagram
            </a>
            <a className="btn outline" href="#categories">
              Explore Collections
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about">
        <div className="container about-grid">
          <img src="https://golden-grove-gallery.lovable.app/assets/craftsman-Dds5xLVE.jpg" alt="craftsman" />
          <div>
            <h2>Where wood becomes memory</h2>
            <p>
              Laverne Studio blends natural textures with modern design to create timeless furniture pieces that elevate your living experience.
              Every grain tells a story — every joint, a quiet act of devotion.

              From hand-selected timber to the final breath of finish, our artisans pour weeks into every piece.
              The result isn't furniture — it's an heirloom waiting for your home.
            </p>
            <div className="stats">
              <div>
                <h3>500+</h3>
                <p>Bespoke Pieces</p>
              </div>
              <div>
                <h3>100%</h3>
                <p>Solid Wood</p>
              </div>
              <div>
                <h3>1-of-1</h3>
                <p>Unique Designs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      {/* CATEGORIES */}
        <section id="categories" className="categories">
            <div className="container">
                <h2>Collections</h2>

                <div className="grid">
                {furnitureItems.map((item) => (
                    <div key={item.id} className="category-card">
                    <img src={item.imageUrl} alt={item.name} />

                    <div className="category-overlay">
                        <h3>{item.name}</h3>
                    </div>
                    </div>
                ))}
                </div>
            </div>
        </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <h3>Laverne Studio</h3>
            <p>Heirloom furniture & bespoke spaces.</p>
          </div>
          <div>
            <h4>Studio</h4>
            <p>About • Collections • Contact</p>
          </div>
          <div>
            <h4>Contact</h4>
            <p>hello@lavernestudio.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LaverneStudio;

