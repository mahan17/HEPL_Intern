// ! Add element
const list = document.getElementById('my-list');
const newItem = document.createElement('li');
newItem.textContent = 'Item 3';
list.appendChild(newItem);

// !Event Listeners
const button = document.getElementById('btn');
button.addEventListener('click', ()=>{
    alert('Button clicked');
});

// !Toggle
function darkMode(){
    let element = document.body;
    element.classList.toggle('dark-mode')
    let btn = document.getElementById
}
