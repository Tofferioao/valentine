# 🎨 Guía Rápida de Personalización

## 📝 Personalizar el Nombre

En `index.html`, línea donde dice `[Nombre]`:
```html
<p>Querido/a [Nombre],</p>
```
Cámbialo por el nombre de tu ser querido.

---

## 💌 Personalizar la Carta de Amor

1. Abre `index.html`
2. Busca `<div class="letter-text">`
3. Edita los párrafos con tu mensaje personal

**Ejemplo:**
```html
<p>Desde que te conocí, mi vida cambió...</p>
<p>Eres la razón de mi felicidad...</p>
```

---

## 🎭 Cambiar la Firma

En `index.html`, busca:
```html
<span class="signature-name">Tu Valentín</span>
```
Reemplaza "Tu Valentín" con tu nombre.

---

## 🌈 Cambiar Colores del Tema

En `styles.css`, líneas 7-14:
```css
:root {
    --primary-pink: #ff4d6d;      /* Color principal */
    --secondary-pink: #ff6b9d;    /* Color secundario */
    --light-pink: #f093fb;        /* Rosa claro */
    --yellow: #feca57;            /* Amarillo/dorado */
}
```

**Sugerencias de colores:**
- **Clásico Romántico**: `#ff1744, #ff6090, #ffc1e3`
- **Moderno Elegante**: `#e91e63, #f06292, #f8bbd0`
- **Cálido y Acogedor**: `#ff5722, #ff8a65, #ffccbc`

---

## 🖼️ Personalizar Momentos Especiales (Galería)

En `index.html`, busca `.gallery-grid` y modifica:

```html
<div class="gallery-item" style="background: linear-gradient(135deg, #ff6b9d, #f093fb)">
    <div class="gallery-emoji">🎉</div>
    <p class="gallery-text">Nuestro primer encuentro</p>
</div>
```

**Ideas de momentos:**
- 🎉 Primer encuentro
- 💑 Primera cita
- 🌹 Primer regalo
- ❤️ Primer "te amo"
- 🎂 Cumpleaños juntos
- 🌟 Viajes y aventuras
- 🏖️ Vacaciones
- 💍 Compromiso

---

## 📅 Personalizar la Timeline

En `index.html`, busca `.timeline` y edita cada evento:

```html
<div class="timeline-item">
    <div class="timeline-dot"></div>
    <div class="timeline-content-box">
        <div class="timeline-date">🎯 Enero 2024</div>
        <h3>Título del Momento</h3>
        <p>Descripción detallada del momento especial.</p>
    </div>
</div>
```

**Ejemplo personalizado:**
```html
<div class="timeline-date">💕 14 de Febrero 2023</div>
<h3>Nuestro Primer San Valentín</h3>
<p>El día más mágico celebrando nuestro amor.</p>
```

---

## 💬 Cambiar Mensajes del Carrusel

En `script.js`, líneas 32-43, edita el array:

```javascript
const loveMessages = [
    "Eres mi razón de sonreír cada día 💕",
    "Contigo el tiempo vuela ⏰",
    "Tu risa es mi canción favorita 🎵",
    "Eres mi hogar 🏡",
    // Agrega más mensajes aquí
];
```

---

## 🎵 Cambiar la Música de Fondo

En `index.html`, línea del audio:

```html
<audio id="bgMusic" loop>
    <source src="URL_DE_TU_MUSICA.mp3" type="audio/mpeg">
</audio>
```

**Opciones de música gratis:**
- [Pixabay Music](https://pixabay.com/music/)
- [Free Music Archive](https://freemusicarchive.org/)
- [YouTube Audio Library](https://www.youtube.com/audiolibrary)

---

## 🎨 Cambiar Emojis

Puedes reemplazar cualquier emoji por otro:

**Corazones:**
- 💝 💖 💕 💗 💓 💞 💘 ❤️ 💟 ♥️

**Flores:**
- 🌹 🌺 🌸 🌼 🌻 🌷 💐

**Celebración:**
- 🎉 🎊 ✨ 🎆 🎇 🌟 ⭐ 💫

**Amor:**
- 😍 🥰 😘 💏 💑 👩‍❤️‍👨 💌

---

## 🎯 Personalización Rápida - 5 Minutos

### 1️⃣ Nombre (30 seg)
Busca `[Nombre]` en index.html y cámbialo

### 2️⃣ Firma (15 seg)
Cambia "Tu Valentín" por tu nombre

### 3️⃣ 3 Mensajes de Carta (1 min)
Edita 3 párrafos de la carta de amor

### 4️⃣ 3 Momentos Galería (1.5 min)
Cambia texto de 3 items de galería

### 5️⃣ 3 Eventos Timeline (1.5 min)
Edita 3 eventos de la timeline

### 6️⃣ Revisar (30 seg)
Abre index.html en el navegador

---

## 🔧 Personalización Avanzada - 15 Minutos

### ✨ Añadir más efectos de partículas
En `script.js`, función `createParticles()`:
```javascript
for (let i = 0; i < 60; i++) { // Aumenta el número
    // ...
}
```

### 🎨 Gradiente del fondo personalizado
En `styles.css`, body background:
```css
background: linear-gradient(135deg, 
    #TU_COLOR1 0%, 
    #TU_COLOR2 50%, 
    #TU_COLOR3 100%
);
```

### 💫 Velocidad de animaciones
En `styles.css`, busca `animation-duration` y ajusta:
```css
animation-duration: 10s; /* Más lento */
animation-duration: 3s;  /* Más rápido */
```

---

## 🚨 Errores Comunes

### ❌ La música no suena
**Solución**: Algunos navegadores bloquean autoplay. Haz clic en el botón de música 🎵

### ❌ Los efectos no se ven
**Solución**: Asegúrate de estar usando un navegador moderno (Chrome, Firefox, Edge)

### ❌ El texto se sale del contenedor
**Solución**: Reduce el tamaño de fuente en CSS o acorta el texto

---

## 💡 Tips Pro

1. **Fotos de fondo**: Puedes añadir fotos reales en lugar de emojis en la galería
2. **Video de fondo**: Reemplaza el gradiente por un video romántico
3. **Cuenta regresiva personalizada**: Cambia la fecha del contador para vuestra fecha especial
4. **QR Code**: Añade un código QR que lleve a un mensaje especial
5. **Botón de sorpresa**: Agrega un botón secreto con una sorpresa adicional

---

## 📱 Compartir tu Creación

### Opción 1: GitHub Pages (Gratis)
1. Sube tu proyecto a GitHub
2. Ve a Settings → Pages
3. Selecciona la rama main
4. ¡Listo! Tendrás una URL para compartir

### Opción 2: Netlify (Gratis)
1. Arrastra la carpeta a [netlify.com/drop](https://app.netlify.com/drop)
2. Obtén tu URL personalizada
3. Comparte el link

### Opción 3: Enviar por WhatsApp/Email
1. Comprime la carpeta en .zip
2. Envía el archivo
3. La persona solo necesita descomprimirlo y abrir index.html

---

## 🎁 Ideas de Uso

- 📱 **Día de San Valentín**: Envía el link como sorpresa
- 💍 **Propuesta de Matrimonio**: Personaliza con tu propuesta
- 🎂 **Aniversario**: Celebra cada año juntos
- 💌 **Día del Amor y la Amistad**: Para amigos especiales
- 🎉 **Cumpleaños**: Versión romántica de felicitación

---

¿Necesitas ayuda? ¡Disfruta personalizando tu proyecto! 💝