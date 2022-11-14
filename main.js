const itemList = ["Broom", "Potatoes"];
const nameInput = document.getElementById("name-input");
const nameButton = document.getElementById("start-button");
//const spareQuestion = document.getElementById("extra-question");
let playerName = "Farmer";

window.addEventListener("DOMContentLoaded", displayItems);

nameButton.addEventListener("click", savePlayerName);


function savePlayerName() {
    playerName = document.getElementById("name-input").value;
    console.log(playerName);
    
    oneMoreQ()
}

function oneMoreQ() {
    const extraQuestion = document.getElementById("extra-question");
    extraQuestion.textContent = 'Oh, right. Sorry, ' + playerName + '. Just one more thing! Chose your weapon';
}

function displayItems() {
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

