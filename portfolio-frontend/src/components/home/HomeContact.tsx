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

      <div className="mt-10 grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="home-contact-direct">
            <p className="kicker">Direct</p>

            <p className="card-text home-contact-direct-text">
              My main email address below is the best way to contact me directly. Feel free to also use LinkedIn or the
              contact form below.
            </p>

            <div className="home-contact-direct-links">
              <a className="link" href="mailto:swilliamson_0907@outlook.com">
                swilliamson_0907@outlook.com
              </a>

              <a
                className="link"
                href="https://www.linkedin.com/in/sam-williamson-739530146/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 home-contact-formcol">
          <form onSubmit={handleSubmit} className="home-contact-form">
            <p className="kicker">Message</p>

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
