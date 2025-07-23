const pressBtn = document.getElementById('btn');

pressBtn.addEventListener('click', () => {
    const text = document.getElementById('text');
    text.textContent = 'ボタンをクリックしました';
});
