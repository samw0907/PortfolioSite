import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<string>("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("https://portfolio-backend-withered-sound-1453.fly.dev/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

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
    <div className="page">
      <section className="section">
        <div className="container-max">
          <p className="kicker">Contact</p>
          <h1 className="page-title">Get in touch</h1>

          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="card">
                <h2 className="card-title">Direct</h2>
                <div className="mt-3 flex flex-col gap-2">
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

            <div className="lg:col-span-7">
              <form onSubmit={handleSubmit} className="card">
                <h2 className="card-title">Message</h2>

                <div className="mt-4 grid gap-3">
                  <input
                    name="name"
                    placeholder="Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="input"
                  />
                  <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="input"
                  />
                  <textarea
                    name="message"
                    placeholder="Your message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="input"
                  />
                </div>

                <div className="mt-5 flex items-center gap-4">
                  <button type="submit" className="btn btn-primary">
                    Send
                  </button>
                  {status && <p className="text-sm text-gray-600 dark:text-gray-300">{status}</p>}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
