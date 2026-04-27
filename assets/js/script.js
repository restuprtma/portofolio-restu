      const menuButton = document.getElementById("menuButton");
      const mobileMenu = document.getElementById("mobileMenu");

      menuButton.addEventListener("click", () => {
        const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
        menuButton.setAttribute("aria-expanded", String(!isExpanded));
        mobileMenu.classList.toggle("hidden");
      });

      document.querySelectorAll("#mobileMenu a").forEach((link) => {
        link.addEventListener("click", () => {
          menuButton.setAttribute("aria-expanded", "false");
          mobileMenu.classList.add("hidden");
        });
      });

      const revealElements = document.querySelectorAll(".reveal");
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("opacity-100", "translate-y-0");
              entry.target.classList.remove("opacity-0", "translate-y-6");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15 },
      );

      revealElements.forEach((element) => observer.observe(element));
