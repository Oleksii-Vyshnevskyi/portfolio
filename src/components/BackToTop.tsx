"use client";

let activeAnimation: number | null = null;

export function BackToTop() {
  function scrollToTop() {
    if (activeAnimation !== null) {
      cancelAnimationFrame(activeAnimation);
    }

    const start = window.scrollY;
    const duration = Math.min(800, Math.max(500, start * 0.32));
    const startedAt = performance.now();
    let cancelled = false;

    function cancelScroll() {
      cancelled = true;

      if (activeAnimation !== null) {
        cancelAnimationFrame(activeAnimation);
        activeAnimation = null;
      }

      removeCancelListeners();
    }

    function cancelOnKeydown(event: KeyboardEvent) {
      const scrollKeys = new Set([
        "ArrowDown",
        "ArrowUp",
        "End",
        "Home",
        "PageDown",
        "PageUp",
        " ",
      ]);

      if (scrollKeys.has(event.key)) {
        cancelScroll();
      }
    }

    function removeCancelListeners() {
      window.removeEventListener("wheel", cancelScroll);
      window.removeEventListener("touchstart", cancelScroll);
      window.removeEventListener("keydown", cancelOnKeydown);
    }

    window.addEventListener("wheel", cancelScroll, { passive: true });
    window.addEventListener("touchstart", cancelScroll, { passive: true });
    window.addEventListener("keydown", cancelOnKeydown);

    function animate(now: number) {
      if (cancelled) {
        return;
      }

      const elapsed = Math.min((now - startedAt) / duration, 1);
      const eased = 1 - Math.pow(1 - elapsed, 3);

      window.scrollTo(0, start * (1 - eased));

      if (elapsed < 1) {
        activeAnimation = requestAnimationFrame(animate);
      } else {
        activeAnimation = null;
        removeCancelListeners();
      }
    }

    activeAnimation = requestAnimationFrame(animate);
  }

  return (
    <button className="text-button" type="button" onClick={scrollToTop}>
      Back to top
    </button>
  );
}
