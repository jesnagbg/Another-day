
const itemList = ["Broom", "Potatoes"];
const nameInput = document.getElementById("name-input")
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





