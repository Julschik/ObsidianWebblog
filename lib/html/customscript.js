// Fokusmodus & Ordnerausblendung für Julian-hill.de

document.addEventListener("DOMContentLoaded", () => {
  const leftSidebar = document.querySelector('.sidebar-left');
  const rightSidebar = document.querySelector('.sidebar-right');
  const excludedFolders = ["Meta", "Anlage", "Anhang"];

  // === Fokusmodus: Sidebar transparent beim Scrollen ===
  function updateSidebarOpacity() {
    const atTop = window.scrollY <= 0;
    [leftSidebar, rightSidebar].forEach(sidebar => {
      if (sidebar) {
        sidebar.classList.toggle('sidebar-faded', !atTop);
      }
    });
  }

  window.addEventListener('scroll', updateSidebarOpacity);
  updateSidebarOpacity(); // initial

  // === Funktion zum Ausblenden unerwünschter Tree-Folder ===
  function hideUnwantedFolders() {
    const allTreeItems = document.querySelectorAll(".tree-item");
    allTreeItems.forEach(item => {
      const titleEl = item.querySelector(".tree-item-title");
      if (!titleEl) return;

      const folderName = titleEl.textContent.trim();
      if (excludedFolders.includes(folderName)) {
        item.style.display = "none";
      }
    });
  }

  // === MutationObserver, damit auch nach Lazy Load oder Neuaufbau funktioniert ===
  const observer = new MutationObserver((mutations) => {
    hideUnwantedFolders();
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });

  hideUnwantedFolders(); // einmal initial ausführen
});
