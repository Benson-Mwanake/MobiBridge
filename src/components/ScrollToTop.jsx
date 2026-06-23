import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Wrap in a setTimeout to let the DOM fully mount the elements
      const timer = setTimeout(() => {
        const targetId = hash.replace("#", "");
        const element = document.getElementById(targetId);

        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100); // 100ms macro-task delay gives React ample time to paint the layout

      return () => clearTimeout(timer);
    } else {
      // If there is no hash coordinate, instantly snap back to the very top left
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}
