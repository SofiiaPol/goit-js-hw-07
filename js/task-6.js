function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// const input = document.querySelector('input[type="number"]');
// const createButton = document.querySelector('button[data-create]');
// const destroyButton = document.querySelector('button[data-destroy]');
// const boxesContainer = document.querySelector('#boxes');

// createButton.addEventListener('click', createBoxes);
// destroyButton.addEventListener('click', destroyBoxes);

// function createBoxes() {
//   const amount = parseInt(input.value);

//   if (amount < 1  amount > 100  isNaN(amount)) {
//     return;
//   }

//   boxesContainer.innerHTML = '';

//   let size = 30;
//   for (let i = 0; i < amount; i++) {
//     const box = document.createElement('div');
//     box.style.width = ${size}px;
//     box.style.height = ${size}px;
//     box.style.backgroundColor = getRandomHexColor();
//     boxesContainer.appendChild(box);
//     size += 10;
//   }

//   input.value = '';
// }

// function destroyBoxes() {
//   boxesContainer.innerHTML = '';
// }
const input = document.querySelector('input[type="number"]');
const createButton = document.querySelector('button[data-create]');
const destroyButton = document.querySelector('button[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

createButton.addEventListener('click', createBoxes);
destroyButton.addEventListener('click', destroyBoxes);

function createBoxes() {
  const amount = parseInt(input.value);

  if (amount < 1 || amount > 100 || isNaN(amount)) {
    return;
  }

  boxesContainer.innerHTML = '';

  let size = 30;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);
    size += 10;
  }

  input.value = '';
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}