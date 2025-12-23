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
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
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
          </div>

          <div className="text-sm" style={{ color: "rgb(var(--muted))" }}>
            &copy; {new Date().getFullYear()} Sam Williamson. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

