import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./App.css";

import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [loading, setLoading] = useState(true);
  const appRef = useRef(null);

  useEffect(() => {
    if (loading) return;

    const ctx = gsap.context(() => {
      /* =========================================
         NAVBAR ENTRANCE
      ========================================= */

      gsap.fromTo(
        ".navbar",
        {
          opacity: 0,
          y: -25,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        }
      );


      /* =========================================
         HERO CENTER LOGO
      ========================================= */

      gsap.fromTo(
        ".hero-center",
        {
          opacity: 0,
          y: 35,
          scale: 0.96,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          delay: 0.2,
          ease: "power3.out",
        }
      );


      /* =========================================
         LEFT STATEMENT
      ========================================= */

      gsap.fromTo(
        ".hero-left",
        {
          opacity: 0,
          x: -35,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          delay: 0.5,
          ease: "power3.out",
        }
      );


      /* =========================================
         RIGHT STATEMENT
      ========================================= */

      gsap.fromTo(
        ".hero-right",
        {
          opacity: 0,
          x: 35,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          delay: 0.65,
          ease: "power3.out",
        }
      );


      /* =========================================
         DIGITAL HORIZON ENTRANCE
      ========================================= */

      gsap.fromTo(
        ".digital-horizon",
        {
          opacity: 0,
          scale: 0.88,
          y: 60,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.8,
          delay: 0.25,
          ease: "power3.out",
        }
      );


      /* =========================================
         HORIZON SCROLL PARALLAX
      ========================================= */

      gsap.to(".digital-horizon", {
        yPercent: 10,
        ease: "none",

        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });


      /* =========================================
         SCROLL INDICATOR
      ========================================= */

      gsap.fromTo(
        ".hero-scroll",
        {
          opacity: 0,
          y: 15,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 1.6,
          ease: "power2.out",
        }
      );


      /* =========================================
         HERO ATMOSPHERE
      ========================================= */

      gsap.to(".hero-top-glow", {
        scale: 1.15,
        opacity: 0.75,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

    }, appRef);

    return () => {
      ctx.revert();
    };
  }, [loading]);


  return (
    <div className="believe-app-root">

      {loading && (
        <Preloader
          onComplete={() => setLoading(false)}
        />
      )}

      <main
        ref={appRef}
        id="top"
        className="site-main"
      >
        <Navbar />

        <Hero />
      </main>

    </div>
  );
}

export default App;