const buttons = document.querySelectorAll('.button-div');
const ratingText = document.querySelector('.rating').querySelector('p');
const submit = document.querySelector('button');
const first = document.querySelector('.first');
const second = document.querySelector('.second');
let buttonText;
console.log(ratingText.innerText);
const text = buttons.forEach(function(button) {
    button.onclick = function() {
    buttons.forEach(btn => {
        btn.style = ''
    })
    buttonText = this.innerText;
    ratingText.innerText = `You selected ${buttonText} out of 5`
}
})
submit.onclick = () => {
    first.style.display = 'none';
    second.style.display = 'block'
}
