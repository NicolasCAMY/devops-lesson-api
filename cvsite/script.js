const toast = (msg) => {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(t._x);
  t._x = setTimeout(() => t.classList.remove("show"), 1600);
};

// Egg #1: bouton thème
document.getElementById("themeBtn").addEventListener("click", () => {
  const root = document.documentElement;
  const next = root.getAttribute("data-theme") === "light" ? "" : "light";
  root.setAttribute("data-theme", next);
  toast(next === "light" ? "Mode clair ☀️" : "Mode sombre 🌙");
});

// Egg #2: 5 clics sur le titre -> confetti emoji
let c = 0;
document.getElementById("title").addEventListener("click", () => {
  c++;
  if (c >= 5) {
    c = 0;
    toast("Easter egg débloqué 🎉🥚");
    document.body.style.transform = "translateZ(0)";
    document.body.animate(
      [{ filter: "hue-rotate(0deg)" }, { filter: "hue-rotate(360deg)" }],
      { duration: 900, iterations: 1 }
    );
  }
});

// Egg #3: taper "cv" au clavier -> affiche un message
let buf = "";
window.addEventListener("keydown", (e) => {
  buf = (buf + e.key).toLowerCase().slice(-2);
  if (buf === "cv") toast("Tu as tapé “cv” 😄");
});
