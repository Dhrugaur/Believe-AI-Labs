import { useState, useEffect } from "react";

export default function BottomBar() {
  const [scrollProgress, setScrollProgress] = useState(0.05);
  const [nearFooter, setNearFooter] = useState(false);
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (height > 0) {
        const scrolled = winScroll / height;
        // Start nearly invisible (0.08), gain opacity up to 0.95 the deeper you scroll
        const opacity = Math.min(0.96, Math.max(0.08, 0.08 + scrolled * 1.1));
        setScrollProgress(opacity);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const footer = document.querySelector(".site-footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => setNearFooter(entry.isIntersecting),
      { rootMargin: "0px 0px -10% 0px" }
    );
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSent(true);
      setTimeout(() => setSent(false), 3500);
      setEmail("");
    }
  };

  return (
    <aside 
      className="fixed-bottom-bar"
      style={{
        opacity: nearFooter ? 0 : scrollProgress,
        transform: `translateY(${nearFooter ? '10px' : scrollProgress < 0.09 ? '6px' : '0px'})`,
        pointerEvents: nearFooter ? "none" : "auto",
      }}
      aria-label="Quick subscription bar"
    >
      <div className="bottom-bar-content">
        <div className="bottom-bar-tag">
          <span className="live-dot"></span>
          <span className="bottom-bar-label">STAY UPDATED</span>
        </div>

        <form className="bottom-bar-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bottom-bar-input"
          />
          <button type="submit" className="bottom-bar-btn" aria-label="Subscribe">
            <span>{sent ? "✓" : "→"}</span>
          </button>
        </form>
      </div>
    </aside>
  );
}
