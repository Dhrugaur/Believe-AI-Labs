export default function Presence() {
  return (
    <section className="presence" id="presence">

      {/* Left content */}
      <div className="presence-content">

        <div className="section-label">
          OUR PRESENCE
        </div>

        <h2>
          BEYOND
          <br />
          THE LAB.
        </h2>

      </div>


      {/* Cinematic image */}
      <div className="presence-image">

        <img
          src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1800&q=90"
          alt="Earth from space"
        />

      </div>


      {/* Areas */}
      <div className="presence-areas">

        <span>RESEARCH.</span>
        <span>EXPERIMENTS.</span>
        <span>PRODUCTS.</span>
        <span>PROTOTYPES.</span>
        <span>COLLABORATIONS.</span>

        <div className="small-line"></div>

      </div>

    </section>
  );
}