import BelieveLogo from "./BelieveLogo";

export default function Hero() {
  return (
    <section className="hero" id="home">

      {/* Ambient space vignette — the SVG arc + flare below carry the "orbit"
          visual on their own, so no photo layer competing with the text */}
      <div className="hero-atmosphere" />

      {/* Blue atmosphere rim glow + sunburst spike — entrance animated by GSAP in App.jsx */}
      <svg
        className="hero-horizon-glow"
        viewBox="0 0 1500 700"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          {/* mostly dark/dim along its length, brightening sharply only where
              it meets the flare (~71% across) rather than an even glow */}
          <linearGradient id="arcBase" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(15,22,32,0.06)" />
            <stop offset="45%" stopColor="rgba(30,48,68,0.14)" />
            <stop offset="64%" stopColor="rgba(80,120,155,0.32)" />
            <stop offset="71%" stopColor="rgba(160,200,230,0.58)" />
            <stop offset="85%" stopColor="rgba(190,220,245,0.36)" />
            <stop offset="100%" stopColor="rgba(50,80,110,0.12)" />
          </linearGradient>
          <linearGradient id="arcHighlight" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(60,90,120,0.03)" />
            <stop offset="50%" stopColor="rgba(70,105,140,0.08)" />
            <stop offset="65%" stopColor="rgba(150,190,225,0.35)" />
            <stop offset="71%" stopColor="#eaf6ff" />
            <stop offset="80%" stopColor="rgba(205,232,250,0.5)" />
            <stop offset="100%" stopColor="rgba(70,105,140,0.08)" />
          </linearGradient>
          <filter id="arcBlurSoft" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="7" />
          </filter>
          <filter id="arcBlurTight" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="1.1" />
          </filter>
        </defs>

        {/* soft outer atmosphere bleed */}
        <ellipse cx="750" cy="350" rx="750" ry="350" fill="none" stroke="url(#arcBase)" strokeWidth="28" filter="url(#arcBlurSoft)" />

        {/* ring's own thickness / base tone */}
        <ellipse cx="750" cy="350" rx="748" ry="348" fill="none" stroke="url(#arcBase)" strokeWidth="9" />

        {/* crisp bright highlight riding the lit top surface of the ring */}
        <ellipse cx="750" cy="347" rx="745" ry="345" fill="none" stroke="url(#arcHighlight)" strokeWidth="2.4" filter="url(#arcBlurTight)" />
      </svg>
      <svg className="hero-sun-flare" viewBox="0 0 100 100" aria-hidden="true">
        <defs>
          <radialGradient id="flareBloom" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="30%" stopColor="#dceeff" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#8fc4ff" stopOpacity="0" />
          </radialGradient>
          <filter id="flareSoften" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="0.8" />
          </filter>
        </defs>

        {/* ambient bloom behind the spikes */}
        <circle cx="50" cy="50" r="36" fill="url(#flareBloom)" />

        {/* four-point diffraction spike — thin, needle-like blades, not a chunky shuriken */}
        <polygon
          points="99,50 55.7,55.7 50,99 44.3,55.7 1,50 44.3,44.3 50,1 55.7,44.3"
          fill="#ffffff"
          filter="url(#flareSoften)"
        />

        {/* bright core */}
        <circle cx="50" cy="50" r="2.4" fill="#ffffff" />
      </svg>

      {/* Persistent top-left brand lockup — entrance animated by GSAP in App.jsx */}
      <div className="hero-mini-brand">
        <svg className="mini-brand-arc" viewBox="0 0 140 70" aria-hidden="true">
          <defs>
            <linearGradient id="miniArcGrad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(160,180,200,0.15)" />
              <stop offset="50%" stopColor="rgba(190,210,230,0.55)" />
              <stop offset="80%" stopColor="#ffffff" />
            </linearGradient>
          </defs>
          {/* same dim-to-bright rising arc + diffraction-spike language as
              the main hero's horizon glow + sunburst, shrunk to icon scale.
              Kept deliberately simple (no blur/bloom) since those soften
              into an unreadable smudge at this size. */}
          <path
            d="M6 64 C 14 24, 58 6, 106 22"
            fill="none"
            stroke="url(#miniArcGrad)"
            strokeWidth="2.6"
            strokeLinecap="round"
          />
          <g transform="translate(110,20)">
            <polygon
              points="12,0 4,4 0,12 -4,4 -12,0 -4,-4 0,-12 4,-4"
              fill="#ffffff"
            />
            <circle r="1.8" fill="#ffffff" />
          </g>
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