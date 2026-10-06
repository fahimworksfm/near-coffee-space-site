// near coffee.space — small, dependency-free interactions.
(() => {
    const root = document.documentElement;
    root.classList.add("js");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    document.addEventListener("DOMContentLoaded", () => {
        // Hide images that haven't been generated yet; the painted gradient behind them shows instead.
        document.querySelectorAll(".media img").forEach((img) => {
            const markMissing = () => img.classList.add("is-missing");
            if (img.complete && img.naturalWidth === 0) markMissing();
            else img.addEventListener("error", markMissing, { once: true });
        });

        // Header turns solid once you leave the top of the page.
        const header = document.querySelector(".site-header");
        const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 24);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });

        // Reveal on scroll, with a small stagger for siblings.
        const reveals = document.querySelectorAll(".reveal");
        if ("IntersectionObserver" in window && !reduceMotion) {
            const io = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;
                    const siblings = [...entry.target.parentElement.children].filter((el) => el.classList.contains("reveal"));
                    entry.target.style.transitionDelay = `${Math.min(siblings.indexOf(entry.target), 4) * 90}ms`;
                    entry.target.classList.add("is-visible");
                    io.unobserve(entry.target);
                });
            }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });
            reveals.forEach((el) => io.observe(el));
        } else {
            reveals.forEach((el) => el.classList.add("is-visible"));
        }

        // Warm glow that follows the pointer across the hero.
        const hero = document.querySelector(".hero");
        if (hero && !reduceMotion && window.matchMedia("(pointer: fine)").matches) {
            hero.addEventListener("pointermove", (e) => {
                const r = hero.getBoundingClientRect();
                hero.style.setProperty("--mx", `${e.clientX - r.left}px`);
                hero.style.setProperty("--my", `${e.clientY - r.top}px`);
            });
        }

        initStars(document.querySelector(".hero-stars"), hero);
    });

    // Coffee-ground "stars" drifting upward like steam.
    function initStars(canvas, hero) {
        if (!canvas || !canvas.getContext) return;
        const ctx = canvas.getContext("2d");
        const colors = ["243,235,221", "240,167,127", "224,122,74"];
        let w, h, dpr, particles = [], running = false, raf = 0, inView = true;

        const resize = () => {
            dpr = Math.min(window.devicePixelRatio || 1, 2);
            w = canvas.clientWidth; h = canvas.clientHeight;
            canvas.width = w * dpr; canvas.height = h * dpr;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            const count = Math.round(Math.min(140, (w * h) / 9000));
            particles = Array.from({ length: count }, () => spawn(true));
            if (reduceMotion) draw(0);
        };

        const spawn = (anywhere) => ({
            x: Math.random() * w,
            y: anywhere ? Math.random() * h : h + 10,
            r: Math.random() * 1.4 + 0.3,
            vy: Math.random() * 0.25 + 0.05,
            sway: Math.random() * Math.PI * 2,
            tw: Math.random() * 0.02 + 0.005,
            c: colors[Math.random() < 0.75 ? 0 : Math.random() < 0.6 ? 1 : 2],
        });

        const draw = (t) => {
            ctx.clearRect(0, 0, w, h);
            for (const p of particles) {
                if (!reduceMotion) {
                    p.y -= p.vy;
                    p.x += Math.sin(t * 0.0004 + p.sway) * 0.15;
                    if (p.y < -10) Object.assign(p, spawn(false));
                }
                const alpha = 0.35 + Math.sin(t * p.tw + p.sway) * 0.3;
                const fade = Math.min(1, p.y / (h * 0.25)); // dissolve near the top, like steam
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${p.c},${Math.max(0, alpha * fade)})`;
                ctx.fill();
            }
        };

        const loop = (t) => { draw(t); if (running) raf = requestAnimationFrame(loop); };
        const start = () => { if (!running && inView && !document.hidden && !reduceMotion) { running = true; raf = requestAnimationFrame(loop); } };
        const stop = () => { running = false; cancelAnimationFrame(raf); };

        resize();
        window.addEventListener("resize", resize);

        // Only animate while the hero is on screen and the tab is visible.
        if ("IntersectionObserver" in window && hero) {
            new IntersectionObserver(([e]) => { inView = e.isIntersecting; inView ? start() : stop(); }).observe(hero);
        } else {
            start();
        }
        document.addEventListener("visibilitychange", () => (document.hidden ? stop() : start()));
    }
})();
