// ========== ELEMENTOS DEL DOM ==========
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const message = document.getElementById("message");
const container = document.querySelector('.container');
const clickCounter = document.getElementById("clickCounter");
const counterNum = document.getElementById("counterNum");

// Controles
const themeToggle = document.getElementById("themeToggle");
const musicToggle = document.getElementById("musicToggle");
const volumeBtn = document.getElementById("volumeBtn");
const bgMusic = document.getElementById("bgMusic");

// Modales
const letterModal = document.getElementById("letterModal");
const galleryModal = document.getElementById("galleryModal");

const showLetter = document.getElementById("showLetter");
const showGallery = document.getElementById("showGallery");

const closeLetter = document.getElementById("closeLetter");
const closeGallery = document.getElementById("closeGallery");

// Variables globales
let escapeAttempts = 0;
let isPlaying = false;
let currentVolume = 0.3;

// ========== MENSAJES ROMÁNTICOS ==========
const loveMessages = [
    "Eres mi persona favorita en el mundo 💕",
    "Contigo todo es mejor ✨",
    "Eres mi sol en días nublados ☀️",
    "Mi corazón late por ti 💓",
    "Eres mi sueño hecho realidad 🌟",
    "Juntos somos perfectos 💑",
    "Eres mi felicidad 😊",
    "Te pienso todos los días 💭",
    "Eres mi todo 💖",
    "Mi amor por ti crece cada día 🌹"
];

let currentMessageIndex = 0;

// ========== INICIALIZACIÓN ==========
window.addEventListener('DOMContentLoaded', () => {
    createStars();
    createParticles();
    createRosePetals();
    createButterflies();
    createFireflies();
    startCountdown();
    startCarousel();
    
    // Configurar volumen inicial
    bgMusic.volume = currentVolume;
    
    console.log('%c💝 ¡Bienvenido a la mejor pregunta de tu vida! 💝', 'font-size: 24px; color: #ff4d6d; font-weight: bold; text-shadow: 2px 2px 4px rgba(0,0,0,0.2);');
    console.log('%c¿Qué esperas para decir que sí? 😊✨', 'font-size: 16px; color: #ff6b9d; font-weight: 600;');
});

// ========== CREAR ESTRELLAS ==========
function createStars() {
    const starsContainer = document.getElementById('stars');
    for (let i = 0; i < 80; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        star.style.animationDuration = (Math.random() * 2 + 2) + 's';
        starsContainer.appendChild(star);
    }
}

// ========== CREAR PARTÍCULAS ==========
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const colors = ['rgba(255, 107, 157, 0.3)', 'rgba(255, 202, 87, 0.3)', 'rgba(72, 219, 251, 0.3)', 'rgba(255, 159, 243, 0.3)'];
    
    for (let i = 0; i < 40; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        const size = Math.random() * 80 + 30;
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

// ========== CREAR PÉTALOS DE MARGARITA ==========
function createRosePetals() {
    const petalsContainer = document.getElementById('rosePetals');
    
    setInterval(() => {
        const petal = document.createElement('div');
        petal.className = 'petal';
        petal.style.left = Math.random() * 100 + '%';
        petal.style.animationDuration = (Math.random() * 3 + 4) + 's';
        petal.style.animationDelay = Math.random() * 2 + 's';
        
        petalsContainer.appendChild(petal);
        
        setTimeout(() => petal.remove(), 8000);
    }, 600);
}

// ========== CREAR MARIPOSAS ==========
function createButterflies() {
    const butterfliesContainer = document.getElementById('butterflies');
    const butterflyEmojis = ['🦋', '🦋', '🦋'];
    
    setInterval(() => {
        const butterfly = document.createElement('div');
        butterfly.className = 'butterfly';
        butterfly.textContent = butterflyEmojis[Math.floor(Math.random() * butterflyEmojis.length)];
        butterfly.style.left = (Math.random() * 90) + 5 + '%';
        butterfly.style.bottom = '-50px';
        butterfly.style.animationDuration = (Math.random() * 3 + 4) + 's';
        
        butterfliesContainer.appendChild(butterfly);
        
        setTimeout(() => butterfly.remove(), 8000);
    }, 3000);
}

// ========== CREAR LUCIÉRNAGAS ==========
function createFireflies() {
    const firefliesContainer = document.getElementById('fireflies');
    
    for (let i = 0; i < 30; i++) {
        const firefly = document.createElement('div');
        firefly.className = 'firefly';
        firefly.style.left = Math.random() * 100 + '%';
        firefly.style.top = Math.random() * 100 + '%';
        firefly.style.animationDelay = Math.random() * 5 + 's';
        firefly.style.animationDuration = (Math.random() * 4 + 6) + 's';
        
        firefliesContainer.appendChild(firefly);
    }
}

// ========== CORAZONES FLOTANTES ==========
function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.textContent = '❤️';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDuration = (Math.random() * 3 + 4) + 's';
    heart.style.animationDelay = Math.random() * 2 + 's';
    
    const scale = Math.random() * 0.5 + 0.8;
    heart.style.fontSize = (20 * scale) + 'px';
    
    document.body.appendChild(heart);
    
    setTimeout(() => heart.remove(), 10000);
}

setInterval(createHeart, 400);

// ========== CONFETI ==========
function createConfetti() {
    const colors = ['#ff6b9d', '#feca57', '#48dbfb', '#ff9ff3', '#54a0ff', '#ff4d6d', '#a29bfe', '#fd79a8'];
    
    for (let i = 0; i < 150; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDelay = Math.random() * 0.5 + 's';
            confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
            
            if (Math.random() > 0.5) {
                confetti.style.borderRadius = '50%';
            } else {
                confetti.style.width = '15px';
                confetti.style.height = '5px';
            }
            
            document.body.appendChild(confetti);
            
            setTimeout(() => confetti.remove(), 5000);
        }, i * 15);
    }
}

// ========== FUEGOS ARTIFICIALES ==========
function createFirework(x, y) {
    const colors = ['#ff6b9d', '#feca57', '#48dbfb', '#ff9ff3', '#54a0ff', '#ff4d6d'];
    const particles = 35;
    
    for (let i = 0; i < particles; i++) {
        const firework = document.createElement('div');
        firework.className = 'firework';
        firework.style.left = x + 'px';
        firework.style.top = y + 'px';
        firework.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        const angle = (Math.PI * 2 * i) / particles;
        const velocity = Math.random() * 100 + 80;
        const tx = Math.cos(angle) * velocity;
        const ty = Math.sin(angle) * velocity;
        
        firework.style.setProperty('--x', tx + 'px');
        firework.style.setProperty('--y', ty + 'px');
        firework.style.animation = 'firework-explode 1.2s ease-out forwards';
        
        document.body.appendChild(firework);
        
        setTimeout(() => firework.remove(), 1200);
    }
}

function launchMultipleFireworks() {
    for (let i = 0; i < 8; i++) {
        setTimeout(() => {
            const x = Math.random() * window.innerWidth;
            const y = Math.random() * (window.innerHeight / 2);
            createFirework(x, y);
        }, i * 400);
    }
}

// ========== CONTADOR DE SAN VALENTÍN ==========
function startCountdown() {
    function updateCountdown() {
        const now = new Date();
        const currentYear = now.getFullYear();
        let valentine = new Date(currentYear, 1, 14); // 14 de febrero
        
        if (now > valentine) {
            valentine = new Date(currentYear + 1, 1, 14);
        }
        
        const diff = valentine - now;
        
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        document.getElementById('days').textContent = String(days).padStart(2, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    }
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// ========== CARRUSEL DE MENSAJES ==========
function startCarousel() {
    const carouselMessage = document.querySelector('.carousel-message');
    
    function updateMessage() {
        carouselMessage.textContent = loveMessages[currentMessageIndex];
        currentMessageIndex = (currentMessageIndex + 1) % loveMessages.length;
    }
    
    updateMessage();
    setInterval(updateMessage, 4000);
}

// ========== LÓGICA DEL BOTÓN "NO" ==========
function clamp(v, min, max) {
    return Math.min(Math.max(v, min), max);
}

function moveNoButton() {
    const containerRect = container.getBoundingClientRect();
    const btnRect = noBtn.getBoundingClientRect();
    
    const safe = 15;
    const playAreaMargin = 80;
    
    let left = containerRect.left - playAreaMargin;
    let right = containerRect.right + playAreaMargin;
    let top = containerRect.top - playAreaMargin;
    let bottom = containerRect.bottom + playAreaMargin;
    
    left = clamp(left, safe, window.innerWidth - safe - btnRect.width);
    right = clamp(right, left + 1, window.innerWidth - safe);
    top = clamp(top, safe, window.innerHeight - safe - btnRect.height);
    bottom = clamp(bottom, top + 1, window.innerHeight - safe);
    
    const xMin = left;
    const xMax = Math.max(left, right - btnRect.width);
    const yMin = top;
    const yMax = Math.max(top, bottom - btnRect.height);
    
    let x = xMin, y = yMin;
    let attempts = 0;
    const maxAttempts = 50;
    
    do {
        x = xMin + Math.random() * (xMax - xMin);
        y = yMin + Math.random() * (yMax - yMin);
        attempts++;
        
        const isOverContainer = (
            x + btnRect.width > containerRect.left - 30 &&
            x < containerRect.right + 30 &&
            y + btnRect.height > containerRect.top - 30 &&
            y < containerRect.bottom + 30
        );
        
        if (!isOverContainer) break;
        
    } while (attempts < maxAttempts);
    
    noBtn.style.position = "fixed";
    noBtn.style.left = `${Math.round(x)}px`;
    noBtn.style.top = `${Math.round(y)}px`;
    
    escapeAttempts++;
    counterNum.textContent = escapeAttempts;
    clickCounter.style.display = "block";
    
    clickCounter.style.animation = "none";
    setTimeout(() => {
        clickCounter.style.animation = "bounce 0.5s ease";
    }, 10);
    
    updateNoButtonText();
    
    // Crear corazones al intentar escapar
    for (let i = 0; i < 3; i++) {
        setTimeout(createHeart, i * 100);
    }
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
        "Ya casi cedes... 🎯",
        "¡No puedes escapar! 😈"
    ];
    
    const index = Math.min(escapeAttempts, messages.length - 1);
    noBtn.textContent = messages[index];
    
    if (escapeAttempts > 3) {
        const scale = Math.max(0.5, 1 - (escapeAttempts * 0.06));
        noBtn.style.transform = `scale(${scale})`;
    }
    
    if (escapeAttempts > 2) {
        const scale = Math.min(1.4, 1 + (escapeAttempts * 0.04));
        yesBtn.style.transform = `scale(${scale})`;
    }
}

// Eventos del botón No
noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("click", (e) => {
    e.preventDefault();
    moveNoButton();
});
noBtn.addEventListener("touchstart", (e) => {
    e.preventDefault();
    moveNoButton();
});

// ========== LÓGICA DEL BOTÓN "SÍ" ==========
yesBtn.addEventListener("click", () => {
    message.style.display = "block";
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
    clickCounter.style.display = "none";
    
    createConfetti();
    
    setTimeout(() => {
        launchMultipleFireworks();
    }, 600);
    
    setTimeout(() => {
        launchMultipleFireworks();
    }, 2500);
    
    document.body.style.background = 'linear-gradient(135deg, #f093fb 0%, #f5576c 50%, #feca57 100%)';
    document.body.style.backgroundSize = '400% 400%';
    
    container.style.transform = 'scale(1.08)';
    container.style.boxShadow = '0 35px 90px rgba(255, 77, 109, 0.6), 0 0 70px rgba(255, 77, 109, 0.5)';
    
    for (let i = 0; i < 30; i++) {
        setTimeout(createHeart, i * 80);
    }
    
    // Auto-reproducir música
    if (!isPlaying) {
        bgMusic.play().catch(e => console.log('No se pudo reproducir música automáticamente'));
        isPlaying = true;
        musicToggle.classList.add('active');
    }
});

// ========== CONTROLES DE TEMA ==========
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle('dark-mode');
    const icon = themeToggle.querySelector('i');
    
    if (document.body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
});

// ========== CONTROLES DE MÚSICA ==========
musicToggle.addEventListener("click", () => {
    if (isPlaying) {
        bgMusic.pause();
        musicToggle.classList.remove('active');
    } else {
        bgMusic.play();
        musicToggle.classList.add('active');
    }
    isPlaying = !isPlaying;
});

volumeBtn.addEventListener("click", () => {
    if (currentVolume > 0) {
        bgMusic.volume = 0;
        currentVolume = 0;
        volumeBtn.querySelector('i').classList.replace('fa-volume-up', 'fa-volume-mute');
    } else {
        bgMusic.volume = 0.3;
        currentVolume = 0.3;
        volumeBtn.querySelector('i').classList.replace('fa-volume-mute', 'fa-volume-up');
    }
});

// ========== MODALES ==========
showLetter.addEventListener("click", () => {
    letterModal.style.display = "block";
});

showGallery.addEventListener("click", () => {
    galleryModal.style.display = "block";
});

closeLetter.addEventListener("click", () => {
    letterModal.style.display = "none";
});

closeGallery.addEventListener("click", () => {
    galleryModal.style.display = "none";
});

// Cerrar modal al hacer clic fuera
window.addEventListener("click", (e) => {
    if (e.target === letterModal) {
        letterModal.style.display = "none";
    }
    if (e.target === galleryModal) {
        galleryModal.style.display = "none";
    }
});

// ========== EFECTO PARALLAX ==========
document.addEventListener('mousemove', (e) => {
    const moveX = (e.clientX - window.innerWidth / 2) * 0.008;
    const moveY = (e.clientY - window.innerHeight / 2) * 0.008;
    
    if (container) {
        container.style.transform = `translate(${moveX}px, ${moveY}px)`;
    }
});

// ========== EFECTO DE BRILLO CON EL CURSOR ==========
let lastGlowTime = 0;
document.addEventListener('mousemove', (e) => {
    const now = Date.now();
    if (now - lastGlowTime < 50) return; // Throttle
    lastGlowTime = now;
    
    const glow = document.createElement('div');
    glow.style.position = 'absolute';
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
    glow.style.width = '25px';
    glow.style.height = '25px';
    glow.style.borderRadius = '50%';
    glow.style.background = 'radial-gradient(circle, rgba(255, 255, 255, 0.9), transparent)';
    glow.style.pointerEvents = 'none';
    glow.style.zIndex = '999';
    glow.style.transform = 'translate(-50%, -50%)';
    
    const style = document.createElement('style');
    const animName = 'fadeOut' + Date.now();
    style.textContent = `
        @keyframes ${animName} {
            from { opacity: 1; transform: translate(-50%, -50%) scale(1); }
            to { opacity: 0; transform: translate(-50%, -50%) scale(2.5); }
        }
    `;
    document.head.appendChild(style);
    
    glow.style.animation = `${animName} 1.2s ease-out forwards`;
    
    document.body.appendChild(glow);
    
    setTimeout(() => {
        glow.remove();
        style.remove();
    }, 1200);
});

// ========== EFECTOS DE TECLADO ==========
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && yesBtn.style.display !== 'none') {
        yesBtn.click();
    }
    
    if (e.key === 'Escape') {
        letterModal.style.display = "none";
        galleryModal.style.display = "none";
    }
});

// ========== ANIMACIONES DE GALERÍA ==========
const galleryItems = document.querySelectorAll('.gallery-item');
galleryItems.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.1}s`;
    item.style.animation = 'fadeIn 0.6s ease forwards';
});

// ========== EASTER EGGS ==========
let clickCount = 0;
const heartLarge = document.querySelector('.heart-large');

if (heartLarge) {
    heartLarge.addEventListener('click', () => {
        clickCount++;
        if (clickCount === 5) {
            for (let i = 0; i < 20; i++) {
                setTimeout(createHeart, i * 50);
            }
            clickCount = 0;
        }
    });
}

// ========== OPTIMIZACIÓN DE RENDIMIENTO ==========
// Limpiar elementos antiguos periódicamente
setInterval(() => {
    const hearts = document.querySelectorAll('.heart');
    const confettis = document.querySelectorAll('.confetti');
    const fireworks = document.querySelectorAll('.firework');
    
    hearts.forEach(h => {
        if (h.offsetTop < -100 || h.offsetTop > window.innerHeight + 100) {
            h.remove();
        }
    });
    
    confettis.forEach(c => {
        if (c.offsetTop > window.innerHeight + 100) {
            c.remove();
        }
    });
    
    fireworks.forEach(f => {
        const opacity = window.getComputedStyle(f).opacity;
        if (parseFloat(opacity) < 0.1) {
            f.remove();
        }
    });
}, 5000);

console.log('%c✨ Sistema de efectos cargado correctamente ✨', 'font-size: 14px; color: #feca57;');
console.log('%c💡 Tip: Haz clic 5 veces en el corazón grande para un efecto especial!', 'font-size: 12px; color: #48dbfb;');