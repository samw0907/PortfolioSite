import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const NAV_OFFSET = 92; // approx navbar height incl spacing

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there is a hash, scroll to the element with offset.
    if (hash) {
      const id = hash.replace("#", "");
      const el = document.getElementById(id);

      if (el) {
        // Allow layout to settle (fonts/images)
        window.setTimeout(() => {
          const rect = el.getBoundingClientRect();
          const top = window.scrollY + rect.top - NAV_OFFSET;
          window.scrollTo({ top, behavior: "smooth" });
        }, 0);
        return;
      }
    }

    // Otherwise normal route change: top.
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, hash]);

  return null;
}
