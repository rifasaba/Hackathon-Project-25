const targetDate = new Date("Nov 12, 2025 10:00:00").getTime();
function toBanglaNumber(num) {
  const engToBan = ['০','১','২','৩','৪','৫','৬','৭','৮','৯'];
  return num.toString().split('').map(d => engToBan[d] || d).join('');
}
function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance < 0) {
    document.getElementById("countdown").innerText = "ইভেন্ট শুরু হয়েছে!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById('countdown').innerText = 
    `${toBanglaNumber(days)} দিন ${toBanglaNumber(hours)} ঘন্টা ${toBanglaNumber(minutes)} মিনিট ${toBanglaNumber(seconds)} সেকেন্ড`;
}


setInterval(updateCountdown, 1000);
updateCountdown();

//----Animated-Background-----


const canvas = document.getElementById("particle-bg");
const ctx = canvas.getContext("2d");


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
for (let i = 0; i < 100; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.2 + 0.2, 
    opacity: Math.random(),
    fade: Math.random() * 0.02 + 0.005, 
  });
}

function drawSparkles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach((p) => {
    ctx.beginPath();
    ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
    ctx.shadowBlur = 10;
    ctx.shadowColor = "white";
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();


    p.opacity += p.fade;
    if (p.opacity <= 0 || p.opacity >= 1) p.fade *= -1;
  });

  requestAnimationFrame(drawSparkles);
}

drawSparkles();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
