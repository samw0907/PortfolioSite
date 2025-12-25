const Footer = () => {
  return (
    <footer
      className="mt-16"
      style={{
        borderTop: "1px solid rgb(var(--border) / 0.10)",
        background: "rgb(var(--surface))",
      }}
    >
      <div className="container-max py-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
          <div>
            <div
              className="font-display text-xs uppercase tracking-[0.24em] font-semibold"
              style={{ color: "rgb(var(--text))" }}
            >
              Sam Williamson
            </div>

            <p className="mt-2 text-sm" style={{ color: "rgb(var(--muted))" }}>
              Full Stack Developer
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3">
              <a
                className="link"
                href="mailto:swilliamson_0907@outlook.com"
              >
                Email
              </a>

              <a
                className="link"
                href="https://www.linkedin.com/in/sam-williamson-739530146/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>

              <a
                className="link"
                href="https://github.com/samw0907"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="w-full lg:w-auto">
            <div
              className="text-xs uppercase tracking-[0.20em]"
              style={{ color: "rgb(var(--muted))" }}
            >
              © {new Date().getFullYear()} Sam Williamson
            </div>
            <div className="mt-2 text-xs" style={{ color: "rgb(var(--muted))" }}>
              All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
