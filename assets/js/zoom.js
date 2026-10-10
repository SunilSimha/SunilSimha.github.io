// Initialize medium zoom.
$(document).ready(function () {
  medium_zoom = mediumZoom("[data-zoomable]", {
    background: getComputedStyle(document.documentElement).getPropertyValue("--global-bg-color") + "ee", // + 'ee' for trasparency.
  });

  // Caption shown under a zoomed image that has a data-zoom-caption attribute (e.g. publication previews).
  const caption = document.createElement("div");
  caption.className = "zoom-caption";
  caption.setAttribute("aria-live", "polite");
  document.body.appendChild(caption);

  medium_zoom.on("open", function (event) {
    const text = event.target.getAttribute("data-zoom-caption");
    caption.textContent = "";
    if (!text) {
      medium_zoom.update({ container: { bottom: 0 } });
      return;
    }
    const title = event.target.getAttribute("data-zoom-title");
    if (title) {
      const heading = document.createElement("div");
      heading.className = "zoom-caption-title";
      heading.textContent = title;
      caption.appendChild(heading);
    }
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    caption.appendChild(paragraph);
    caption.classList.add("zoom-caption--visible");
    // Reserve the caption's height so the zoomed image is fitted above it.
    medium_zoom.update({ container: { bottom: caption.offsetHeight } });
  });

  medium_zoom.on("close", function () {
    caption.classList.remove("zoom-caption--visible");
  });
});
