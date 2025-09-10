import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  function handleChange(e) {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // basic validation
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus({ type: "error", msg: "Please fill all fields." });
      return;
    }

    // For now we just simulate a submit.
    setTimeout(() => {
      setStatus({ type: "success", msg: "Message sent (demo). I'll contact you soon!" });
      setForm({ name: "", email: "", message: "" });
    }, 600);
  }

  return (
    <section className="page page-contact">
      <div className="container contact-grid">
        <div className="contact-info">
          <h2 className="page-title">Contact</h2>
          <p className="lead">Let's work together. Reach out via email or the form.</p>

          <ul className="contact-list">
            <li><strong>Email:</strong> esamuvel60@gmail.com</li>
            <li><strong>Phone:</strong> 8608909802</li>
            <li><strong>Location:</strong> Tirunelveli, India</li>
          </ul>
        </div>

        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <label>
              Name
              <input name="name" value={form.name} onChange={handleChange} />
            </label>

            <label>
              Email
              <input name="email" type="email" value={form.email} onChange={handleChange} />
            </label>

            <label>
              Message
              <textarea name="message" rows="6" value={form.message} onChange={handleChange} />
            </label>

            <div className="form-actions">
              <button className="btn" type="submit">Send Message</button>
              <button className="btn btn-ghost" type="button" onClick={() => setForm({ name: "", email: "", message: "" })}>Reset</button>
            </div>

            {status && (
              <div className={`form-status ${status.type === "error" ? "error" : "success"}`}>
                {status.msg}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
