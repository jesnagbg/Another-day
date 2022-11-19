let itemList = ["Fluff", "Button"];
const chooseWeapon = ["Sword", "Broom", "Needle", "Carrot"];
const nameInput = document.getElementById("name-input");
const nameButton = document.getElementById("start-button");
const startPageContent = document.getElementById("start-page");
const gameContent = document.getElementById("game");
//const spareQuestion = document.getElementById("extra-question");
let playerName = "Farmer";
let timeoutRef;
let gameText1;
let gameText2;
let buttonDiv;
let leftButton;
let rightButton;
let timeoutButtons;
let timeoutButtonText;
//text = document.getElementById('text');
//leftButton = document.getElementById('opt-1');
//rightButton = document.getElementById('opt-2');

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
    extraQuestion.textContent = 'Oh, right. Sorry, ' + playerName + '. Just one more thing! Choose your weapon!';

    timeoutRef = setTimeout(chooseYourWeapon, 1000);
    //chooseYourWeapon();
}

function chooseYourWeapon() {
    clear();
    const optionDiv = document.getElementById("button-container");

    for (const weapon of chooseWeapon) {
        const weaponButton = document.createElement("button");
        weaponButton.className = "button-style";
        weaponButton.textContent = weapon;
        weaponButton.addEventListener('click', function () {
            itemList.push(weapon);
            //displayItems();
            loadFirstPage();
        })
        optionDiv.append(weaponButton);
    }
}

function removeStartPage() {
    startPageContent.innerHTML = "";
}

function clear() {
    document.getElementById("button-container").innerHTML = "";
}

function displayItems() {
    const pocketTitle = document.getElementById("player-pocket");
    pocketTitle.textContent = "Your pocket";
    const pocketDiv = document.getElementById("item-container");
    const ul = document.createElement("ul");
    ul.id = "item-list";

    for (const item of itemList) {
        const li = document.createElement("li");
        li.textContent = item;
        ul.append(li);
    }

    pocketDiv.innerHTML = "";
    pocketDiv.append(ul);
}

//do I need both? maybe hide is better than wiping for restarting
//function hideStartPage() {
//    startPageContent.classList.add("invis");
//}

//display pocket, first text and new buttons (delayed)
function loadFirstPage() {
    removeStartPage();
    displayItems();
    gameContent.classList.remove("invis");
    makeGamePage();

    gameText1.textContent = "So, " + playerName + ", you find yourself alone in your kitchen.";
    gameText2.textContent = "The sun is shining outside. What would you like to do?";

    timeoutButtonText = setTimeout(loadFirstPageButtons, 2000)
    
}

function loadFirstPageButtons() {
    
    leftButton.textContent = "Stare out the window";
    leftButton.onclick = loadWindowScene;
    
    rightButton.textContent = "Try to feel something";
    rightButton.onclick = loadSnackScene;

}

function loadWindowScene() {
    
    makeGamePage();
    gameText1.textContent = "Your garden is looking quite neglected.";
    gameText2.textContent = "How about you at least attempt to grow something this year?";

    timeoutButtonText = setTimeout(loadWindowSceneButtons, 2000)
    
}

function loadWindowSceneButtons() {
    
    leftButton.textContent = "Get a snack first";
    leftButton.onclick = loadPantryScene;
    
    rightButton.textContent = "Look for the potatoes";
    rightButton.onclick = loadPantryScene;

}

function loadSnackScene() {
    makeGamePage();
    rightButton.remove();
    gameText1.textContent = "You feel....";
    gameText2.textContent = "..a bit peckish. Better check the pantry for a snack!";

    leftButton.textContent = "Go to the pantry";
    leftButton.onclick = loadPantryScene;
    
}

function loadPantryScene() {
    makeGamePage();
    gameText1.textContent = "The pantry is dark and dusty. You spot some preserved fruit that doesn't look quite right anymore. Shame to waste it though.. Maybe Margret would like some?";

    leftButton.textContent = "Give Margret a call";
    //leftButton.onclick = loadHallwayScene;

    rightButton.textContent = "Look, the potatoes!";
    //leftButton.onclick = loadPantryScene;

}

function makeGamePage() {

    gameText1 = document.createElement("p");
    gameText1.id = "text";
    gameText1.classList = "fade-in-first";

    gameText2 = document.createElement("p");
    gameText2.id = "text";
    gameText2.classList = "fade-in-first";

    buttonDiv = document.createElement("div");
    
    
    gameContent.innerHTML = "";
    gameContent.append(gameText1, gameText2, buttonDiv);

    timeoutButtons = setTimeout(makeGameButtons, 2000);
    
}

function makeGameButtons() {
    
    leftButton = document.createElement("button");
    leftButton.id = "opt-1";
    leftButton.classList = "button-style";
    
    rightButton = document.createElement("button");
    rightButton.id = "opt-2";
    rightButton.classList = "button-style";
    
    buttonDiv.append(leftButton, rightButton);
}

