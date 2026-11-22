const intro = document.querySelector(".intro");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (intro && !prefersReducedMotion) {
    document.documentElement.classList.add("intro-active");
    const removeIntro = () => {
        intro.remove();
        document.documentElement.classList.remove("intro-active");
    };

    intro.addEventListener("animationend", (event) => {
        if (event.target === intro) {
            removeIntro();
        }
    }, { once: true });
    window.setTimeout(removeIntro, 1800);
}
