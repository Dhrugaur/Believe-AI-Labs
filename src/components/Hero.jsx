import BelieveLogo from "./BelieveLogo";

export default function Hero() {
  return (
    <section className="hero" id="home">

      {/* Background atmosphere */}
      <div className="hero-atmosphere" />

      {/* Top atmospheric glow — pulsed by GSAP in App.jsx */}
      <div className="hero-top-glow" />

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

      {/* DIGITAL HORIZON — entrance + parallax animated by GSAP in App.jsx */}
      <div className="digital-horizon">
        <div className="horizon-glow" />

        <div className="horizon-ring ring-one" />
        <div className="horizon-ring ring-two" />
        <div className="horizon-ring ring-three" />

        <div className="horizon-core" />
      </div>

      {/* SCROLL INDICATOR — entrance animated by GSAP, line by CSS keyframe */}
      <div className="hero-scroll">
        <span>SCROLL</span>
        <div className="scroll-line" />
      </div>

    </section>
  );
}