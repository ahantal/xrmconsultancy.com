// Nav toggle (mobile)
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector("nav.primary");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("open");
      const expanded = nav.classList.contains("open");
      toggle.setAttribute("aria-expanded", expanded ? "true" : "false");
    });
    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => nav.classList.remove("open"));
    });
  }

  // Talks & Insights filter tabs
  const tabs = document.querySelectorAll(".filter-tabs button");
  const cards = document.querySelectorAll(".talk-card");
  if (tabs.length && cards.length) {
    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        tabs.forEach((t) => t.classList.remove("active"));
        tab.classList.add("active");
        const category = tab.dataset.filter;
        cards.forEach((card) => {
          if (category === "all" || card.dataset.category === category) {
            card.hidden = false;
          } else {
            card.hidden = true;
          }
        });
      });
    });
  }

  // Web3Forms submission handler, shared by the contact form and the newsletter form
  async function handleWeb3FormSubmit(form, status, { successMessage, errorMessage, honeypotSelector }) {
    if (honeypotSelector) {
      const honeypot = form.querySelector(honeypotSelector);
      if (honeypot && honeypot.value) return; // bot filled the hidden field, drop silently
    }
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalLabel = submitBtn ? submitBtn.textContent : "";
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = "Sending…";
    }
    try {
      const res = await fetch(form.action, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      const data = await res.json();
      if (status) {
        status.style.display = "block";
        status.textContent = data.success ? successMessage : errorMessage;
      }
      if (data.success) form.reset();
    } catch (err) {
      if (status) {
        status.style.display = "block";
        status.textContent = errorMessage;
      }
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = originalLabel;
      }
    }
  }

  // Contact form
  const form = document.querySelector("form.contact-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      handleWeb3FormSubmit(form, form.querySelector(".form-status"), {
        successMessage: "Thanks, your message has been sent. We'll be in touch soon.",
        errorMessage: "Something went wrong sending your message. Please email info@xr-masters.com directly.",
        honeypotSelector: ".hp",
      });
    });
  }

  // Talks & Insights newsletter signup
  const newsletterForm = document.querySelector("form.newsletter-form");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      handleWeb3FormSubmit(newsletterForm, document.querySelector(".newsletter-status"), {
        successMessage: "Thanks, you're on the list.",
        errorMessage: "Something went wrong. Please try again.",
        honeypotSelector: ".hp",
      });
    });
  }
});
