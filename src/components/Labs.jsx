export default function Labs() {
  return (
    <section className="labs" id="labs">

      {/* Left content */}
      <div className="labs-content">

        <div className="section-label">
          OUR LABS
        </div>

        <h2>
          WHERE
          <br />
          IDEAS BECOME
          <br />
          REALITY.
        </h2>

        <p>
          Exploring what’s next across AI,
          software, hardware and beyond.
        </p>

      </div>


      {/* Large image */}
      <div className="labs-image">

        <img
          src="https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=1800&q=90"
          alt="Technology laboratory"
        />

      </div>


      {/* Technology areas */}
      <div className="labs-areas">

        <span>AI</span>
        <span>SOFTWARE</span>
        <span>HARDWARE</span>
        <span>ROBOTICS</span>
        <span>SYSTEMS</span>
        <span>RESEARCH</span>

        <div className="small-line"></div>

      </div>

    </section>
  );
}