// Fokusmodus bei Scroll: Sidebar-Transparenz dynamisch steuern

document.addEventListener("DOMContentLoaded", function () {
  const leftSidebar = document.querySelector('.sidebar-left');
  const rightSidebar = document.querySelector('.sidebar-right');

  function updateSidebarOpacity() {
    const atTop = window.scrollY <= 0;
    if (atTop) {
      leftSidebar?.classList.remove('sidebar-faded');
      rightSidebar?.classList.remove('sidebar-faded');
    } else {
      leftSidebar?.classList.add('sidebar-faded');
      rightSidebar?.classList.add('sidebar-faded');
    }
  }

  window.addEventListener('scroll', updateSidebarOpacity);
  updateSidebarOpacity(); // Initialer Zustand
});

document.addEventListener("DOMContentLoaded", () => {
  const unwantedFolders = ["Meta", "Anlage"];

  document.querySelectorAll(".tree-item").forEach(item => {
    const title = item.querySelector(".tree-item-title");
    if (title && unwantedFolders.includes(title.textContent.trim())) {
      item.style.display = "none";
    }
  });
});

