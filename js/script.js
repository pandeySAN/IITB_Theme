document.addEventListener("DOMContentLoaded", function () {
  console.log("✅ DOM Ready");

  // === Popup Modal Logic ===
  const trigger = document.querySelector(".open-popup");
  const modal = document.getElementById("popupModal");

  if (trigger && modal) {
    const close = modal.querySelector(".close-btn");

    trigger.addEventListener("click", function (e) {
      e.preventDefault();
      console.log("📌 Opening popup");
      modal.style.display = "flex";
    });

    close.addEventListener("click", function () {
      modal.style.display = "none";
    });

    modal.addEventListener("click", function (e) {
      const content = modal.querySelector(".popup-content");
      if (!content.contains(e.target)) {
        modal.style.display = "none";
      }
    });
  }

  // === Theme Tabs Toggle Logic ===
  const tabs = document.querySelectorAll(".theme-tabs .tab");
  const contents = document.querySelectorAll(".theme-tabs .tab-content");

  if (tabs.length > 0 && contents.length > 0) {
    tabs.forEach((tab, index) => {
      // Assign data-tab to each tab and content if not already present
      const tabId = `tab-${index}`;
      tab.setAttribute("data-tab", tabId);
      if (contents[index]) contents[index].setAttribute("id", tabId);

      tab.addEventListener("click", function () {
        // Activate current tab
        tabs.forEach(t => t.classList.remove("active"));
        this.classList.add("active");

        // Show corresponding content
        contents.forEach(content => content.classList.remove("visible"));
        const contentToShow = document.getElementById(this.getAttribute("data-tab"));
        if (contentToShow) contentToShow.classList.add("visible");
      });
    });
  }
});
