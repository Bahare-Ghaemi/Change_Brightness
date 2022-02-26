const range = document.querySelector('#range');
const background = document.querySelector('.web-brightness-section');

range.addEventListener('input', (e) => {
    console.log(background.style.filter)
    background.style.filter = `brightness(${e.target.value}%)`;
});
