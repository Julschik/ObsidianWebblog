localStorage.setItem("theme", "light");
document.addEventListener("DOMContentLoaded", () => {
  const excludedFolders = ["Meta", "Anhang", "Anlage"];

  const updateSidebarOpacity = () => {
    const atTop = window.scrollY <= 0;
    document.querySelectorAll('.sidebar-left, .sidebar-right').forEach(sidebar => {
      sidebar?.classList.toggle('sidebar-faded', !atTop);
    });
  };

  const hideUnwantedFolders = () => {
    document.querySelectorAll(".tree-item").forEach(item => {
      const title = item.querySelector(".tree-item-title")?.textContent.trim();
      if (excludedFolders.includes(title)) {
        item.style.display = "none";
      }
    });
  };

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

  new MutationObserver(hideUnwantedFolders).observe(document.body, { childList: true, subtree: true });
});

const wrapper = document.getElementById('magnetWrapper');
if (wrapper) {
  const strength = 40; // je kleiner, desto stärker die Bewegung

  const resetTransform = () => {
    wrapper.style.transform = `translate(0, 0)`;
  };

  document.addEventListener('mousemove', (e) => {
    const rect = wrapper.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (e.clientX - centerX) / strength;
    const deltaY = (e.clientY - centerY) / strength;

    wrapper.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
  });

  wrapper.addEventListener('mouseenter', () => {
    wrapper.classList.add('hovered');
    resetTransform();
  });

  wrapper.addEventListener('mouseleave', () => {
    wrapper.classList.remove('hovered');
    resetTransform();
  });
}