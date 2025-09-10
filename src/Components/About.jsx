import React from "react";

const Skill = ({ title, items }) => (
  <div className="skill-card">
    <h3>{title}</h3>
    <ul>
      {items.map((it) => (
        <li key={it}>{it}</li>
      ))}
    </ul>
  </div>
);

export default function About() {
  return (
    <section className="page page-about">
      <div className="container">
        <h2 className="page-title">About</h2>

        <p className="lead">
          Hi — I'm a UX & UI designer / developer focused on building clean,
          minimal experiences.
        </p>

        <div className="skills-grid">
          <Skill title="Languages" items={["HTML", "CSS", "JavaScript", "React", "Python"]} />
          <Skill title="Networking" items={["CCNA"]} />
          <Skill title="Cloud" items={["AWS", "Azure"]} />
        </div>
      </div>
    </section>
  );
}
