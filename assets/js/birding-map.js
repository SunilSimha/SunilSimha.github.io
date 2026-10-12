// Interactive map of where my bird photos were taken (see _includes/birding.liquid and _data/birding.yml).
// Clicking a marker shows that photo in the viewer next to the map, using the Macaulay Library's official embed.
window.addEventListener("load", () => {
  const mapEl = document.getElementById("birding-map");
  const viewerEl = document.getElementById("birding-viewer");
  const dataEl = document.getElementById("birding-data");
  if (!mapEl || !viewerEl || !dataEl || typeof L === "undefined") return;

  const photos = JSON.parse(dataEl.textContent).filter((p) => p.ml && Number.isFinite(Number(p.lat)) && Number.isFinite(Number(p.lon)));
  if (!photos.length) {
    mapEl.parentElement.hidden = true;
    return;
  }

  // Photos taken at (nearly) the same place share a marker.
  const groups = new Map();
  photos.forEach((p) => {
    const key = `${Number(p.lat).toFixed(3)},${Number(p.lon).toFixed(3)}`;
    if (!groups.has(key)) groups.set(key, { lat: Number(p.lat), lon: Number(p.lon), photos: [] });
    groups.get(key).photos.push(p);
  });

  const map = L.map(mapEl, {
    worldCopyJump: true,
    minZoom: 1,
    zoomSnap: 0.5,
    scrollWheelZoom: false,
  });

  // OpenStreetMap basemap; the stylesheet dims it in dark mode.
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  const accent = () => getComputedStyle(document.documentElement).getPropertyValue("--global-theme-color").trim() || "#b509ac";
  const baseRadius = (group) => Math.min(7 + 2 * Math.sqrt(group.photos.length - 1), 14);
  const markerStyle = (selected) => ({
    color: selected ? accent() : "#ffffff",
    weight: selected ? 4 : 2,
    fillColor: accent(),
    fillOpacity: selected ? 1 : 0.8,
  });

  // The viewer: title, the embedded photo, and previous/next buttons when a place has several photos.
  const title = document.createElement("div");
  title.className = "birding-viewer-title";
  const frame = document.createElement("div");
  frame.className = "birding-viewer-frame";
  const iframe = document.createElement("iframe");
  iframe.title = "Photo from the Macaulay Library";
  iframe.allowFullscreen = true;
  frame.appendChild(iframe);
  const nav = document.createElement("div");
  nav.className = "birding-viewer-nav";
  const counter = document.createElement("span");
  const step = (label, delta) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = label;
    button.setAttribute("aria-label", delta < 0 ? "Previous photo" : "Next photo");
    button.addEventListener("click", () => show(current, (index + delta + current.photos.length) % current.photos.length));
    return button;
  };
  nav.append(step("‹", -1), counter, step("›", 1));
  viewerEl.append(title, frame, nav);

  let current = null;
  let index = 0;
  const show = (group, i) => {
    const changedPlace = group !== current;
    current = group;
    index = i;
    const photo = group.photos[i];
    const place = photo.place || (group.photos.find((p) => p.place) || {}).place;
    title.textContent = place || photo.species || "";
    frame.classList.toggle("birding-viewer-frame--portrait", Boolean(photo.portrait));
    iframe.src = `https://macaulaylibrary.org/asset/${String(photo.ml).replace(/\D/g, "")}/embed`;
    counter.textContent = `${i + 1} / ${group.photos.length}`;
    nav.hidden = group.photos.length < 2;
    if (changedPlace) {
      markers.forEach((m) => m.setStyle(markerStyle(m.group === group)));
      const selected = markers.find((m) => m.group === group);
      if (selected) selected.bringToFront();
    }
  };

  const markers = [];
  groups.forEach((group) => {
    const marker = L.circleMarker([group.lat, group.lon], { radius: baseRadius(group), ...markerStyle(false) }).addTo(map);
    marker.group = group;
    const species = [...new Set(group.photos.map((p) => p.species).filter(Boolean))];
    if (species.length) {
      const tip = document.createElement("span");
      tip.textContent = species.length > 3 ? `${species.slice(0, 3).join(", ")} and more` : species.join(", ");
      marker.bindTooltip(tip, { direction: "top" });
    }
    marker.on("click", () => show(group, 0));
    markers.push(marker);
  });

  map.fitBounds(L.latLngBounds(markers.map((m) => m.getLatLng())), { padding: [40, 40], maxZoom: 8 });

  // Start on the newest photo (the first one listed).
  show(markers.find((m) => m.group.photos.includes(photos[0])).group, 0);

  // Re-color the markers when the site theme changes.
  new MutationObserver(() => markers.forEach((m) => m.setStyle(markerStyle(m.group === current)))).observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });

  // Don't hijack page scrolling: the wheel only zooms the map after clicking it.
  mapEl.addEventListener("click", () => map.scrollWheelZoom.enable());
  mapEl.addEventListener("mouseleave", () => map.scrollWheelZoom.disable());
});
