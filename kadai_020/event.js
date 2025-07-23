const pressBtn = document.getElementById('btn');
const text = document.getElementById('text');

pressBtn.addEventListener('click', () => {
    text.textContent = 'ボタンをクリックしました';
});