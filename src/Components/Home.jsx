// import React from "react";

// export default function Home() {
//   return (
//     <section className="hero">
//       <div className="hero-card">
//         <h1 className="hero-title">EDISON</h1>
//         <p className="hero-sub">
//           Minimalistic product & UX/UI portfolio. Create. Design. Ship.
//         </p>

//         <div className="hero-cta">
//           <a href="/contact" className="btn">Hire / Contact</a>
//           <a href="/certificates" className="btn btn-ghost">Certificates</a>
//         </div>
//       </div>
//     </section>
//   );
// }

import { useState, useEffect, useRef } from "react";

export default function Home() {
  const [mouse, setMouse] = useState({ x: -999, y: -999 });
  const textRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (textRef.current) {
        const rect = textRef.current.getBoundingClientRect();
        if (
          e.clientX >= rect.left &&
          e.clientX <= rect.right &&
          e.clientY >= rect.top &&
          e.clientY <= rect.bottom
        ) {
          setMouse({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        } else {
          setMouse({ x: -999, y: -999 }); // reset when outside
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="home">
      <h1
        ref={textRef}
        className="reveal-text"
        style={{
          WebkitMaskImage: `radial-gradient(circle 200px at ${mouse.x}px ${mouse.y}px, rgba(0,0,0,1) 80%, transparent 100%)`,
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskSize: "cover",
        }}
      >
        EDISON
      </h1>
    </div>
  );
}

