let itemList = ["Fluff", "Button"];
const chooseWeapon = ["Sword", "Broom", "Needle", "Carrot"];
const nameInput = document.getElementById("name-input");
const nameButton = document.getElementById("start-button");
const startPageContent = document.getElementById("start-page");
const gameContent = document.getElementById("game");
//const spareQuestion = document.getElementById("extra-question");
let playerName = "Farmer";
let timeoutRef;
let text;
let button1;
let button2;

window.addEventListener("DOMContentLoaded", main);

function main() {
    nameButton.addEventListener("click", savePlayerName);
}

function savePlayerName() {
    playerName = document.getElementById("name-input").value;
    console.log(playerName);
    
    oneMoreQ();
}

function oneMoreQ() {
    const extraQuestion = document.getElementById("extra-question");
    extraQuestion.textContent = 'Oh, right. Sorry, ' + playerName + '. Just one more thing! Choose your weapon';

    timeoutRef = setTimeout(chooseYourWeapon, 1000);
    //choseYourWeapon();
}

function chooseYourWeapon() {
    clear();
    const div = document.getElementById("button-container");
    
    for (const weapon of chooseWeapon) {
        const button = document.createElement("button");
        button.className = "button-style";
        button.textContent = weapon;
        button.addEventListener('click', function() {
            itemList.push(weapon);
            displayItems();
            loadFirstPage();
        })
        div.append(button);
    }    
}

function removeStartPage() {
    startPageContent.innerHTML = "";
}

function clear() {
    document.getElementById("button-container").innerHTML = "";
}

function displayItems() {
    const p = document.getElementById("player-pocket");
    p.textContent = "Your pocket";
    const div = document.getElementById("item-container");
    const ul = document.createElement("ul");
    ul.id = "item-list";

    for (const item of itemList) {
        const li = document.createElement("li");
        li.textContent = item;
        ul.append(li);
    }

    div.innerHTML = "";
    div.append(ul);
}

//do I need both?
//function hideStartPage() {
//    startPageContent.classList.add("invis");
//}

//display pocket, first text and new buttons (delayed)
function loadFirstPage() {
    removeStartPage();
    displayItems();
    gameContent.classList.remove("invis");

    text = document.getElementById('text');
    button1 = document.getElementById('opt-1');
    button2 = document.getElementById('opt-2');

    text.textContent = "Hej " + playerName + " och välkommen till min värld";
  
    button1.textContent = "Enter the hallway";
    button1.onclick = loadHallwayScene;
  
    button2.textContent = "Check the pantry";
    //button1.onclick = loadHallwayScene;
    
}

function loadHallwayScene() {
    text = document.getElementById('text');
    button1 = document.getElementById('opt-1');
    button2 = document.getElementById('opt-2');

    text.textContent = "Hej och välkommen till min värld";
  
    button1.textContent = "Go to the bedroom";
    button1.onclick = loadHallwayScene;
  
    button2.textContent = "Go to the livingroom";
    //button1.onclick = loadHallwayScene;
}

function loadBedroomScene() {
    text = document.getElementById('text');
    button1 = document.getElementById('opt-1');
    
    text.textContent = "Hej och välkommen till min värld";
  
    button1.textContent = "Go back to the kitchen";
    //button1.onclick = loadHallwayScene;
    
}



