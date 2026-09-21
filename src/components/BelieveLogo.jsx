export default function BelieveLogo({ size = "small", showSubtitle = true, className = "" }) {
  const isLarge = size === "large";

  return (
    <div className={`believe-brand-logo ${isLarge ? "logo-large" : "logo-small"} ${className}`}>
      <div className="brand-wordmark">
        <span className="char">B</span>
        <span className="char-e">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </span>
        <span className="char">L</span>
        <span className="char">I</span>
        <span className="char-e">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </span>
        <span className="char">V</span>
        <span className="char-e">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </span>
      </div>
      {showSubtitle && (
        <div className="brand-subtitle">
          AI LABS
        </div>
      )}
    </div>
  );
}
