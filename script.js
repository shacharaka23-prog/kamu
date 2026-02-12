const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const container = document.querySelector('.container');

let noClickCount = 0;
let avoidMode = false;
let yesBtnScale = 1;

yesBtn.addEventListener('click', () => {
  container.innerHTML = `
    <h1 style="color:#e75480; font-size:2.5rem; margin-bottom:30px;">
      aku tau kamu pasti mau ! 🎉
    </h1>

    <div style="color:#e75480; font-size:1.3rem; font-weight:bold;">
      uhuy balikan! 💕
    </div>
  `;
  document.body.style.background = "linear-gradient(135deg, #ffb6c1, #ffe4e1)";
});

noBtn.addEventListener('click', () => {
  noClickCount++;
  yesBtnScale += 0.3; // Membesarkan tombol Yes setiap klik No
  yesBtn.style.transform = `scale(${yesBtnScale})`;

  if (noClickCount === 1) {
    noBtn.textContent = "serius ?";
  } else if (noClickCount === 2) {
    noBtn.textContent = "mana bisa";
  } else if (noClickCount === 3) {
    noBtn.textContent = "coba tekan aku kalo serius";
    avoidMode = true;
  }
});

noBtn.addEventListener('mouseover', () => {
  if (avoidMode) {
    const containerRect = container.getBoundingClientRect();
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;
    const maxX = containerRect.width - btnWidth;
    const maxY = containerRect.height - btnHeight;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noBtn.style.position = 'absolute';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
  }
});