/* Dire's Bakery Part 3 - interactive website features */
"use strict";

// Product data is stored in one array so the page can render and filter it dynamically.
const bakeryProducts = [
  { name: "Fresh Bread", category: "bread", description: "Soft, fresh bread for breakfast, lunch or the family table.", price: "From R35", image: "images/hero-bread.svg", alt: "Fresh bread illustration" },
  { name: "Butter Croissant", category: "pastry", description: "Flaky pastry with a buttery flavour, baked in small batches.", price: "R22 each", image: "images/croissant.svg", alt: "Butter croissant illustration" },
  { name: "Vanilla Cupcake", category: "treat", description: "A vanilla cupcake for birthdays, meetings and everyday treats.", price: "R18 each", image: "images/cupcake.svg", alt: "Vanilla cupcake illustration" },
  { name: "Custom Celebration Cake", category: "cake", description: "Made to order with a choice of basic flavours and decorations.", price: "From R350", image: "images/cake.svg", alt: "Celebration cake illustration" },
  { name: "Cake Slice", category: "cake", description: "A sweet slice for a small treat or afternoon dessert.", price: "R35 each", image: "images/cake-slice.svg", alt: "Cake slice illustration" }
];

// Render products from the data array and apply search/category filters.
function renderProducts() {
  const list = document.querySelector("#product-list");
  if (!list) return;
  const search = (document.querySelector("#product-search")?.value || "").trim().toLowerCase();
  const category = document.querySelector("#category-filter")?.value || "all";
  const filtered = bakeryProducts.filter(product => {
    const matchesText = `${product.name} ${product.description} ${product.category}`.toLowerCase().includes(search);
    return matchesText && (category === "all" || product.category === category);
  });
  list.innerHTML = filtered.map(product => `
    <article class="product">
      <button class="product-image-button" type="button" data-lightbox="${product.image}" data-caption="${product.name}">
        <img src="${product.image}" alt="${product.alt}" loading="lazy">
        <span class="visually-hidden">Enlarge ${product.name} image</span>
      </button>
      <div><h2>${product.name}</h2><p>${product.description}</p><strong>${product.price}</strong></div>
    </article>`).join("");
  const count = document.querySelector("#product-count");
  if (count) count.textContent = `${filtered.length} product${filtered.length === 1 ? "" : "s"} found`;
  const empty = document.querySelector("#no-products");
  if (empty) empty.hidden = filtered.length !== 0;
}

// Accessible accordion: only the selected answer is expanded at a time.
document.querySelectorAll(".accordion-trigger").forEach(trigger => {
  trigger.addEventListener("click", () => {
    const wasOpen = trigger.getAttribute("aria-expanded") === "true";
    document.querySelectorAll(".accordion-trigger").forEach(other => {
      other.setAttribute("aria-expanded", "false");
      const panel = other.parentElement.nextElementSibling;
      if (panel) panel.hidden = true;
    });
    trigger.setAttribute("aria-expanded", String(!wasOpen));
    const panel = trigger.parentElement.nextElementSibling;
    if (panel) panel.hidden = wasOpen;
  });
});

// Reusable lightbox dialog for gallery and product images.
function openLightbox(imagePath, caption) {
  let dialog = document.querySelector("#image-lightbox");
  if (!dialog) {
    dialog = document.createElement("dialog");
    dialog.id = "image-lightbox";
    dialog.className = "lightbox-dialog";
    dialog.innerHTML = `<button class="lightbox-close" type="button" aria-label="Close image">&times;</button><img alt=""><p></p>`;
    document.body.appendChild(dialog);
    dialog.querySelector(".lightbox-close").addEventListener("click", () => dialog.close());
    dialog.addEventListener("click", event => { if (event.target === dialog) dialog.close(); });
  }
  const image = dialog.querySelector("img");
  image.src = imagePath;
  image.alt = caption;
  dialog.querySelector("p").textContent = caption;
  if (!dialog.open) dialog.showModal();
}

document.addEventListener("click", event => {
  const imageButton = event.target.closest("[data-lightbox]");
  if (imageButton) openLightbox(imageButton.dataset.lightbox, imageButton.dataset.caption || "Bakery image");
});

// Product search controls update the page without a reload.
document.querySelector("#product-search")?.addEventListener("input", renderProducts);
document.querySelector("#category-filter")?.addEventListener("change", renderProducts);
renderProducts();

// Shared validation helper shows a useful message and focuses the first invalid field.
function validateForm(form) {
  const fields = [...form.querySelectorAll("input, select, textarea")];
  for (const field of fields) {
    if (!field.checkValidity()) {
      field.reportValidity();
      field.focus();
      return false;
    }
  }
  return true;
}

// Enquiry form: validate fields, check event date, and show a clearly labelled estimate.
const enquiryForm = document.querySelector("#enquiry-form");
if (enquiryForm) {
  const dateInput = document.querySelector("#date");
  if (dateInput) dateInput.min = new Date().toISOString().split("T")[0];
  enquiryForm.addEventListener("submit", event => {
    event.preventDefault();
    const feedback = document.querySelector("#enquiry-feedback");
    if (!validateForm(enquiryForm)) {
      feedback.textContent = "Please correct the highlighted fields before continuing.";
      feedback.className = "form-feedback error";
      return;
    }
    if (dateInput && dateInput.value < new Date().toISOString().split("T")[0]) {
      feedback.textContent = "Please choose today or a future event date.";
      feedback.className = "form-feedback error";
      dateInput.focus();
      return;
    }
    const type = document.querySelector("#cake-type").value;
    const startingPrice = type === "Cupcake order" ? 18 : 350;
    const deployedOnNetlify = (location.hostname.endsWith("netlify.app") || (location.protocol.startsWith("http") && location.hostname !== "localhost" && location.hostname !== "127.0.0.1"));
    if (deployedOnNetlify) {
      const payload = new URLSearchParams(new FormData(enquiryForm));
      fetch(enquiryForm.action, { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: payload.toString() })
        .then(response => {
          if (!response.ok) throw new Error("Form submission was not accepted.");
          feedback.textContent = `Thank you, ${document.querySelector("#name").value}. Your enquiry was submitted. The indicative starting price is R${startingPrice}; this is not a confirmed quote. The bakery must confirm the final price and availability.`;
          feedback.className = "form-feedback success";
          enquiryForm.reset();
        })
        .catch(() => {
          feedback.textContent = "The online submission could not be completed. Please try again later or use the Contact page.";
          feedback.className = "form-feedback error";
        });
    } else {
      feedback.textContent = `Thank you, ${document.querySelector("#name").value}. Your ${type.toLowerCase()} enquiry passed validation. The indicative starting price is R${startingPrice}. This is not a confirmed quote. In the local preview, no information is sent or stored.`;
      feedback.className = "form-feedback success";
    }
  });
}

// Contact form: validate and prepare a message in the visitor's default email application.
const contactForm = document.querySelector("#contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", event => {
    event.preventDefault();
    const feedback = document.querySelector("#contact-feedback");
    if (!validateForm(contactForm)) {
      feedback.textContent = "Please complete the required fields and check the email/phone formats.";
      feedback.className = "form-feedback error";
      return;
    }
    const data = new FormData(contactForm);
    const deployedOnNetlify = (location.hostname.endsWith("netlify.app") || (location.protocol.startsWith("http") && location.hostname !== "localhost" && location.hostname !== "127.0.0.1"));
    if (deployedOnNetlify) {
      const payload = new URLSearchParams(data);
      fetch(contactForm.action, { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: payload.toString() })
        .then(response => {
          if (!response.ok) throw new Error("Form submission was not accepted.");
          feedback.textContent = "Thank you. Your message was submitted successfully. The bakery will need to review the submission in its Netlify Forms dashboard and configure email notifications to receive it by email.";
          feedback.className = "form-feedback success";
          contactForm.reset();
        })
        .catch(() => {
          feedback.textContent = "The online submission failed. Please email hello@diresbakery.co.za directly.";
          feedback.className = "form-feedback error";
        });
    } else {
      const subject = encodeURIComponent(`Website message: ${data.get("messageType")}`);
      const body = encodeURIComponent(`Name: ${data.get("name")}\nEmail: ${data.get("email")}\nPhone: ${data.get("phone") || "Not provided"}\nMessage type: ${data.get("messageType")}\n\nMessage:\n${data.get("message")}`);
      feedback.textContent = "Your email application should open with the message prepared. Press Send in that application to send it. This local preview does not store or transmit the form.";
      feedback.className = "form-feedback success";
      window.location.href = `mailto:hello@diresbakery.co.za?subject=${subject}&body=${body}`;
    }
  });
}

// Initialise the interactive OpenStreetMap map on the Contact page using Leaflet.
const mapElement = document.querySelector("#bakery-map");
if (mapElement && window.L) {
  const bakeryCoordinates = [-25.682273, 28.107887];
  const map = L.map(mapElement).setView(bakeryCoordinates, 17);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19
  }).addTo(map);
  L.marker(bakeryCoordinates).addTo(map).bindPopup("Dire's Bakery project location<br>5 Dias, Amandasig, Akasia").openPopup();
}

// Add a small reveal effect when supported; content remains visible if JS is unavailable.
if ("IntersectionObserver" in window) {
  const revealItems = document.querySelectorAll(".card, .product, .info-box, .gallery-item");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach(item => {
    item.classList.add("reveal-ready");
    observer.observe(item);
  });
}
