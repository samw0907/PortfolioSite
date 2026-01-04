// src/components/home/HomeContact.tsx
import { useState } from "react";

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

      <p className="kicker">Contact</p>
      <h2 className="page-title">Get in touch</h2>
      <p className="lead" style={{ maxWidth: "42rem" }}>
        If you’re hiring or want to chat about a project, the fastest way is LinkedIn.
        Otherwise, send a message here and I’ll reply by email.
      </p>

      <div className="mt-10 grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="card">
            <h3 className="card-title">Direct</h3>
            <p className="card-text">Best channels for a quick response.</p>

            <div className="mt-5 flex flex-col gap-3">
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

          <div className="mt-6 card-subtle">
            <p className="kicker">Note</p>
            <p className="card-text">I read everything, but I may take a day to reply during busy weeks.</p>
          </div>
        </div>

        <div className="lg:col-span-7">
          <form onSubmit={handleSubmit} className="card">
            <h3 className="card-title">Message</h3>
            <p className="card-text">
              Short and specific is perfect — what role, what team, and what timeline.
            </p>

            <div className="mt-6 grid gap-3">
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

            <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-4">
              <button type="submit" className="btn btn-primary">
                Send
              </button>

              <div className="text-sm" style={{ color: "rgb(var(--muted))" }}>
                {status ? status : "Replies typically within 1–2 days."}
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
