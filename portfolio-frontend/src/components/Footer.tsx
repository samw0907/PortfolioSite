export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container-max">
        <div className="site-footer__row">
          <div className="site-footer__left">
            <div className="site-footer__name">Sam Williamson</div>
            <p className="site-footer__role">Full Stack Developer</p>

            <div className="site-footer__links">
              <a className="link" href="mailto:swilliamson_0907@outlook.com">
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

              <a className="link" href="https://github.com/samw0907" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
          </div>

          <div className="site-footer__right">
            <div className="site-footer__copyright">© {new Date().getFullYear()} Sam Williamson</div>
            <div className="site-footer__legal">All rights reserved.</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
