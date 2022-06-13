const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');

buttonEl.addEventListener('click', function() {
    if (inputEl.type == 'password') {
        inputEl.type = 'text';
        buttonEl.innerText = 'Hide'
    } else {
        inputEl.type = 'password';
        buttonEl.innerText = 'Show'
    }
})