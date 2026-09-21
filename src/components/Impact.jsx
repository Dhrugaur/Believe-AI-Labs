export default function Impact() {
  return (
    <section className="section-row impact-section" id="impact">
      <div className="impact-header-row" data-reveal>
        <span className="section-label">OUR IMPACT</span>
      </div>

      <div className="impact-grid">
        {/* Metric 1 */}
        <div className="impact-metric-col" data-reveal>
          <div className="impact-number">10+</div>
          <div className="impact-label">PROJECTS</div>
        </div>

        <div className="metric-divider"></div>

        {/* Metric 2 */}
        <div className="impact-metric-col" data-reveal>
          <div className="impact-number">5+</div>
          <div className="impact-label">DOMAINS</div>
        </div>

        <div className="metric-divider"></div>

        {/* Metric 3 */}
        <div className="impact-metric-col" data-reveal>
          <div className="impact-number">∞</div>
          <div className="impact-label">IDEAS AHEAD</div>
        </div>

        <div className="metric-divider"></div>

        {/* Metric 4 */}
        <div className="impact-metric-col" data-reveal>
          <div className="impact-number">1</div>
          <div className="impact-label">BRIGHTER TOMORROW</div>
        </div>

        {/* Right Globe Image */}
        <div className="impact-image-col" data-reveal>
          <div className="image-frame parallax-box">
            <img
              src="https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=1200&q=90"
              alt="Globe at night from orbit"
              className="parallax-img"
            />
          </div>
        </div>

        {/* Far Right Typography */}
        <div className="impact-statement-col" data-reveal>
          <p className="impact-statement-text">
            <span>A</span>
            <span>MORE</span>
            <span>INNOVATIVE</span>
            <span>INCLUSIVE</span>
            <span>BRIGHTER</span>
            <span>WORLD</span>
          </p>
        </div>
      </div>
    </section>
  );
}
