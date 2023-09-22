setInterval(() => {
  const itemArr = Array.from(document.getElementsByClassName('item'));
  const arrLength = itemArr.length;
  const goblin = itemArr.findIndex((item) => item.classList.contains('goblin'));
  itemArr[goblin].classList.remove('goblin');
  let newGoblin = Math.floor(Math.random() * arrLength);
  if (goblin === newGoblin) {
    newGoblin = +1;
  }
  itemArr[newGoblin].classList.add('goblin');
}, 1000);
