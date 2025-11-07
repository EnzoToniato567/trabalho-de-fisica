const select = document.getElementById("material");
const barreira = document.querySelector(".barreira");
const raio = document.querySelector(".raio");

select.addEventListener("change", () => {
  const material = select.value;
  barreira.textContent = material;

  if (material === "papel") {
    barreira.style.background = "rgba(221, 8, 8, 0.1)";
    raio.style.width = "300px";
  } else if (material === "aluminio") {
    barreira.style.background = "rgba(198, 94, 9, 0.4)";
    raio.style.width = "180px";
  } else {
    barreira.style.background = "rgba(36, 213, 20, 0.8)";
    raio.style.width = "80px";
  }
});
