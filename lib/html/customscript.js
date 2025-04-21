// Fokusmodus bei Scroll: Sidebar-Transparenz dynamisch steuern und unerwünschte Ordner ausblenden

document.addEventListener("DOMContentLoaded", () => {
  // Elemente für die Sidebars abrufen
  const leftSidebar = document.querySelector('.sidebar-left');
  const rightSidebar = document.querySelector('.sidebar-right');

  // Funktion zur Aktualisierung der Sidebar-Transparenz
  function updateSidebarOpacity() {
    const atTop = window.scrollY <= 0;
    [leftSidebar, rightSidebar].forEach(sidebar => {
      if (sidebar) {
        sidebar.classList.toggle('sidebar-faded', !atTop);
      }
    });
  }

  // Scroll-Event hinzufügen
  window.addEventListener('scroll', updateSidebarOpacity);
  updateSidebarOpacity(); // Initialer Zustand

  // Unerwünschte Ordner ausblenden
  const unwantedFolders = ["Meta", "Anlage"];
  document.querySelectorAll(".tree-item").forEach(item => {
    const title = item.querySelector(".tree-item-title");
    if (title && unwantedFolders.includes(title.textContent.trim())) {
      item.style.display = "none";
    }
  });
});

