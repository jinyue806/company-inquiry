/* ===== 配置区 —— 部署时修改 ===== */
const WEBHOOK_URL = "";  // 企业微信群机器人 webhook URL
const MAILTO_EMAIL = ""; // 备用邮箱（mailto 兜底）
/* ================================ */

const header = document.querySelector("[data-header]");
const navToggle = document.querySelector(".nav-toggle");
const form = document.querySelector("[data-contact-form]");
const formNote = document.querySelector("[data-form-note]");

if (header && navToggle) {
  navToggle.addEventListener("click", () => {
    const isOpen = header.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  header.querySelectorAll(".site-nav a").forEach((link) => {
    link.addEventListener("click", () => {
      header.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

document.querySelectorAll(".reveal").forEach((item) => {
  item.classList.add("is-visible");
});

// WeChat popup toggle
const wechatToggle = document.querySelector("[data-wechat-toggle]");
const wechatPopup = document.querySelector("[data-wechat-popup]");
if (wechatToggle && wechatPopup) {
  wechatToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    wechatPopup.classList.toggle("show");
  });
  document.addEventListener("click", () => wechatPopup.classList.remove("show"));
}

// Product card expand/collapse
document.querySelectorAll("[data-toggle]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const card = btn.closest("[data-product-card]");
    const expanded = card.classList.toggle("is-expanded");
    btn.setAttribute("aria-expanded", String(expanded));
    btn.childNodes[0].textContent = expanded ? "收起详情 " : "展开详情 ";
  });
});

// Counter animation
const counters = document.querySelectorAll("[data-count]");
if (counters.length) {
  const animate = (el) => {
    const target = parseInt(el.dataset.count, 10);
    const duration = 1500;
    const start = performance.now();
    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      el.textContent = Math.floor(progress * target);
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = target;
    };
    requestAnimationFrame(step);
  };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { animate(e.target); observer.unobserve(e.target); }
    });
  }, { threshold: 0.5 });
  counters.forEach((c) => observer.observe(c));
}

if (form && formNote) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const data = Object.fromEntries(new FormData(form));
    const now = new Date();
    const ts = now.toLocaleString("zh-CN", { timeZone: "Asia/Shanghai" });
    const btn = form.querySelector('button[type="submit"]');

    btn.classList.add("loading");
    formNote.textContent = "";
    formNote.className = "form-note";

    try {
      if (WEBHOOK_URL) {
        await sendToWeCom(data, ts);
      }
      saveToLocal(data, ts);
      formNote.textContent = "提交成功！我们会尽快与您联系。";
      formNote.className = "form-note ok";
      form.reset();
    } catch (err) {
      if (MAILTO_EMAIL) {
        openMailto(data, ts);
        formNote.textContent = "已打开邮箱客户端，请手动发送。";
        formNote.className = "form-note ok";
      } else {
        formNote.textContent = "提交失败，请直接拨打电话 18006883777。";
        formNote.className = "form-note err";
      }
    } finally {
      btn.classList.remove("loading");
    }
  });
}

async function sendToWeCom(data, ts) {
  const lines = [
    `**新留言 · ${ts}**`,
    `> 姓名：${data.name}`,
    `> 电话：${data.phone}`,
    `> 需求：${data.message}`,
  ];
  const body = {
    msgtype: "markdown",
    markdown: { content: lines.join("\n") },
  };
  const resp = await fetch(WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!resp.ok) throw new Error(`Webhook error: ${resp.status}`);
}

function openMailto(data, ts) {
  const subject = encodeURIComponent(`产品咨询 - ${data.name} (${ts})`);
  const body = encodeURIComponent(
    `姓名：${data.name}\n电话：${data.phone}\n\n需求：\n${data.message}`
  );
  window.open(`mailto:${MAILTO_EMAIL}?subject=${subject}&body=${body}`);
}

function saveToLocal(data, ts) {
  try {
    const key = "contact_submissions";
    const list = JSON.parse(localStorage.getItem(key) || "[]");
    list.unshift({ ...data, timestamp: ts });
    localStorage.setItem(key, JSON.stringify(list.slice(0, 100)));
  } catch (_) {}
}
