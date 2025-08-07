const cursorCircle = document.getElementById("cursor-circle");

// Gerakkan lingkaran mengikuti mouse
document.addEventListener("mousemove", (e) => {
  cursorCircle.style.top = `${e.clientY}px`;
  cursorCircle.style.left = `${e.clientX}px`;
});

// Tambahkan animasi saat klik
document.addEventListener("mousedown", () => {
  cursorCircle.classList.add("clicked");
});

document.addEventListener("mouseup", () => {
  setTimeout(() => {
    cursorCircle.classList.remove("clicked");
  }, 150); // Biarkan animasi selesai dulu
});
