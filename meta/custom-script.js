// Custom Script – Julian Edition

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
  updateSidebarOpacity();

  [leftSidebar, rightSidebar].forEach(sidebar => {
    if (!sidebar) return;
    sidebar.addEventListener("mouseenter", () => sidebar.style.opacity = "1");
    sidebar.addEventListener("mouseleave", () => updateSidebarOpacity());
  });
});
