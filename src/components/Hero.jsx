import BelieveLogo from "./BelieveLogo";

export default function Hero() {
  return (
    <section className="hero" id="home">

      {/* Cinematic Earth-from-orbit background — entrance + parallax animated by GSAP in App.jsx */}
      <div className="hero-bg">
        <img
          src="https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=2400&q=90"
          alt="Earth glowing at night from orbit, city lights visible across the continents"
          className="hero-bg-img"
        />
        <div className="hero-bg-overlay" />
      </div>

      {/* Vignette on top of the photo for text contrast */}
      <div className="hero-atmosphere" />

      {/* Blue atmosphere rim glow + sunburst — entrance animated by GSAP in App.jsx */}
      <div className="hero-horizon-glow" />
      <div className="hero-sun-flare" />

      {/* Persistent top-left brand lockup — entrance animated by GSAP in App.jsx */}
      <div className="hero-mini-brand">
        <svg className="mini-brand-arc" viewBox="0 0 64 28" aria-hidden="true">
          <path d="M2 26C2 12 16 2 32 2C48 2 62 12 62 26" fill="none" stroke="currentColor" strokeWidth="1.2" />
          <circle cx="9" cy="10" r="1.6" fill="currentColor" />
        </svg>
        <BelieveLogo size="small" showSubtitle={true} />
        <span className="mini-brand-tagline">IDEAS TO IMPACT</span>
      </div>

      {/* CENTER LOGO — entrance animated by GSAP in App.jsx */}
      <div className="hero-center">
        <BelieveLogo
          size="large"
          showSubtitle={true}
        />
      </div>

      {/* LEFT STATEMENT — entrance animated by GSAP in App.jsx */}
      <div className="hero-statement hero-left">
        <p>WHERE IDEAS</p>
        <p>TAKE BIRTH</p>
        <p>INNOVATION TAKES SHAPE</p>
        <p>AND TECHNOLOGY</p>
        <p>CREATES A BRIGHTER TOMORROW</p>

        <div className="hero-accent-line" />
      </div>

      {/* RIGHT STATEMENT — entrance animated by GSAP in App.jsx */}
      <div className="hero-statement hero-right">
        <p>SOFTWARE</p>
        <p>HARDWARE</p>
        <p>AI</p>
        <p>PEOPLE</p>
        <p>A BRIGHTER</p>
        <p>TOMORROW</p>

        <div className="hero-accent-line" />
      </div>

      {/* SCROLL INDICATOR — entrance animated by GSAP, line by CSS keyframe */}
      <div className="hero-scroll">
        <span>SCROLL</span>
        <div className="scroll-line" />
      </div>

    </section>
  );
}