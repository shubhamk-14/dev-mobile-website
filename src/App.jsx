import { useState } from "react";
import dev1 from "./assets/dev1.jpeg";
import dev3 from "./assets/dev3.jpeg";
import dev4 from "./assets/dev4.jpeg";
import dev5 from "./assets/dev5.jpeg";
import devMain from "./assets/dev.jpeg";

const gallery = [devMain, dev1, dev3, dev4, dev5];
const phoneGallery = [
  {
    title: "Camera-first flagship",
    specs: "108MP • 5G • 5000mAh",
    tag: "New drop",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1772986645974-bd85c2cd80f2?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=70&w=1600",
  },
  {
    title: "Vivid display edition",
    specs: "AMOLED • 120Hz • HDR",
    tag: "Trending",
    image:
      "https://images.unsplash.com/photo-1772986646415-b57f1d97e3ae?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=70&w=1600",
  },
  {
    title: "Studio desk ready",
    specs: "Fast charge • Pro audio",
    tag: "Workspace",
    image:
      "https://images.pexels.com/photos/16003905/pexels-photo-16003905.jpeg?cs=srgb&dl=pexels-coppertist-wu-313365563-16003905.jpg&fm=jpg",
  },
  {
    title: "Creator setup bundle",
    specs: "Ultra-wide • Stabilized video",
    tag: "Creator pick",
    image:
      "https://images.pexels.com/photos/16564512/pexels-photo-16564512.jpeg?cs=srgb&dl=pexels-rickie-tom-schunemann-67502904-16564512.jpg&fm=jpg",
  },
];

const services = [
  {
    title: "Phone repairs",
    copy: "Screen, battery, charging port, speaker, and camera fixes.",
  },
  {
    title: "Screen protection",
    copy: "Tempered glass and privacy guards with free fitting.",
  },
  {
    title: "Accessories",
    copy: "Cases, covers, chargers, earphones, and power banks.",
  },
  {
    title: "Software updates",
    copy: "OS install, cleaning, speed boost, and storage checks.",
  },
  {
    title: "Data transfer",
    copy: "Contacts, photos, WhatsApp, and app migration.",
  },
  {
    title: "SIM & activation",
    copy: "New SIM, eSIM help, and network setup assistance.",
  },
  {
    title: "Buy & exchange",
    copy: "Latest phones with trade-in value and setup.",
  },
  {
    title: "Bill payments",
    copy: "Recharge, bill pay, and wallet top-ups in-store.",
  },
];

export default function App() {
  const [isNavOpen, setNavOpen] = useState(false);

  return (
    <div className="page">
      <div className="bg-blobs" aria-hidden="true">
        <span className="blob blob-1" />
        <span className="blob blob-2" />
        <span className="blob blob-3" />
      </div>

      <div className="announcement">
        <div className="container announcement-inner">
          <span>Walk-in setup and repairs available</span>
          <span>Same-day data transfer on most devices</span>
        </div>
      </div>

      <header className="site-header container">
        <div className="logo">
          <div className="logo-mark">DM</div>
          <div>
            <div className="logo-title">Dev Mobile Communication</div>
            <div className="logo-subtitle">Mobile shop & service</div>
          </div>
        </div>
        <nav id="site-nav" className={`nav ${isNavOpen ? "open" : ""}`}>
          <a href="#about" onClick={() => setNavOpen(false)}>
            About
          </a>
          <a href="#latest" onClick={() => setNavOpen(false)}>
            Latest
          </a>
          <a href="#services" onClick={() => setNavOpen(false)}>
            Services
          </a>
          <a href="#location" onClick={() => setNavOpen(false)}>
            Location
          </a>
          <a href="#hours" onClick={() => setNavOpen(false)}>
            Hours
          </a>
          <a href="#contact" onClick={() => setNavOpen(false)}>
            Contact
          </a>
        </nav>
        <button
          className="menu-toggle"
          type="button"
          onClick={() => setNavOpen((open) => !open)}
          aria-expanded={isNavOpen}
          aria-controls="site-nav"
        >
          Menu
        </button>
      </header>

      <div
        className={`nav-backdrop ${isNavOpen ? "show" : ""}`}
        onClick={() => setNavOpen(false)}
        role="presentation"
      />

      <section className="slider-section">
        <div className="slider-track">
          {gallery.concat(gallery).map((photo, index) => (
            <div className="slider-item" key={`${photo}-${index}`}>
              <img src={photo} alt={`Dev Mobile shop photo ${index + 1}`} />
            </div>
          ))}
        </div>
      </section>

      <main>
        <section className="hero container" id="about">
          <div className="hero-copy">
            <div className="pill">Shop details</div>
            <h1>Dev Mobile Communication</h1>
            <p>
              A curated phone shop focused on clean setups, fast transfers, and
              trusted aftercare. We help you switch without the stress.
            </p>
            <div className="hero-actions">
              <a className="btn-primary" href="tel:+919838722862">
                Call the studio
              </a>
              <button className="btn-secondary" type="button">
                Book a visit
              </button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-card">
              <div className="eyebrow">About Dev Mobile</div>
              <h3>Personal setup, trade-in support, and repairs done right.</h3>
              <p className="hero-note">
                We are a local team of device specialists who handle activation,
                data transfer, and protection plans while you relax.
              </p>
            </div>
          </div>
        </section>

        <section className="section container latest-phones" id="latest">
          <div className="section-head">
            <div>
              <h2>Latest phone arrivals</h2>
              <p>
                Fresh launches with upgraded cameras, vivid displays, and
                all-day power — handpicked for the Dev Mobile showroom.
              </p>
            </div>
            <button className="ghost" type="button">
              View all models
            </button>
          </div>
          <div className="phone-grid">
            {phoneGallery.map((phone) => (
              <article
                className={`phone-card ${phone.featured ? "wide" : ""}`}
                key={phone.title}
                style={{ backgroundImage: `url(${phone.image})` }}
              >
                <div className="phone-overlay">
                  <span className="phone-tag">{phone.tag}</span>
                  <h3>{phone.title}</h3>
                  <p>{phone.specs}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section container services" id="services">
          <div className="section-head">
            <div>
              <h2>Services available at Dev Mobile</h2>
              <p>
                Everything you expect from a full-service mobile shop, done
                quickly and professionally.
              </p>
            </div>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <div className="service-card" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.copy}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section container photo-section" id="shop-photo">
          <div className="photo-card">
            <img
              src={dev5}
              alt="Dev Mobile Communication storefront and service desk"
            />
            <div className="photo-caption">
              Front desk, repair bar, and pickup wall ready for walk-in visits.
            </div>
          </div>
          <div className="info-card">
            <h2>Inside the shop</h2>
            <p>
              Bright service pods, private data-transfer booths, and a focused
              accessory wall built for quick pickups.
            </p>
            <div className="amenities">
              <span className="amenity">Device setup while you wait</span>
              <span className="amenity">Private transfer booths</span>
              <span className="amenity">Accessory wall</span>
              <span className="amenity">Repair bar</span>
            </div>
          </div>
        </section>

        <section className="section container details-grid" id="location">
          
          <div className="map-card full" aria-label="Map preview">
            <iframe
              title="Dev Mobile Communication location"
              className="map-embed"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d446.78740539802715!2d84.08028838962149!3d26.381518268196725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3993b359b52c8259%3A0x840f593c55f60e23!2sDev%20mobile%20communication!5e0!3m2!1sen!2sin!4v1774432782473!5m2!1sen!2sin"
              width="400"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>

        <section className="section container details-grid" id="hours">
          <div className="info-card">
            <h2>Store Hours</h2>
            <div className="hours-list">
              <span>Monday - Friday</span>
              <strong>9:30 AM - 8:00 PM</strong>
              <span>Saturday</span>
              <strong>10:00 AM - 7:00 PM</strong>
              <span>Sunday</span>
              <strong>11:00 AM - 5:00 PM</strong>
            </div>
          </div>
          <div className="info-card" id="contact">
            <h2>Contact</h2>
            <p>
              Phone: <a href="tel:+919838722862">+91 9838722862</a>
            </p>
            <p>Email: abhi.acco@gmail.com</p>
            <p>WhatsApp: +91 9838722862</p>
            <button className="btn-primary" type="button">
              Chat with a specialist
            </button>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <div className="logo-title">Dev Mobile Communication</div>
            <p>
              Visit our studio for device setup, repairs, and personal shopping
              support.
            </p>
          </div>
          <div>
            <h4>Visit</h4>
            <a href="#location">Location</a>
            <a href="#hours">Hours</a>
            <a href="#contact">Contact</a>
          </div>
          <div>
            <h4>Support</h4>
            <span>abhi.acco@gmail.com</span>
            <span>+91 9838722862</span>
            <span>Live chat daily</span>
          </div>
          <div>
            <h4>Studios</h4>
            <span>India</span>
          </div>
        </div>
        <div className="footer-bottom">
          © 2026 All Rights Reserved | Developed by Shubham_Sisodiya
        </div>
      </footer>
    </div>
  );
}
