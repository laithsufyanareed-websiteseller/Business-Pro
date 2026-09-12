document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       CURRENT YEAR
    ========================= */

    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }


    /* =========================
       DEMO CONTACT FORM
    ========================= */

    const contactForm = document.querySelector(".contact-form");

    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const button =
                contactForm.querySelector('button[type="submit"]');

            if (!button) {
                return;
            }

            button.textContent = "Message Sent ✓";
            button.disabled = true;

            setTimeout(function () {

                contactForm.reset();

                button.textContent = "Send Message →";
                button.disabled = false;

            }, 2500);

        });

    }


    /* =========================
       MOBILE MENU
    ========================= */

    const navbar = document.querySelector(".navbar");
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.querySelectorAll(".navbar nav a");

    if (navbar && menuToggle) {

        menuToggle.addEventListener("click", function () {
            navbar.classList.toggle("menu-open");
        });

        navLinks.forEach(function (link) {

            link.addEventListener("click", function () {
                navbar.classList.remove("menu-open");
            });

        });

    }


    /* =========================
       SCROLL REVEAL
    ========================= */

    const revealElements = document.querySelectorAll(
        ".services, .about, .stats, .why-us, .testimonials, .faq, .contact"
    );

    revealElements.forEach(function (element) {
        element.classList.add("reveal");
    });

    const revealObserver = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }

            });

        },
        {
            threshold: 0.15
        }
    );

    revealElements.forEach(function (element) {
        revealObserver.observe(element);
    });

/* =========================
   SCROLL PROGRESS BAR
========================= */

const scrollProgressBar =
    document.getElementById("scrollProgressBar");

function updateScrollProgress() {

    if (!scrollProgressBar) {
        return;
    }

    const scrollTop =
        window.scrollY || document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const scrollPercent =
        scrollHeight > 0
            ? (scrollTop / scrollHeight) * 100
            : 0;

    scrollProgressBar.style.width =
        scrollPercent + "%";
}

window.addEventListener("scroll", updateScrollProgress);

updateScrollProgress();

});