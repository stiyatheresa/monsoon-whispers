
// ======================================
// MONSOON WHISPERS - ANIMATION SYSTEM
// ======================================

window.addEventListener("load", () => {

    // Check GSAP availability
    if (typeof gsap === "undefined") {
        document.querySelector(".page-loader")?.remove();
        return;
    }

    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger);

    // ==================================
    // LENIS SMOOTH SCROLL
    // ==================================

    let lenis;

    if (typeof Lenis !== "undefined") {

        lenis = new Lenis({
            duration: 1.2,
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 1.5
        });

        lenis.on("scroll", ScrollTrigger.update);

        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });

        gsap.ticker.lagSmoothing(0);

    }


    // ==================================
    // HERO ENTRANCE ANIMATION
    // ==================================

    const loader = document.querySelector(".page-loader");

    const timeline = gsap.timeline({
        defaults: {
            ease: "power3.out"
        }
    });

    // Loading screen disappears
    // Keep logo visible for 3 seconds
timeline.to({}, {
    duration: 2
});

// Loading screen disappears smoothly
timeline.to(".loader-brand", {
    opacity: 0,
    y: -20,
    duration: 0.8
});

    timeline.to(loader, {
        yPercent: -100,
        duration: 1.1,
        ease: "power4.inOut"
    });

    // Cinematic background zoom
    timeline.fromTo(".hero-image", {
        scale: 1.2
    }, {
        scale: 1,
        duration: 2,
        ease: "power2.out"
    }, "-=0.6");


    // Navigation entrance
    timeline.from(".navbar > *", {
        opacity: 0,
        y: -25,
        duration: 0.8,
        stagger: 0.12
    }, "-=1.2");


    // Hero eyebrow
    timeline.from(".hero-eyebrow", {
        opacity: 0,
        y: 30,
        duration: 0.8
    }, "-=0.8");


    // Main headline
   timeline.from(".hero-line", {
    opacity: 0,
    y: 80,
    rotateX: -15,
    transformOrigin: "left bottom",
    duration: 1.2,
    stagger: 0.25,
    ease: "power4.out"
}, "-=0.5");


    // Description
    timeline.from(".hero-description", {
        opacity: 0,
        y: 30,
        duration: 0.8
    }, "-=0.6");


    // CTA button
    timeline.from(".hero-button", {
        opacity: 0,
        y: 25,
        duration: 0.8
    }, "-=0.5");


    // Bottom information
    timeline.from(".hero-footer, .hero-index", {
        opacity: 0,
        duration: 1,
        stagger: 0.2
    }, "-=0.5");


    // Remove loader after animation
    timeline.set(loader, {
        display: "none"
    });


    // ==================================
    // HERO PARALLAX ON SCROLL
    // ==================================

    gsap.to(".hero-image", {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: true
        }
    });


    // ==================================
    // NAVBAR SCROLL EFFECT
    // ==================================

    ScrollTrigger.create({
        start: "top -80",
        onUpdate: (self) => {
            const navbar = document.querySelector(".navbar");

            if (self.scroll() > 80) {
                navbar.classList.add("scrolled");
            } else {
                navbar.classList.remove("scrolled");
            }
        }
    });

// ======================================
// INTRO SECTION SCROLL ANIMATIONS
// ======================================

// Heading reveal
gsap.from(".intro-heading h2", {
    y: 100,
    opacity: 0,
    duration: 1.2,
    ease: "power4.out",

    scrollTrigger: {
        trigger: ".intro-section",
        start: "top 75%",
        once: true
    }
    
});


// Description reveal
gsap.from(".intro-description", {
    y: 60,
    opacity: 0,
    duration: 1,
    ease: "power3.out",

    scrollTrigger: {
        trigger: ".intro-content",
        start: "top 80%",
        once: true
    }
});


// Image clipping reveal
gsap.from(".intro-image-wrap", {
    clipPath: "inset(0 0 100% 0)",
    duration: 1.5,
    ease: "power4.inOut",

    scrollTrigger: {
        trigger: ".intro-image-wrap",
        start: "top 85%",
        once: true
    }
});


// Image zoom and parallax
gsap.fromTo(".intro-image",
    {
        scale: 1.25,
        yPercent: -5
    },
    {
        scale: 1,
        yPercent: 5,
        ease: "none",

        scrollTrigger: {
            trigger: ".intro-image-wrap",
            start: "top bottom",
            end: "bottom top",
            scrub: 1
        }
    }
);

// ======================================
// DESTINATION GALLERY ANIMATIONS
// ======================================

// Header animation
gsap.from(".destinations-header", {
    y: 80,
    opacity: 0,
    duration: 1.2,
    ease: "power4.out",
    scrollTrigger: {
        trigger: ".destinations-section",
        start: "top 75%",
        once: true
    }
});


// TEST: Destination card animation
gsap.from(".destination-card", {
    y: 200,
    opacity: 0,
    scale: 0.8,
    duration: 2,
    stagger: 0.5,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".destination-grid",
        start: "top 80%",
        once: true
    }
});
// ======================================
// EXPERIENCES SECTION ANIMATIONS
// ======================================

// Experiences heading reveal
gsap.from(".experiences-header", {
    y: 70,
    opacity: 0,
    duration: 1.2,
    ease: "power4.out",
    scrollTrigger: {
        trigger: ".experiences-section",
        start: "top 75%",
        once: true
    }
});

// Experience cards reveal
gsap.from(".experience-card", {
    y: 90,
    opacity: 0,
    duration: 1.2,
    stagger: 0.2,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".experiences-grid",
        start: "top 80%",
        once: true
    }
});
// ======================================
// WHY MONSOON WHISPERS ANIMATIONS
// ======================================

gsap.from(".why-heading h2", {
    y: 100,
    opacity: 0,
    duration: 1.3,
    ease: "power4.out",
    scrollTrigger: {
        trigger: ".why-section",
        start: "top 65%",
        once: true
    }
});

gsap.from(".why-value", {
    y: 60,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".why-values",
        start: "top 80%",
        once: true
    }
});
// ======================================
// CINEMATIC SECTION ANIMATIONS
// ======================================

// Image zoom movement on scroll
gsap.fromTo(".cinematic-image",
    {
        scale: 1.2
    },
    {
        scale: 1,
        ease: "none",
        scrollTrigger: {
            trigger: ".cinematic-section",
            start: "top bottom",
            end: "bottom top",
            scrub: 1
        }
    }
);

// Text reveal
gsap.from(".cinematic-content > *", {
    y: 60,
    opacity: 0,
    duration: 1.2,
    stagger: 0.2,
    ease: "power4.out",
    scrollTrigger: {
        trigger: ".cinematic-section",
        start: "top 65%",
        once: true
    }
});

// Bottom caption reveal
gsap.from(".cinematic-caption", {
    opacity: 0,
    y: 20,
    duration: 1,
    scrollTrigger: {
        trigger: ".cinematic-section",
        start: "top 60%",
        once: true
    }
});
// ======================================
// CONTACT SECTION ANIMATIONS
// ======================================

gsap.from(".contact-heading", {
    x: -80,
    opacity: 0,
    duration: 1.2,
    ease: "power4.out",
    scrollTrigger: {
        trigger: ".contact-section",
        start: "top 70%",
        once: true
    }
});

gsap.from(".contact-details", {
    y: 60,
    opacity: 0,
    duration: 1.2,
    delay: 0.2,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".contact-section",
        start: "top 70%",
        once: true
    }
});

gsap.from(".contact-footer", {
    opacity: 0,
    y: 20,
    duration: 1,
    scrollTrigger: {
        trigger: ".contact-footer",
        start: "top 95%",
        once: true
    }
});
});
