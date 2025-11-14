// Gestion musique
const musicBtn = document.getElementById('musicBtn');
const bgMusic = document.getElementById('bgMusic');
let playing = false;
musicBtn.addEventListener('click', () => {
  if (!playing) { bgMusic.play(); musicBtn.textContent = '🔇 Pause Music'; }
  else { bgMusic.pause(); musicBtn.textContent = '🎵 Play Music'; }
  playing = !playing;
});

// Particules Ki
const canvas = document.getElementById('bgCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];
for (let i=0; i<150; i++){
  particles.push({
    x: Math.random()*canvas.width,
    y: Math.random()*canvas.height,
    radius: Math.random()*3+1,
    speedX: (Math.random()-0.5)*2,
    speedY: (Math.random()-0.5)*2,
    alpha: Math.random()
  });
}

function animate() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI*2);
    ctx.fillStyle = `rgba(0,255,255,${p.alpha})`;
    ctx.fill();
    p.x += p.speedX;
    p.y += p.speedY;
    if(p.x<0 || p.x>canvas.width) p.speedX *= -1;
    if(p.y<0 || p.y>canvas.height) p.speedY *= -1;
  });
  requestAnimationFrame(animate);
}
animate();

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
