document.addEventListener('DOMContentLoaded', () => {
    // 1. Create floating background hearts
    const heartsContainer = document.getElementById('bg-hearts');
    const heartSymbols = ['❤️', '💖', '✨', '🌹'];

    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerText = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];

        // Random positioning properties
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = (Math.random() * 5 + 10) + 's'; // 10-15s
        heart.style.fontSize = (Math.random() * 20 + 10) + 'px';

        heartsContainer.appendChild(heart);

        // Remove after animation to save memory
        setTimeout(() => {
            heart.remove();
        }, 15000);
    }

    setInterval(createHeart, 300);


    // 2. Typing Effect
    const textToType = "Somrab mnus dol senn cutee...";
    const typingElement = document.getElementById('typing-text');
    let charIndex = 0;

    function typeText() {
        if (charIndex < textToType.length) {
            typingElement.textContent += textToType.charAt(charIndex);
            charIndex++;
            setTimeout(typeText, 100);
        } else {
            // Optional: Blink cursor removal or keep it
            document.querySelector('.cursor').style.animation = 'none';
            document.querySelector('.cursor').style.opacity = '0';
        }
    }

    // Start typing after a slight delay
    setTimeout(typeText, 1000);


    // 3. Reveal Button Interaction
    const revealBtn = document.getElementById('revealBtn');
    const hiddenContent = document.getElementById('hiddenContent');

    revealBtn.addEventListener('click', () => {
        // Toggle content
        hiddenContent.classList.toggle('show-content');

        if (hiddenContent.classList.contains('show-content')) {
            revealBtn.textContent = "Love meymey Forever";
            triggerConfetti();
        } else {
            revealBtn.textContent = "Click Me";
        }
    });

    function triggerConfetti() {
        // Cannon fire from bottom left and right
        var duration = 3 * 1000;
        var end = Date.now() + duration;

        (function frame() {
            confetti({
                particleCount: 5,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
                colors: ['#ff4d6d', '#ff8fa3', '#ffffff']
            });
            confetti({
                particleCount: 5,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
                colors: ['#ff4d6d', '#ff8fa3', '#ffffff']
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        }());
    }
});
