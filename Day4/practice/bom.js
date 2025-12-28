function updateSize() {
  document.getElementById("size").innerHTML =
    "Width: " + window.innerWidth + ", Height: " + window.innerHeight;
}

// Initial call
updateSize();

// Update when window is resized
window.addEventListener("resize", updateSize);