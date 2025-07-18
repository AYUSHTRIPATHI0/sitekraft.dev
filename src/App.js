import './App.css';

function App() {
  return (
    <div className="App">
      <header className="navbar">
        <div className="logo">
          <img className="floating" src="/logo.jpg" alt="Sitekraft Logo" />
          <span className="floating">sitekraft.dev</span>
        </div>
        {/* Optional nav links */}
        {/* <nav>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </nav> */}
      </header>

      <section className="hero" data-aos="fade-up" data-aos-duration="1000">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="animate-slide">We Craft Modern Websites for Students & Startups</h1>
            <p className="animate-slide">
              Launch your online presence with fast, affordable, and sleek websites. We bring your vision to life with clean code and great design.
            </p>
            <a href="#contact" className="cta-button">Get Your Website</a>
          </div>
          <div className="hero-image">
            <img src="https://illustrations.popsy.co/gray/web-design.svg" alt="Web Design" />
          </div>
        </div>
      </section>

      <section className="services" id="services">
        <h2 className="animate-slide">What We Offer</h2>
        <div className="service-cards">
          <div className="service-card">
            <h3>📱 Portfolio Websites</h3>
            <p>Modern, fast-loading websites to showcase your work or personal brand.</p>
          </div>
          <div className="service-card">
            <h3>🏢 Business Sites</h3>
            <p>One-page or multi-page sites for small businesses, startups, and local brands.</p>
          </div>
          <div className="service-card">
            <h3>🎨 Custom Design</h3>
            <p>Personalized design with branding, colors, and layout tailored to your needs.</p>
          </div>
        </div>
      </section>
      <section className="pricing" id="pricing">
        <h2>Affordable Pricing</h2>
        <p className="pricing-subtitle">Get online without breaking the bank. Simple, honest pricing for everyone.</p>
        <div className="pricing-cards">
          <div className="pricing-card">
            <h3>🚀 Student Plan</h3>
            <p className="price">₹999</p>
            <ul>
              <li>1-page Portfolio</li>
              <li>Mobile Friendly</li>
              <li>Free Hosting Setup</li>
              <li>Delivery in 3 Days</li>
            </ul>
            <a href="#contact" className="pricing-btn">Get Started</a>
          </div>
          <div className="pricing-card popular">
            <h3>⭐ Pro Plan</h3>
            <p className="price">₹1999</p>
            <ul>
              <li>3-page Website</li>
              <li>Custom Design</li>
              <li>SEO Basics</li>
              <li>Delivery in 5 Days</li>
            </ul>
            <a href="#contact" className="pricing-btn">Get Started</a>
          </div>
          <div className="pricing-card">
            <h3>🏢 Business Plan</h3>
            <p className="price">₹3999+</p>
            <ul>
              <li>Multi-page Site</li>
              <li>Contact Forms</li>
              <li>Branding + Content Help</li>
              <li>Ongoing Support</li>
            </ul>
            <a href="#contact" className="pricing-btn">Let’s Talk</a>
          </div>
        </div>
      </section>
      
      <section className="contact" id="contact">
        <h2 className="animate-slide">Let’s Build Your Website</h2>
        <p className="animate-slide">Interested in working with us? Whether you're a student or business, we’ve got your back.</p>
        <a
          href="https://www.instagram.com/sitekraft.dev"  // Replace this
          target="_blank"
          rel="noopener noreferrer"
          className="contact-btn"
        >
          DM Us on Instagram
        </a>
      </section>
      <section id="contact">
        <h2>Contact Us</h2>
        <form action="https://formspree.io/f/mvgrwppd" method="POST" className="contact-form">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="_replyto" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </section>
      <section className="testimonials section" id="testimonials">
        <h2>What Our Clients Say</h2>
        <div className="testimonial-container">
          <div className="testimonial-card">
            <p>“Sitekraft helped me launch my portfolio in just 3 days. Super affordable!”</p>
            <h4>— Aayush, Student</h4>
          </div>
          <div className="testimonial-card">
            <p>“Loved the speed and design. Highly recommended for startups!”</p>
            <h4>— Priya, Startup Founder</h4>
          </div>
        </div>
      </section>
      <div className="social-icons">
        <a href="https://wa.me/918009651086" target="_blank" rel="noopener noreferrer" className="icon">
          <img className="whattsapp-icon" src="icons8-whatsapp.svg" alt='facebook' />
          <span className="tooltip">whattsapp</span>
        </a>
        <a href="https://www.instagram.com/sitekraft.dev" target="_blank" rel="noopener noreferrer" className="icon">
          <img className="instagram-icon" src="instagram.svg" alt='instagram' />
          <span className="tooltip">Instagram</span>
        </a>
        <a href="https://www.linkedin.com/company/sitekraft-dev/" target="_blank" rel="noopener noreferrer" className="icon">
          <img className="linkden-icon" src="linkedin-brands-solid.svg" alt='linkedin' />
          <span className="tooltip">Linkedin</span>
        </a>
      </div>
      <div id="loader">
        <div className="spinner"></div>
      </div>

    </div>
  );
}

export default App;