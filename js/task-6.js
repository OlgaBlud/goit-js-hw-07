const input = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');

input.addEventListener('change', setInputValue);
createBtn.addEventListener('click', createBlocks);
destroyBtn.addEventListener('click', destroyBlocks);

function setInputValue(event) {
  event.currentTarget.value;
}
function createBlocks() {
  if (input.value >= 1 && input.value <= 100) {
    createBoxes(input.value);
  }
}

function destroyBlocks() {
  document.querySelectorAll('.box').forEach(element => element.remove());
}

function createBoxes(amount) {
  const boxesContainer = document.querySelector('#boxes');
  // boxesContainer.innerHTML = '';
  destroyBlocks();
  let size = 30;
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
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
