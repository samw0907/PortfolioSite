// src/components/home/HomeContact.tsx
import { useState } from "react";
import "../../styles/homeContact.css";

export default function HomeContact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<string>("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch(
        "https://portfolio-backend-withered-sound-1453.fly.dev/api/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );

      if (res.ok) {
        setStatus("Message sent.");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send. Try again later.");
      }
    } catch {
      setStatus("An error occurred. Please try again.");
    }
  }

  return (
    <section className="section" aria-label="Contact">
      <div id="contact" className="section-anchor" />

      <h2 className="page-title">Contact</h2>
      <p className="lead" style={{ maxWidth: "42rem" }} />

      <div className="mt-10 grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="card">
            <h3 className="card-title">Direct</h3>
            <p className="card-text">
              My main email address below is the best way to contact me directly. Feel free to also use LinkedIn or the
              contact form.
            </p>

            <div className="home-contact-links">
              <div className="home-contact-linkrow">
                <span className="home-contact-label">Email</span>
                <a className="link home-contact-link" href="mailto:swilliamson_0907@outlook.com">
                  swilliamson_0907@outlook.com
                </a>
              </div>

              <div className="home-contact-divider" />

              <div className="home-contact-linkrow">
                <span className="home-contact-label">LinkedIn</span>
                <a
                  className="link home-contact-link home-contact-link--right"
                  href="https://www.linkedin.com/in/sam-williamson-739530146/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open profile
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <form onSubmit={handleSubmit} className="card">
            <h3 className="card-title">Message</h3>

            <div className="home-contact-formgrid">
              <input
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
                required
                className="input"
                autoComplete="name"
              />
              <input
                name="email"
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
                className="input"
                autoComplete="email"
              />
              <textarea
                name="message"
                placeholder="Your message"
                value={form.message}
                onChange={handleChange}
                required
                rows={7}
                className="input"
              />
            </div>

            <div className="home-contact-actions">
              <button type="submit" className="btn btn-primary">
                Send
              </button>

              {status ? (
                <span className="home-contact-status" aria-live="polite">
                  {status}
                </span>
              ) : null}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
