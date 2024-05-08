const input = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

input.addEventListener('change', setInputValue);
createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

function setInputValue(event) {
  event.currentTarget.value;
}

function destroyBoxes() {
  // document.querySelectorAll('.box').forEach(element => element.remove());
  boxesContainer.innerHTML = '';
}
function createBoxes(amount) {
  destroyBoxes();
  amount = input.value;
  let size = 30;
  if (amount >= 1 && amount <= 100) {
    for (let i = 0; i < amount; i++) {
      const newBox = document.createElement('div');
      boxesContainer.append(newBox);
      newBox.classList.add('box');
      newBox.style.width = `${size}px`;
      newBox.style.height = `${size}px`;
      newBox.style.backgroundColor = getRandomHexColor();
      size += 10;
    }
  }
  input.value = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
