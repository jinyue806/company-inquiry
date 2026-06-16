(() => {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("id");
  const product = PRODUCTS[slug];

  if (!product) {
    document.title = "产品不存在 | 新森正自动化";
    document.querySelector("main").innerHTML = `
      <section class="section" style="text-align:center;padding:80px 28px;">
        <h2>产品未找到</h2>
        <p style="color:var(--muted);margin:16px 0 28px;">请返回产品中心查看全部产品。</p>
        <a class="button primary" href="./index.html#products">返回产品中心</a>
      </section>`;
    return;
  }

  document.title = `${product.name} | 新森正自动化`;

  const set = (sel, html) => {
    const el = document.querySelector(sel);
    if (el) el.innerHTML = html;
  };

  set("[data-product-name]", product.name);
  set("[data-product-title]", product.name);
  set("[data-product-subtitle]", product.subtitle);

  const img = document.querySelector("[data-product-img]");
  if (img) {
    img.src = product.img;
    img.alt = product.imgAlt;
  }

  set("[data-product-highlights]",
    product.highlights.map(h => `<span class="highlight-tag">${h}</span>`).join("")
  );

  set("[data-product-specs] tbody",
    product.specs.map(([k, v]) =>
      `<tr><th>${k}</th><td>${v}</td></tr>`
    ).join("")
  );

  set("[data-product-features]",
    product.features.map(f =>
      `<div class="feature-card"><h3>${f.title}</h3><p>${f.desc}</p></div>`
    ).join("")
  );

  set("[data-product-apps]",
    product.apps.map(a =>
      `<div class="app-card"><h3>${a.title}</h3><p>${a.desc}</p></div>`
    ).join("")
  );

  // Nav toggle
  const header = document.querySelector("[data-header]");
  const navToggle = document.querySelector(".nav-toggle");
  if (header && navToggle) {
    navToggle.addEventListener("click", () => {
      const isOpen = header.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });
  }
})();
