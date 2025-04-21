document.addEventListener("DOMContentLoaded", () => {
  const excludedFolders = ["Meta", "Anlage", "Anhang"];

  function updateSidebarOpacity() {
    const atTop = window.scrollY <= 0;
    document.querySelectorAll('.sidebar-left, .sidebar-right').forEach(sidebar => {
      if (sidebar) {
        sidebar.classList.toggle('sidebar-faded', !atTop);
      }
    });
  }

  function hideUnwantedFolders() {
    const items = document.querySelectorAll(".tree-item");
    items.forEach(item => {
      const title = item.querySelector(".tree-item-title");
      if (!title) return;
      const name = title.textContent.trim();
      if (excludedFolders.includes(name)) {
        item.style.display = "none";
      }
    });
  }

  // Wiederholtes Prüfen, bis Tree vorhanden ist
  function tryHideUntilReady(attempts = 0) {
    if (document.querySelectorAll(".tree-item-title").length === 0 && attempts < 20) {
      setTimeout(() => tryHideUntilReady(attempts + 1), 150);
    } else {
      hideUnwantedFolders();
    }
  }

  // Initial starten
  updateSidebarOpacity();
  tryHideUntilReady();

  // Events
  window.addEventListener("scroll", updateSidebarOpacity);

  // Auch spätere DOM-Änderungen beobachten
  const observer = new MutationObserver(hideUnwantedFolders);
  observer.observe(document.body, { childList: true, subtree: true });
});
