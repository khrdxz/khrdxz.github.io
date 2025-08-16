// Relógio
function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
}
setInterval(updateClock, 1000);
updateClock();

// Intro + efeito de movimento do fundo
setTimeout(() => {
    document.getElementById('introScreen').classList.add('hidden');  
    document.body.classList.remove('no-scroll');  

    document.addEventListener("mousemove", (e) => {
        let x = (e.clientX / window.innerWidth) * 40;
        let y = (e.clientY / window.innerHeight) * 50 - 25;
        document.body.style.backgroundPosition = `${50 - x}% ${50 - y}%`;
    });
}, 2000);

