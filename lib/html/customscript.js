// Fokusmodus & Ordner-Filter für Julian-hill.de

document.addEventListener("DOMContentLoaded", () => {
  const leftSidebar = document.querySelector('.sidebar-left');
  const rightSidebar = document.querySelector('.sidebar-right');
  const excludedFolders = ["Meta", "Anlage"];

  /** Fokusmodus: Opacity je nach Scrollposition */
  function updateSidebarOpacity() {
    const atTop = window.scrollY <= 0;
    [leftSidebar, rightSidebar].forEach(sidebar => {
      if (sidebar) {
        sidebar.classList.toggle('sidebar-faded', !atTop);
      }
    });
  }

  /** Ordner mit bestimmten Namen aus dem Filetree ausblenden */
  function hideUnwantedFolders() {
    document.querySelectorAll(".tree-item").forEach(item => {
      const titleEl = item.querySelector(".tree-item-title");
      if (!titleEl) return;

      const folderName = titleEl.textContent.trim();
      if (excludedFolders.includes(folderName)) {
        item.style.display = "none";
      }
    });
  }

  // Initiale Ausführung
  updateSidebarOpacity();
  hideUnwantedFolders();

  // Beim Scrollen Fokusmodus anwenden
  window.addEventListener('scroll', updateSidebarOpacity);

  // Beobachter für DOM-Änderungen (z. B. Lazy Load oder Tree-Updates)
  const observer = new MutationObserver(() => {
    hideUnwantedFolders();
  });
  observer.observe(document.body, { childList: true, subtree: true });
});
