const itemList = ["Broom", "Potatoes"];
const nameInput = document.getElementById("name-input");
const nameButton = document.getElementById("start-button");
let playerName = "Farmer";

window.addEventListener('DOMContentLoaded', displayItems);

nameButton.addEventListener("click", savePlayerName);

function savePlayerName() {
    const playerName = document.getElementById("name-input").value;
    console.log(playerName)
}


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

