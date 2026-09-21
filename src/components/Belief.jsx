export default function Belief() {
  return (
    <section className="section-row belief-section" id="belief">
      {/* Col 1: Mountain Peak Silhouette Image */}
      <div className="belief-col belief-col-left" data-reveal>
        <div className="image-frame parallax-box">
          <img
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=90"
            alt="Person on mountain peak overlooking clouds and mountains"
            className="parallax-img"
          />
        </div>
      </div>

      {/* Col 2: Quote */}
      <div className="belief-col belief-col-center" data-reveal>
        <span className="section-label">OUR BELIEF</span>
        <blockquote className="belief-quote">
          “A BRIGHTER TOMORROW<br />
          IS BUILT BY THOSE WHO DARE<br />
          TO BUILD TODAY.”
        </blockquote>
        <div className="section-accent-line"></div>
      </div>

      {/* Col 3: Supporting Philosophy */}
      <div className="belief-col belief-col-right" data-reveal>
        <p className="belief-supporting-text">
          We believe in the power of young minds, open collaboration and
          technology that creates real, lasting change.
        </p>
        <div className="belief-mantra">
          <span>BELIEVE.</span>
          <span>BUILD.</span>
          <span>BEYOND.</span>
        </div>
      </div>
    </section>
  );
}