let itemList = ["Broom", "Potatoes"];
const choseWeapon = ["Sword", "Broom", "Needle"];
const nameInput = document.getElementById("name-input");
const nameButton = document.getElementById("start-button");
//const spareQuestion = document.getElementById("extra-question");
let playerName = "Farmer";

window.addEventListener("DOMContentLoaded", displayItems);

nameButton.addEventListener("click", savePlayerName);

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

function savePlayerName() {
    playerName = document.getElementById("name-input").value;
    console.log(playerName);
    
    oneMoreQ();
}

function oneMoreQ() {
    const extraQuestion = document.getElementById("extra-question");
    extraQuestion.textContent = 'Oh, right. Sorry, ' + playerName + '. Just one more thing! Chose your weapon';

    choseYourWeapon();
}

function choseYourWeapon() {
    clear();
    const div = document.getElementById("button-container");
    
    for (const weapon of choseWeapon) {
        const button = document.createElement("button");
        button.textContent = weapon;
        button.addEventListener('click', function() {
            itemList.push(weapon);
            displayItems();
        })
        div.append(button);
    }    
}

function clear() {
    document.getElementById("button-container").innerHTML = "";
}






