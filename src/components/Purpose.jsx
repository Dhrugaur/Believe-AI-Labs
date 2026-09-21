export default function Purpose() {
  return (
    <section className="section-row purpose-section" id="purpose">
      {/* Col 1: Heading */}
      <div className="purpose-col purpose-col-heading" data-reveal>
        <span className="section-label">OUR PURPOSE</span>
        <h2 className="section-title">
          MORE THAN<br />
          TECHNOLOGY.<br />
          A BRIGHTER<br />
          TOMORROW.
        </h2>
        <div className="section-accent-line"></div>
      </div>

      {/* Col 2: Description */}
      <div className="purpose-col purpose-col-description" data-reveal>
        <p className="purpose-desc-text">
          Believe AI Labs is a multidisciplinary tech innovation lab where curious minds
          build real solutions. We explore, experiment and create across AI, software,
          hardware and beyond — turning bold ideas into meaningful products that solve
          real world problems.
        </p>
        <div className="purpose-meta-tags">
          <span>PEOPLE</span>
          <span className="bullet">·</span>
          <span>IDEAS</span>
          <span className="bullet">·</span>
          <span>IMPACT</span>
        </div>
      </div>

      {/* Col 3: Photo placeholder — swap this for your own image once
          ready: <img className="parallax-img" src="..." alt="..." />
          inside the .image-frame below (drop the image-frame-empty
          class and the placeholder span at that point). */}
      <div className="purpose-col purpose-col-image" data-reveal>
        <div className="image-frame parallax-box image-frame-empty">
          <span className="image-frame-placeholder">+ ADD PHOTO</span>
        </div>
      </div>

      {/* Col 4: Value List */}
      <div className="purpose-col purpose-col-values" data-reveal>
        <div className="values-list cascade-list">
          <span className="value-item">CURIOSITY</span>
          <span className="value-item">COLLABORATION</span>
          <span className="value-item">BOLD IDEAS</span>
          <span className="value-item">REAL SOLUTIONS</span>
        </div>
        <div className="section-accent-line"></div>
      </div>
    </section>
  );
}