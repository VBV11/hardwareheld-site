import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 800);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-5 right-5 z-40 flex h-11 w-11 items-center justify-center rounded bg-foreground text-white transition-colors hover:bg-[hsl(225_6%_26%)]"
      aria-label="Naar boven"
    >
      <ArrowUp size={20} aria-hidden />
    </button>
  );
};

export default ScrollToTopButton;
