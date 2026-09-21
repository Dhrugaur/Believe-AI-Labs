import React, { useState } from "react";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
      setEmail("");
    }
  };

  return (
    <section className="contact-banner-section" id="contact">
      <div className="contact-card-box">
        {/* Left text */}
        <div className="card-left">
          <h3 className="card-title">BE A PART OF WHAT'S NEXT</h3>
          <p className="card-subtitle">Let's build a brighter tomorrow — together.</p>
        </div>

        {/* Right Form & Link */}
        <div className="card-right">
          <form className="card-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="card-email-input"
            />
            <button type="submit" className="card-submit-btn">
              {submitted ? "REGISTERED!" : "NOTIFY ME"}
            </button>
          </form>

          <span className="card-or">OR</span>

          <a href="mailto:hello@believeailabs.com" className="card-talk-link">
            <span>LET'S TALK</span>
            <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}