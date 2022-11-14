const itemList = ["Broom", "Potatoes"];
const nameInput = document.getElementById("name-input");
const nameButton = document.getElementById("start-button");
let playerName;

window.addEventListener('DOMContentLoaded', displayItems);

function displayItems() {
    const div = document.getElementById("item-container");
    const ul = document.createElement ('ul');
    ul.id = "item-list";

    for (const item of itemList) {
        const li = document.createElement('li');
        li.textContent = item;
        ul.append(li);
    }

    div.innerHTML = "";
    div.append(ul);    
}

nameButton.addEventListener("click", savePlayerName);

function savePlayerName() {
    const playerName = document.getElementById("name-input").value;
    console.log(playerName)
}