const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');
let isJumping = false;

document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
        jump();
    }
});

function jump() {
    if (isJumping) return;
    isJumping = true;
    let upInterval = setInterval(() => {
        if (dino.offsetTop <= 110) {
            clearInterval(upInterval);
            let downInterval = setInterval(() => {
                if (dino.offsetTop >= 160) {
                    clearInterval(downInterval);
                    isJumping = false;
                }
                dino.style.top = dino.offsetTop + 5 + 'px';
            }, 20);
        }
        dino.style.top = dino.offsetTop - 5 + 'px';
    }, 20);
}

function checkCollision() {
    const dinoRect = dino.getBoundingClientRect();
    const cactusRect = cactus.getBoundingClientRect();

    if (
        dinoRect.x < cactusRect.x + cactusRect.width &&
        dinoRect.x + dinoRect.width > cactusRect.x &&
        dinoRect.y < cactusRect.y + cactusRect.height &&
        dinoRect.y + dinoRect.height > cactusRect.y
    ) {
        alert('Game Over');
        window.location.reload();
    }
}

setInterval(checkCollision, 10);
