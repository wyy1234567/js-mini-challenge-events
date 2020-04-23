/***** Beginning of Starter Code ****/

const playerContainer = document.querySelector(".player-container")

// render one player to the DOM
function renderPlayer(player) {
  // create an element for the outer div
  const playerDiv = document.createElement("div")

  // set attributes on the outer div
  playerDiv.className = "player"
  playerDiv.dataset.number = player.number

  // use innerHTML to create any child elements of the div
  playerDiv.innerHTML = `
    <h3>${player.name} (<em>${player.nickname}</em>)</h3>
    <img src="${player.photo}" alt="${player.name}">
    <p class="likes">${player.likes} likes</p>
    <button class="like-button">❤️</button>
  `

  // append the element to the container
  playerContainer.append(playerDiv)
}

// for each player in the array, render to the DOM
PLAYERS.forEach(renderPlayer)

/***** End of Starter Code ****/


/***** Deliverable 1 *****/
function toggleColor(element) {
  if (element.style.color === "red") {
    element.style.color = "black"
  } else {
    element.style.color = "red"
  }
}
const header = document.querySelector("h1#header");
header.addEventListener('click', function(event) {
  toggleColor(event.target);
})

/***** Deliverable 2 *****/
//create vairable that has all inputs:
const allInputs = document.querySelectorAll('input');

//create an event listener on form, with event 'submit'
const createNewPlayer = document.getElementById("new-player-form");
createNewPlayer.addEventListener('submit', function(event) {
  event.preventDefault();
  let playerHash = {};
  playerHash['number'] = parseInt(allInputs[0].value);
  playerHash['name'] = allInputs[1].value; 
  playerHash['nickname'] = allInputs[2].value;
  playerHash['photo'] = allInputs[3].value;
  playerHash['likes'] = 1000;
  renderPlayer(playerHash);
  
  //add event listener to the button
  const buttons = document.querySelectorAll('button');
  const thisButton = buttons[buttons.length - 1];
  thisButton.addEventListener('click', function(event){
    const parentNode = event.target.parentElement;
    const likeTag = parentNode.querySelector('p');
    const likeNumber = parseInt(likeTag.textContent);
    likeTag.textContent = `${likeNumber + 1} likes`;
  })
  
  event.target.reset();
})

/***** Deliverable 3 *****/
const allButtons = document.querySelectorAll('button');
allButtons.forEach(function(button){
  button.addEventListener('click', function(event){
    const parentNode = event.target.parentElement;
    const likeTag = parentNode.querySelector('p');
    const likeNumber = parseInt(likeTag.textContent);
    likeTag.textContent = `${likeNumber + 1} likes`;
  })
})