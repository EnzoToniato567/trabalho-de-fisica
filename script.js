const select = document.getElementById('material');
const barreira = document.querySelector('.barreira');
const raio = document.querySelector('.raio');

select.addEventListener('change', () => {
  const material = select.value;
  barreira.textContent = material;

  if (material === 'papel') {
    barreira.style.background = 'rgba(255, 215, 0, 0.1)';
    raio.style.width = '300px';
  } else if (material === 'aluminio') {
    barreira.style.background = 'rgba(255, 215, 0, 0.4)';
    raio.style.width = '180px';
  } else {
    barreira.style.background = 'rgba(255, 215, 0, 0.8)';
    raio.style.width = '80px';
  }
});