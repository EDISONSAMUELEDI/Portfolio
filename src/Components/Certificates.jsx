import React from "react";

const certificates = [
  {
    title: "CCNA Certificate",
    issuer: "Cisco",
    img: "/certificates/ccna.jpg",
  },
  {
    title: "Meta Front-End Developer Certificate",
    issuer: "Meta",
    img: "/certificates/meta-frontend.jpg",
  },
  {
    title: "Google UX Designer Certificate",
    issuer: "Google",
    img: "/certificates/google-ux.jpg",
  },
  {
    title: "Web Development Certificate",
    issuer: "KGISL",
    img: "/certificates/kgisl-webdev.jpg",
  },
];

export default function Certificates() {
  return (
    <section className="page page-certificates">
      <div className="container">
        <h2 className="page-title">Certificates</h2>
        <p className="lead">
          A showcase of my professional certifications.
        </p>

        <div className="cert-grid">
          {certificates.map((cert, idx) => (
            <div className="cert-card" key={idx}>
              <div className="cert-thumb">
                <img src={cert.img} alt={cert.title} />
              </div>
              <div className="cert-meta">
                <div>
                  <h3>{cert.title}</h3>
                  <p className="issuer">{cert.issuer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
