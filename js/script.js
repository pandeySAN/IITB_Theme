document.addEventListener("DOMContentLoaded", () => {
  console.log("✅ DOM Ready");

  const trigger = document.querySelector(".open-popup");
  const modal = document.getElementById("popupModal");

  if (trigger && modal) {
    const closeBtn = modal.querySelector(".close-btn");
    const content = modal.querySelector(".popup-content");

    trigger.addEventListener("click", (e) => {
      e.preventDefault();
      console.log("📌 Opening popup");
      modal.style.display = "flex";
    });

    closeBtn?.addEventListener("click", () => {
      modal.style.display = "none";
    });

    modal.addEventListener("click", (e) => {
      if (!content.contains(e.target)) {
        modal.style.display = "none";
      }
    });
  }

  const tabs = document.querySelectorAll(".theme-tabs .tab");
  const contents = document.querySelectorAll(".theme-tabs .tab-content");

  if (tabs.length && contents.length) {
    tabs.forEach((tab, index) => {
      const tabId = `tab-${index}`;
      tab.dataset.tab = tabId;
      contents[index]?.setAttribute("id", tabId);

      tab.addEventListener("click", () => {
        tabs.forEach(t => t.classList.remove("active"));
        contents.forEach(c => c.classList.remove("visible"));

        tab.classList.add("active");
        document.getElementById(tab.dataset.tab)?.classList.add("visible");
      });
    });

    tabs[0].classList.add("active");
    contents[0].classList.add("visible");
  }
});
