// Elementos del DOM
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const message = document.getElementById("message");
const container = document.querySelector('.container');
const clickCounter = document.getElementById("clickCounter");
const counterNum = document.getElementById("counterNum");

let escapeAttempts = 0;

// ========== INICIALIZACIÓN ==========

// Crear estrellas brillantes
function createStars() {
    const starsContainer = document.getElementById('stars');
    for (let i = 0; i < 50; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        starsContainer.appendChild(star);
    }
}

// Crear partículas de fondo
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const colors = ['rgba(255, 107, 157, 0.3)', 'rgba(255, 202, 87, 0.3)', 'rgba(72, 219, 251, 0.3)', 'rgba(255, 159, 243, 0.3)'];
    
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        const size = Math.random() * 60 + 20;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        particle.style.animation = `float ${Math.random() * 10 + 15}s ease-in-out infinite`;
        particle.style.animationDelay = Math.random() * 5 + 's';
        particlesContainer.appendChild(particle);
    }
}

// ========== CORAZONES FLOTANTES ==========

function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDuration = (Math.random() * 3 + 4) + 's';
    heart.style.animationDelay = Math.random() * 2 + 's';
    
    // Variar tamaño
    const scale = Math.random() * 0.5 + 0.8;
    heart.style.transform = `scale(${scale}) rotate(45deg)`;
    
    document.body.appendChild(heart);
    
    setTimeout(() => heart.remove(), 10000);
}

// Generar corazones continuamente
setInterval(createHeart, 300);

// ========== CONFETI ==========

function createConfetti() {
    const colors = ['#ff6b9d', '#feca57', '#48dbfb', '#ff9ff3', '#54a0ff', '#ff4d6d', '#a29bfe'];
    
    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDelay = Math.random() * 0.5 + 's';
            confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
            
            // Formas variadas
            if (Math.random() > 0.5) {
                confetti.style.borderRadius = '50%';
            } else {
                confetti.style.width = '15px';
                confetti.style.height = '5px';
            }
            
            document.body.appendChild(confetti);
            
            setTimeout(() => confetti.remove(), 4000);
        }, i * 20);
    }
}

// ========== FUEGOS ARTIFICIALES ==========

function createFirework(x, y) {
    const colors = ['#ff6b9d', '#feca57', '#48dbfb', '#ff9ff3', '#54a0ff'];
    const particles = 30;
    
    for (let i = 0; i < particles; i++) {
        const firework = document.createElement('div');
        firework.className = 'firework';
        firework.style.left = x + 'px';
        firework.style.top = y + 'px';
        firework.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        const angle = (Math.PI * 2 * i) / particles;
        const velocity = Math.random() * 100 + 50;
        const tx = Math.cos(angle) * velocity;
        const ty = Math.sin(angle) * velocity;
        
        firework.style.setProperty('--x', tx + 'px');
        firework.style.setProperty('--y', ty + 'px');
        firework.style.animation = 'firework-explode 1s ease-out forwards';
        
        document.body.appendChild(firework);
        
        setTimeout(() => firework.remove(), 1000);
    }
}

function launchMultipleFireworks() {
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            const x = Math.random() * window.innerWidth;
            const y = Math.random() * (window.innerHeight / 2);
            createFirework(x, y);
        }, i * 300);
    }
}

// ========== LÓGICA DEL BOTÓN "NO" ==========

function moveNoButton() {
    const containerRect = container.getBoundingClientRect();
    const btnRect = noBtn.getBoundingClientRect();
    
    let x, y;
    let attempts = 0;
    const maxAttempts = 20;
    
    do {
        x = Math.random() * (window.innerWidth - btnRect.width - 40) + 20;
        y = Math.random() * (window.innerHeight - btnRect.height - 40) + 20;
        attempts++;
    } while (
        attempts < maxAttempts &&
        x > containerRect.left - 150 &&
        x < containerRect.right + 150 &&
        y > containerRect.top - 150 &&
        y < containerRect.bottom + 150
    );
    
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
    
    // Incrementar contador
    escapeAttempts++;
    counterNum.textContent = escapeAttempts;
    clickCounter.style.display = 'block';
    
    // Agregar animación de rebote al contador
    clickCounter.style.animation = 'none';
    setTimeout(() => {
        clickCounter.style.animation = 'bounce 0.5s ease';
    }, 10);
    
    // Cambiar mensaje según intentos
    updateNoButtonText();
}

function updateNoButtonText() {
    const messages = [
        "No 😢",
        "¿Seguro? 🥺",
        "Piénsalo bien 💭",
        "No hagas esto 😭",
        "Por favor... 🙏",
        "Dame una oportunidad 💝",
        "Te arrepentirás 😏",
        "Última oportunidad 💔",
        "Ya casi... 🎯",
        "¡Imposible escapar! 😈"
    ];
    
    const index = Math.min(escapeAttempts, messages.length - 1);
    noBtn.textContent = messages[index];
    
    // Hacer el botón más pequeño cada vez
    if (escapeAttempts > 3) {
        const scale = Math.max(0.6, 1 - (escapeAttempts * 0.05));
        noBtn.style.transform = `scale(${scale})`;
    }
    
    // Hacer el botón Sí más grande
    if (escapeAttempts > 2) {
        const scale = Math.min(1.3, 1 + (escapeAttempts * 0.03));
        yesBtn.style.transform = `scale(${scale})`;
    }
}

// Eventos del botón No
noBtn.addEventListener("mouseover", moveNoButton);

noBtn.addEventListener("click", (e) => {
    e.preventDefault();
    moveNoButton();
    
    // Agregar efecto de shake al contenedor
    container.style.animation = 'none';
    setTimeout(() => {
        container.style.animation = 'fadeIn 1s ease, float-container 6s ease-in-out infinite';
    }, 10);
});

// Movimiento en móvil (touch)
noBtn.addEventListener("touchstart", (e) => {
    e.preventDefault();
    moveNoButton();
});

// ========== LÓGICA DEL BOTÓN "SÍ" ==========

yesBtn.addEventListener("click", () => {
    // Ocultar elementos
    message.style.display = "block";
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
    clickCounter.style.display = "none";
    
    // Efectos visuales
    createConfetti();
    
    setTimeout(() => {
        launchMultipleFireworks();
    }, 500);
    
    // Cambiar el fondo
    document.body.style.background = 'linear-gradient(135deg, #f093fb 0%, #f5576c 50%, #feca57 100%)';
    document.body.style.backgroundSize = '400% 400%';
    
    // Hacer el contenedor más grande
    container.style.transform = 'scale(1.05)';
    container.style.boxShadow = '0 30px 80px rgba(255, 77, 109, 0.5), 0 0 60px rgba(255, 77, 109, 0.4)';
    
    // Crear más corazones
    for (let i = 0; i < 20; i++) {
        setTimeout(createHeart, i * 100);
    }
    
    // Reproducir sonido (opcional, comentado por defecto)
    // playSuccessSound();
});

// ========== EFECTOS ADICIONALES ==========

// Efecto de parallax con el mouse
document.addEventListener('mousemove', (e) => {
    const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
    const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
    
    container.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

// Efecto de brillo siguiendo al cursor
document.addEventListener('mousemove', (e) => {
    const glow = document.createElement('div');
    glow.style.position = 'absolute';
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
    glow.style.width = '20px';
    glow.style.height = '20px';
    glow.style.borderRadius = '50%';
    glow.style.background = 'radial-gradient(circle, rgba(255, 255, 255, 0.8), transparent)';
    glow.style.pointerEvents = 'none';
    glow.style.zIndex = '1000';
    glow.style.animation = 'fadeOut 1s ease-out forwards';
    
    document.body.appendChild(glow);
    
    setTimeout(() => glow.remove(), 1000);
});

// Añadir animación de fadeOut
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOut {
        from { opacity: 1; transform: scale(1); }
        to { opacity: 0; transform: scale(2); }
    }
`;
document.head.appendChild(style);

// ========== INICIAR EFECTOS ==========

// Crear efectos de fondo al cargar
createStars();
createParticles();

// Mensaje de bienvenida en consola
console.log('%c💝 ¡Bienvenido a la mejor pregunta de tu vida! 💝', 'font-size: 20px; color: #ff4d6d; font-weight: bold;');
console.log('%c¿Qué esperas para decir que sí? 😊', 'font-size: 14px; color: #ff6b9d;');
