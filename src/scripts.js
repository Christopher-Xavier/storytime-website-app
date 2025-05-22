function showConfetti(event) {
    for (let i = 0; i < 30; i++) {
        let confetti = document.createElement("div");
        confetti.className = "confetti";
        document.body.appendChild(confetti);
        confetti.style.left = Math.random() * window.innerWidth + "px";
        confetti.style.animation = "confetti 5s infinite";
    }
}

function showMagic() {
    alert("✨ A hidden fairy appears! ✨");
}

function playMagicSound() {
    let magicSound = new Audio("magic-sound.mp3");
    magicSound.play();
}
