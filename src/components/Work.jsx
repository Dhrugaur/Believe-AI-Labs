export default function Work() {
  return (
    <section className="section-row work-section" id="work">
      {/* Col 1: Text & CTA */}
      <div className="work-col work-col-left" data-reveal>
        <span className="section-label">HOW WE WORK</span>
        <h2 className="section-title">
          IDEAS TO<br />
          REAL-WORLD<br />
          SOLUTIONS.
        </h2>
        <p className="work-desc-text">
          We combine research, engineering and design to transform possibilities
          into real-world impact. Our process is simple — explore, validate, build and scale.
        </p>

        <a href="#labs" className="cta-sweep-button">
          <span>EXPLORE OUR LABS</span>
          <span className="arrow">→</span>
        </a>
      </div>

      {/* Col 2: Panoramic Mountain Window Silhouette Image */}
      <div className="work-col work-col-center" data-reveal>
        <div className="image-frame parallax-box">
          <img
            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1600&q=90"
            alt="Person standing at panoramic window looking at mountains"
            className="parallax-img"
          />
        </div>
      </div>

      {/* Col 3: Numbered Process Items */}
      <div className="work-col work-col-right" data-reveal>
        <div className="process-list cascade-list">
          <div className="process-item-row">
            <span className="process-num">01</span>
            <span className="process-name">IDEATE</span>
          </div>
          <div className="process-item-row">
            <span className="process-num">02</span>
            <span className="process-name">RESEARCH</span>
          </div>
          <div className="process-item-row">
            <span className="process-num">03</span>
            <span className="process-name">BUILD</span>
          </div>
          <div className="process-item-row">
            <span className="process-num">04</span>
            <span className="process-name">DEPLOY</span>
          </div>
        </div>
        <div className="section-accent-line"></div>
      </div>
    </section>
  );
}