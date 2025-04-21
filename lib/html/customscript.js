localStorage.setItem("theme", "light");
document.addEventListener("DOMContentLoaded", () => {
  const excludedFolders = ["Meta", "Anhang", "Anlage"];

  function updateSidebarOpacity() {
    const atTop = window.scrollY <= 0;
    document.querySelectorAll('.sidebar-left, .sidebar-right').forEach(sidebar => {
      sidebar?.classList.toggle('sidebar-faded', !atTop);
    });
  }

  function hideUnwantedFolders() {
    const folders = document.querySelectorAll(".tree-item");
    folders.forEach(item => {
      const title = item.querySelector(".tree-item-title");
      if (title && excludedFolders.includes(title.textContent.trim())) {
        item.style.display = "none";
      }
    });
  }

  // Sicherstellen, dass die Tree-Items da sind
  const waitForTreeReady = (tries = 0) => {
    if (document.querySelectorAll(".tree-item-title").length === 0 && tries < 25) {
      setTimeout(() => waitForTreeReady(tries + 1), 100);
    } else {
      hideUnwantedFolders();
    }
  };

  updateSidebarOpacity();
  waitForTreeReady();
  window.addEventListener("scroll", updateSidebarOpacity);

  const observer = new MutationObserver(hideUnwantedFolders);
  observer.observe(document.body, { childList: true, subtree: true });
});
