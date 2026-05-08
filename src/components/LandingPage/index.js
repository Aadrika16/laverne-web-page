import React from "react";
import { FaInstagram ,FaLeaf,FaMapMarkerAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { 
  IoLogoWhatsapp
} from "react-icons/io5";
import "./index.css";

const furnitureItems = [
    {id: 1 , name : "Beds",imageUrl : "https://golden-grove-gallery.lovable.app/assets/cat-beds-BEElWZ5e.jpg"},
    {id: 2 , name : "Sofas",imageUrl : "https://golden-grove-gallery.lovable.app/assets/cat-sofas-D6bCXyEq.jpg"}, 
    {id: 3 , name : "Recliners" , imageUrl : "https://golden-grove-gallery.lovable.app/assets/cat-recliners-CYaYT9t7.jpg"},
    {id: 4 , name : "Dining Tables" , imageUrl : "https://golden-grove-gallery.lovable.app/assets/cat-dining-BxDte3NT.jpg"},
    {id: 5 , name : "Decor Pieces" , imageUrl : "https://golden-grove-gallery.lovable.app/assets/cat-decor-CAB6RkRl.jpg"},
    {id: 6 , name : "Tree House" , imageUrl : "https://golden-grove-gallery.lovable.app/assets/treehouse-fULXD3Be.jpg"}
];

const LaverneStudio = () => {
  return (
    <div className="page">
 
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
              className="btn outline btn-location" 
            >
              <FaMapMarkerAlt /> 
              <span className="hide-mobile-text">Find our studio</span>
            </a>

            <a
              href="https://instagram.com/laverne_studio"
              target="_blank"
              rel="noreferrer"
              className="btn gold"
            >
              <FaInstagram className="insta-icon" />
              <p className="hide-mobile-text">Explore on Instagram</p>
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
              <FaInstagram className="insta-icon" />
              View Designs on Instagram
            </a>
            <a className="btn outline-1" href="#categories">
              Explore Collections
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about"className="about">
        <div className="container about-grid">
          <img src="https://res.cloudinary.com/doyaebals/image/upload/v1778241770/WhatsApp_Image_2026-05-08_at_16.06.39_q2uy3v.jpg" alt="laverne-studio" className="laverne-studio-img"/>
          <div>
            <span className="span-ele"> — OUR STORY</span>
            <h2>Built on a four-generation legacy.</h2>
            <p>
              From Zam Zam Furniture (1980)
              to Woody Jewels (2015)
              to Laverne (2026).

              For decades, we’ve been crafting
              what others call impossible.

              From a simple reference image
              to a fully realized masterpiece —

              we turn ideas into bespoke luxury.

              Because true design isn’t chosen,
              it’s created.

              If it doesn’t exist yet,
              we’ll build it for you.
            </p>
            <h4>Have a design in mind?</h4>
            <p>Let’s create something
              that doesn’t exist anywhere else.</p>
            
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
        {/* TREE HOUSE SECTION */}
        <section className="treehouse">
          <div className="container treehouse-grid">
            
            <div className="treehouse-image">
              <img
                src="https://golden-grove-gallery.lovable.app/assets/treehouse-fULXD3Be.jpg"
                alt="Tree House"
              />
              <div className="badge">
                <FaLeaf className="leaf-icon"/>
                <div>
                  <p>Among the trees</p>
                  <span>BUILT TO LAST GENERATIONS</span>
                </div>
              </div>
            </div>

            <div className="treehouse-content">
              <p className="tag">★ OUR SIGNATURE</p>

              <h2>
                The Tree House — <br />
                <span>a sanctuary above the world.</span>
              </h2>

              <p className="desc">
                A bespoke escape, built into the embrace of living trees. Hand-cut timber,
                warm interiors, and silence you can hear — designed for those who collect moments.
              </p>

              <ul>
                <li>Fully bespoke architecture</li>
                <li>Premium hardwood construction</li>
                <li>Year-round comfort engineering</li>
              </ul>

              <a
                href="https://instagram.com/laverne_studio"
                target="_blank"
                rel="noreferrer"
                className="btn gold large"
              >
                <FaInstagram className="insta-icon"/> See Tree House Designs
              </a>
            </div>

          </div>
        </section>

{/* INSTAGRAM CTA */}
        <section className="instagram">
          <div className="container insta-box">
            
            <p className="pill">✨ NEW DESIGNS ADDED WEEKLY</p>

            <h2>
              Discover more designs <br />
              <span>on Instagram.</span>
            </h2>

            <p>
              Follow the studio for fresh drops, behind-the-scenes<br /> 
              craftsmanship,and one-of-a-kind pieces before anyone else.
            </p>

            <a
              href="https://instagram.com/laverne_studio"
              target="_blank"
              rel="noreferrer"
              className="btn gold large"
            >
              <FaInstagram className="insta-icon"/> Visit Instagram Now
            </a>
            <br />
            <small>@laverne_studio · trusted worldwide</small>
          </div>
        </section>

{/* NEW FOOTER */}
        <footer className="footer">
          <div className="container footer-grid">
            <div>
              <div className="footer-text-logo-con">
               <div className="footer-logo-container">
                  <span className="footer-logo-text">L</span>
                </div>
                <div>
                 <h3>Laverne Studio</h3>  
                 <p className="below-text">BY WOOD JEWELZZ</p>
                </div>
              </div>
              <p className="heirloom-text">Heirloom furniture and bespoke spaces, hand-built with the warmth of nature and the precision of master craft.</p>

              <a
                href="https://instagram.com/laverne_studio"
                target="_blank"
                rel="noreferrer"
                className="btn gold"
              >
                <FaInstagram className="insta-icon"/> laverne_studio
              </a>
            </div>

            <div className="footer-studio-page">
              <h4>Studio</h4>
              <p><a href="#about" className="footer-link">About Us</a></p>
              <p><a href="#categories" className="footer-link">Collections</a></p>
              <p><a 
                href="https://www.google.com/maps/search/?api=1&query=Laverne+Studio" 
                target="_blank" 
                rel="noreferrer" 
                className="footer-link"
              >
                Visit Studio
              </a></p>
              <p className="footer-contact-item-con">  
                <a href="tel:+919876543210" className="footer-link">Contact Us</a>
              </p>
            </div>

            <div>
              <h4>Contact</h4>
              <p className="footer-contact-item-con">  
                <IoLogoWhatsapp className="email-icon" /> 
                <a 
                  href="https://wa.me/919876543210" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="footer-link"
                >
                  WhatsApp Business
                </a>
            </p>
              <p className="footer-contact-item-con">  
                <HiOutlineMail  className="email-icon"/>
                  hello@lavernestudio.com
              </p>
              <p className="footer-contact-item-con"> 
                <FaMapMarkerAlt className="email-icon"/> 
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Laverne+Studio" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="footer-link"
                >
                  Find on Google Maps
                </a>
              </p>
              <p className="footer-contact-item-con"> 
                <FaInstagram className="email-icon"/> 
                <a 
                  href="https://instagram.com/laverne_studio" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="footer-link"
                >
                  @laverne_studio
                </a>
              </p>
            </div>

          </div>

          <div className="copyright">
            © 2026 Laverne Studio by Woody Jewelzz. All rights reserved. 
            <ul>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </footer>
    </div>
  );
};

export default LaverneStudio;

