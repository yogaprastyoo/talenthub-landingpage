import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function scrollToHash(hash: string, attempts = 20) {
  const id = hash.startsWith("#") ? hash.slice(1) : hash;
  const element = document.getElementById(id);

  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }

  if (attempts > 0) {
    setTimeout(() => scrollToHash(hash, attempts - 1), 50);
  }
}

export function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      scrollToHash(hash);
      return;
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, hash]);

  return null;
}
