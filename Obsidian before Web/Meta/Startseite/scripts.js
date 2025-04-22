<script>
document.addEventListener("DOMContentLoaded", () => {
  const magnetImage = document.querySelector(".magnet-image");
  const markerText = document.querySelector(".marker-text");

  // Funktion zur Anwendung von Stilen
  const applyStyles = (element, styles) => {
    Object.assign(element.style, styles);
  };

  // Dynamische Berechnung der Mitte des Fensters
  let centerX = window.innerWidth / 2;
  let centerY = window.innerHeight / 2;
  window.addEventListener("resize", () => {
    centerX = window.innerWidth / 2;
    centerY = window.innerHeight / 2;
  });

  // Magnet-Effekt
  const handleMouseMove = (e) => {
    const x = e.clientX - centerX;
    const y = e.clientY - centerY;
    applyStyles(magnetImage, {
      transform: `translate(${x * 0.02}px, ${y * 0.02}px)`
    });
  };
  document.addEventListener("mousemove", handleMouseMove);

  // Lade-Effekt für Bild
  applyStyles(magnetImage, { opacity: "1", transform: "scale(1.05)" });
  setTimeout(() => {
    applyStyles(magnetImage, { opacity: "0.7", transform: "" });
  }, 1000);

  // Lade- und Hover-Effekt für Markertext
  const setMarkerBackground = () => {
    applyStyles(markerText, { backgroundSize: "100% .5em" });
  };
  setTimeout(setMarkerBackground, 1000);
  markerText.addEventListener("mouseover", setMarkerBackground);
  markerText.addEventListener("mouseleave", setMarkerBackground); // Marker bleibt stehen
});
</script>