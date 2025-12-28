// ! Click event
document.getElementById("clickBtn").addEventListener("click", () => {
  alert("Button Clicked!");
});

// ! Mouse Event
const hoverBox = document.getElementById("hoverBox");

hoverBox.addEventListener("mouseenter", () => {
  hoverBox.style.backgroundColor = "lightgreen";
});

hoverBox.addEventListener("mouseleave", () => {
  hoverBox.style.backgroundColor = "#f1f1f1";
});

// !Input Event
document.getElementById("textInput").addEventListener("input", (e) => {
  console.log("Input Value:", e.target.value);
});

// ! Keyboard Event
document.getElementById("keyInput").addEventListener("keydown", (e) => {
  console.log("Key Pressed:", e.key);
});

// !Change event
document.getElementById("selectBox").addEventListener("change", (e) => {
  alert("Selected: " + e.target.value);
});

// ! Submit Event
document.getElementById("myForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Form Submitted!");
});

// ! Windows Event
window.addEventListener("resize", () => {
  document.getElementById("resizeText").innerText =
    "Window Width: " + window.innerWidth;
});

// !DOM ContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM Fully Loaded");
});
