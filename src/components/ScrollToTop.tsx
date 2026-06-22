import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    const elementId = decodeURIComponent(hash.slice(1));
    // Try multiple times in case the target element mounts after a route change
    let attempts = 0;
    const maxAttempts = 20;
    const interval = window.setInterval(() => {
      const el = document.getElementById(elementId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        window.clearInterval(interval);
      } else if (++attempts >= maxAttempts) {
        window.clearInterval(interval);
      }
    }, 100);

    return () => window.clearInterval(interval);
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
