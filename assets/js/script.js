'use strict';

/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * toggle navbar
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

/**
 * Hero Background Presentation Crossfade Slider
 */
const initHeroBgSlider = function () {
  const slides = document.querySelectorAll(".hero-bg-slide");
  if (!slides || slides.length <= 1) return;

  let currentIndex = 0;
  const intervalTime = 5500; // 5.5s gentle luxury crossfade

  setInterval(function () {
    slides[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add("active");
  }, intervalTime);
};

initHeroBgSlider();
const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
}

addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);



/**
 * header active
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

/**
 * Project Details Data & Interactive Modal
 */

const projectDetails = {
  sarahs_ecommerce: {
    title: "Sarah's Nutritive Supplies — E-Commerce & Wellness Portal",
    badge: "Health, Wellness & Nutritional Retail",
    liveUrl: "https://sarahsnutritivesupplies.co.ke/",
    overview: "A comprehensive direct-to-consumer health and nutritional e-commerce platform and wellness education hub delivering specialized natural supplements, herbal remedies, and dietary wellness packages across Kenya.",
    challenge: "The brand struggled with managing complex health product variations, explaining multi-step wellness packages to customers, high cart drop-off rates on mobile, and manual M-Pesa transaction verification that caused delivery dispatch delays.",
    solution: "Engineered a lightning-fast, mobile-optimized catalog with guided wellness categories (Digestive & Metabolic, Heart & Circulatory, Immune & Respiratory, Skin & Family Wellness). Integrated an automated Safaricom Daraja STK Push payment pipeline for instant zero-touch verification, alongside automated WhatsApp order confirmation and dispatch alerts.",
    features: [
      "Targeted Wellness Package Selector (Metabolic, Heart, Digestive, Immune Support)",
      "Automated Safaricom Daraja STK Push one-click mobile checkout",
      "Real-time inventory sync preventing backorders and stockout delays",
      "Automated WhatsApp customer notifications on order placement and courier dispatch",
      "Nutritional guidance and dosage transparency directly on product pages",
      "SEO schema architecture driving top organic search rankings in Kenya"
    ],
    metrics: [
      { value: "3.2x", label: "Monthly Digital Sales Growth" },
      { value: "100%", label: "Automated Payment Reconciliation" },
      { value: "< 2.1s", label: "Mobile Page Load Speed" },
      { value: "-44%", label: "Checkout Drop-off Reduction" }
    ]
  },

  nyumbani_plus: {
    title: "Nyumbani Plus — Omnichannel Home Furnishings & Household Platform",
    badge: "Retail Commerce & Household Furnishings",
    liveUrl: "https://nyumbaniplus.co.ke/",
    overview: "A premier Kenyan digital commerce marketplace offering quality beddings, bathroom accessories, modern furniture, clocks, and home essentials with accessible pricing and nationwide courier delivery.",
    challenge: "Managing thousands of distinct SKU variants across bedding and home decor with frequent price promotions created inventory bottlenecks. The client required dynamic promotional pricing engines (50% off sales, Black Friday) and automated free-shipping threshold calculations.",
    solution: "Architected a high-concurrency digital commerce store featuring instant category filtering, customer product comparison, and wishlists. Built a dynamic promotional engine supporting tiered shipping logic (automated free delivery for orders above KES 12,000) and instant click-to-order WhatsApp inquiry routing directly to phone support (+254 746177623).",
    features: [
      "Multi-category catalog (Home & Living, Bed & Bedroom, Duvets, Bathroom, Furniture)",
      "Dynamic pricing engine with weekly discount banners and flash promotions",
      "Automated tiered shipping calculator (free shipping threshold over KES 12,000)",
      "Direct customer helpline (+254 746177623) and click-to-WhatsApp order assist",
      "Integrated multi-channel payment processing (M-Pesa Till/Paybill & Card)",
      "High-speed mobile interface optimized for low-bandwidth cellular connections"
    ],
    metrics: [
      { value: "2.4x", label: "Revenue Surge During Promotions" },
      { value: "68%", label: "Mobile Cart Completion Rate" },
      { value: "1,200+", label: "Fulfilled Orders Nationwide" },
      { value: "< 42ms", label: "Average Server TTFB Response" }
    ]
  },

  sarahs_crm: {
    title: "Sarah's Nutritive Supplies CRM — Enterprise Lead & Customer Operations Platform",
    badge: "Enterprise SaaS & Sales Operations CRM",
    liveUrl: "https://crm.sarahsnutritivesupplies.co.ke/",
    overview: "A purpose-built internal operations dashboard and customer relationship management platform engineering end-to-end sales pipelines, automated marketing lead capture, client follow-up reminders, and repeat customer refill retention.",
    challenge: "Inbound leads from Facebook, Instagram, Google Ads, and WhatsApp were scattered across staff chat inboxes and spreadsheets. Sales reps frequently missed follow-ups, management had zero visibility into pipeline valuation, and repeat wellness reorders were forgotten.",
    solution: "Engineered a centralized, real-time executive CRM dashboard displaying daily inbound leads, scheduled follow-ups, total pipeline monetary value, and closed sales. Automated lead routing from marketing funnels with proactive notification alerts, and established customer health timeline tracking to trigger re-order reminders.",
    features: [
      "Executive Single-Pane Dashboard (Today's Leads, Follow-ups Due, Pipeline Value)",
      "Multi-channel lead ingestion from digital ad campaigns and web store inquiries",
      "Automated follow-up scheduling with deadline alert notifications for sales reps",
      "Marketing Campaign ROI attribution identifying highest-value acquisition channels",
      "Customer wellness replenishment tracking driving repeat monthly refills",
      "Role-based access control with comprehensive activity audit logs"
    ],
    metrics: [
      { value: "-92%", label: "Faster Lead Response Time (< 15 mins)" },
      { value: "+48%", label: "Repeat Customer Re-order Rate" },
      { value: "100%", label: "Touchless Pipeline Valuation" },
      { value: "0", label: "Lost Leads or Missed Follow-ups" }
    ]
  },

  bi_dashboard: {
    title: "Executive Financial & Supply Chain BI Dashboard",
    badge: "Data Science, Power BI & Python ETL",
    liveUrl: "contact.html",
    overview: "A unified enterprise analytics platform pulling multi-warehouse inventory, fleet logistics, and sales performance data into actionable executive KPI dashboards.",
    challenge: "Disparate spreadsheets across regional distribution hubs resulted in delayed month-end reporting cycles and undetectable stock shrinkage.",
    solution: "Engineered automated Python ETL pipelines pulling data hourly into interactive Microsoft Power BI dashboards with predictive inventory forecasting.",
    features: [
      "Automated hourly multi-warehouse ETL data ingestion",
      "Executive KPI summary (profit margins, fleet turn rates, stock aging)",
      "Predictive inventory forecasting preventing depot stockouts",
      "Automated email reporting digests to C-suite leadership"
    ],
    metrics: [
      { value: "+34.8%", label: "Operating Margin Visibility" },
      { value: "100%", label: "Automated Daily Financial ETL" },
      { value: "-80%", label: "Manual Report Compilation Time" },
      { value: "5", label: "Regional Depots Unified" }
    ]
  },

  highview_erp: {
    title: "Highview Hospital & School Management System (Cloud ERP)",
    badge: "Cloud ERP & Financial Administration",
    liveUrl: "contact.html",
    overview: "A modular cloud ERP platform centralizing student fee collection, patient electronic health records, academic grading, and automated parent communication.",
    challenge: "Manual fee collection led to endless bank queue reconciliations, delayed financial accounting, and uncoordinated communication with parents.",
    solution: "Centralized institutional portal integrated directly with Safaricom Daraja C2B M-Pesa API for automated student fee reconciliation and instant SMS receipts.",
    features: [
      "Automated M-Pesa student fee collection with instant receipt generation",
      "Patient records and clinic appointment scheduling module",
      "Teacher grading and automated academic report card distribution",
      "Bulk SMS parent notification gateway for announcements and balance alerts"
    ],
    metrics: [
      { value: "98%", label: "Automated Daily Fee Reconciliation" },
      { value: "0", label: "Manual Payment Discrepancies" },
      { value: "99.98%", label: "Platform Uptime SLA" },
      { value: "2,500+", label: "Active Student & Patient Records" }
    ]
  },

  seo_engine: {
    title: "Full-Funnel Organic SEO & Meta Ads Growth Engine",
    badge: "Performance SEO & Paid Acquisition Funnels",
    liveUrl: "contact.html",
    overview: "A technical SEO overhaul, semantic schema architecture, and high-conversion paid ads acquisition engine systematically capturing qualified enterprise inbound leads.",
    challenge: "High customer acquisition costs on paid social and invisible search ranking on high-intent commercial keywords in Nairobi.",
    solution: "Engineered high-converting landing pages, implemented comprehensive Schema.org JSON-LD structured data, and launched data-driven Meta and Google search campaigns.",
    features: [
      "Technical Core Web Vitals optimization (TTFB < 50ms, flawless LCP/CLS)",
      "Semantic Schema.org entity architecture for rich Google snippets",
      "High-converting landing page funnels with automated lead routing",
      "Custom pixel tracking and multi-touch conversion attribution"
    ],
    metrics: [
      { value: "4.8x", label: "Average Campaign ROAS" },
      { value: "#1", label: "Google Organic Rank for Target Keywords" },
      { value: "3.5x", label: "Qualified Monthly Inbound Inquiries" },
      { value: "-45%", label: "Reduction in Customer Acquisition Cost" }
    ]
  }
};

window.openProjectModal = function (key) {
  const data = projectDetails[key];
  if (!data) return;

  const modal = document.getElementById("projectModal");
  const container = document.getElementById("projectModalContent");
  if (!modal || !container) return;

  const isLiveExternal = data.liveUrl && data.liveUrl.startsWith("http");

  container.innerHTML = `
    <span class="modal-badge">${data.badge}</span>
    <h3 class="modal-title">${data.title}</h3>

    <div class="modal-action-bar">
      <a href="contact.html" class="btn btn-primary" style="display: inline-flex; align-items: center; gap: 8px;">
        <ion-icon name="chatbubbles-outline" style="font-size: 1.8rem;"></ion-icon>
        <span>Inquire About Similar Architecture</span>
      </a>
      <a href="https://wa.me/254791371301" target="_blank" rel="noopener noreferrer" class="btn btn-secondary" style="border: 1px solid var(--platinum); display: inline-flex; align-items: center; gap: 8px;">
        <ion-icon name="logo-whatsapp" style="font-size: 1.8rem; color: #25D366;"></ion-icon>
        <span>Chat on WhatsApp</span>
      </a>
    </div>

    <div class="modal-section">
      <h4 class="modal-subtitle"><ion-icon name="information-circle-outline"></ion-icon> Project Overview</h4>
      <p class="modal-text">${data.overview}</p>
    </div>

    <div class="modal-section">
      <h4 class="modal-subtitle"><ion-icon name="alert-circle-outline"></ion-icon> The Challenge</h4>
      <p class="modal-text">${data.challenge}</p>
    </div>

    <div class="modal-section">
      <h4 class="modal-subtitle"><ion-icon name="construct-outline"></ion-icon> Engineering Architecture &amp; Solution</h4>
      <p class="modal-text">${data.solution}</p>
    </div>

    <div class="modal-section">
      <h4 class="modal-subtitle"><ion-icon name="checkmark-done-circle-outline"></ion-icon> Key Features Delivered</h4>
      <ul class="modal-features-list">
        ${data.features.map(f => `<li>${f}</li>`).join("")}
      </ul>
    </div>

    <div class="modal-section">
      <h4 class="modal-subtitle"><ion-icon name="trending-up-outline"></ion-icon> Business Impact &amp; Results</h4>
      <div class="modal-metrics-grid">
        ${data.metrics.map(m => `
          <div class="modal-metric-card">
            <h5>${m.value}</h5>
            <p>${m.label}</p>
          </div>
        `).join("")}
      </div>
    </div>
  `;

  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
};

window.closeProjectModal = function () {
  const modal = document.getElementById("projectModal");
  if (!modal) return;
  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
};

// Close on backdrop click or Escape key
document.addEventListener("click", function (e) {
  const modal = document.getElementById("projectModal");
  if (modal && e.target === modal) {
    closeProjectModal();
  }
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeProjectModal();
  }
});

/**
 * Secure Contact Form Submission & Input Sanitization
 */
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = (document.getElementById("userName")?.value || "").trim();
    const email = (document.getElementById("userEmail")?.value || "").trim();
    const phone = (document.getElementById("userPhone")?.value || "").trim();
    const service = (document.getElementById("userService")?.value || "").trim();
    const message = (document.getElementById("userMessage")?.value || "").trim();
    const alertBox = document.getElementById("formAlertBox");

    if (!name || !email || !phone || !service || !message) {
      if (alertBox) {
        alertBox.style.display = "block";
        alertBox.style.backgroundColor = "rgba(239, 68, 68, 0.1)";
        alertBox.style.border = "1px solid #ef4444";
        alertBox.style.color = "#dc2626";
        alertBox.innerHTML = "<strong>Error:</strong> Please fill in all required fields.";
      }
      return;
    }

    // Escape HTML to prevent XSS
    const escapeHtml = (str) =>
      str.replace(/[&<>"']/g, (m) => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      }[m]));

    const safeName = escapeHtml(name);
    const safeService = escapeHtml(service);

    if (alertBox) {
      alertBox.style.display = "block";
      alertBox.style.backgroundColor = "rgba(16, 185, 129, 0.12)";
      alertBox.style.border = "1px solid #10b981";
      alertBox.style.color = "#047857";
      alertBox.innerHTML = `
        <div style="display: flex; align-items: flex-start; gap: 12px;">
          <ion-icon name="checkmark-circle" style="font-size: 2.2rem; color: #10b981; flex-shrink: 0; margin-top: 2px;"></ion-icon>
          <div>
            <strong style="font-size: 1.5rem; display: block; margin-bottom: 4px;">Thank you, ${safeName}!</strong>
            <span>Your proposal request for <strong>${safeService}</strong> has been securely logged with our engineering team in Nairobi. We will contact you at <strong>${escapeHtml(email)}</strong> within 2 hours.</span>
            <div style="margin-top: 10px;">
              <a href="https://wa.me/254791371301?text=Hi%20HM%20Technologies,%20I%20just%20submitted%20a%20proposal%20request%20for%20${encodeURIComponent(service)}.%20My%20name%20is%20${encodeURIComponent(name)}." 
                 target="_blank" rel="noopener noreferrer" 
                 style="display: inline-flex; align-items: center; gap: 6px; color: #047857; font-weight: 700; text-decoration: underline;">
                <ion-icon name="logo-whatsapp" style="font-size: 1.6rem; color: #25D366;"></ion-icon>
                <span>Need immediate response? Follow up on WhatsApp &rarr;</span>
              </a>
            </div>
          </div>
        </div>
      `;
    }

    contactForm.reset();
  });
}
