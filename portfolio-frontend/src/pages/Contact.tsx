import { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const res = await fetch('https://portfolio-backend-withered-sound-1453.fly.dev/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });

      if (res.ok) {
        setStatus('Message sent!');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('Failed to send. Try again later.');
      }
    } catch (error) {
      setStatus('An error occurred. Please try again.');
    }
  };

  return (
    <section className="font-josefin pt-16 pb-10 px-4 sm:px-6 max-w-xl mx-auto space-y-6">
      <h2 className="text-3xl font-bold">Contact</h2>
      <p className="text-gray-700 dark:text-gray-300">
        Feel free to reach out via email or connect on LinkedIn.
      </p>
      <ul className="space-y-1">
        <li>
          📧{' '}
          <a
            href="mailto:swilliamson_0907@outlook.com"
            className="text-teal-600 hover:underline"
          >
            swilliamson_0907@outlook.com
          </a>
        </li>
        <li>
          💼{' '}
          <a
            href="https://www.linkedin.com/in/sam-williamson-739530146/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-600 hover:underline"
          >
            LinkedIn
          </a>
        </li>
      </ul>

      <p className="text-gray-700 dark:text-gray-300">
        Prefer a direct message? Fill out the form below and I’ll get back to you via email as soon as possible.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded bg-white dark:bg-gray-800 text-black dark:text-white"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded bg-white dark:bg-gray-800 text-black dark:text-white"
        />
        <textarea
          name="message"
          placeholder="Your message"
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full p-2 border rounded bg-white dark:bg-gray-800 text-black dark:text-white"
        ></textarea>
        <button
          type="submit"
          className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 transition"
        >
          Send Message
        </button>
        {status && <p className="text-sm text-gray-600 dark:text-gray-300">{status}</p>}
      </form>
    </section>
  );
};

export default Contact;
