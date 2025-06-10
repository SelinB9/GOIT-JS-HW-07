const button = document.querySelector('button.change-color');
const colorNewNameSpan = document.querySelector('span.color');

button.addEventListener('click', () => {
    
    const newBackgroundColor = getRandomHexColor();

    document.body.style.backgroundColor = newBackgroundColor;//arka plan rengini değiştirir.
    colorNewNameSpan.textContent = newBackgroundColor;//renk kodunu span içine yazar
});

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}
