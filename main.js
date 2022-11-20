/**
 * Array for user held items. (Pocket)
 */
let itemList = ["Fluff", "Button"];
/**
 * Array for user options at start.
 */
const chooseWeapon = ["Sword", "Broom", "Needle", "Carrot"];

const nameInput = document.getElementById("name-input");
const nameButton = document.getElementById("start-button");
const startPageContent = document.getElementById("start-page");
const gameContent = document.getElementById("game");

/**
 * User choosen name.
 */
let playerName = "Farmer";

let timeoutRef;
/**
 * First p tag on game scenes.
 */
let gameText1;
/**
 * Second p tag on game scenes.
 */
let gameText2;
/**
 * Button container (div).
 */
let buttonDiv;
/**
 * Left button on game scenes.
 */
let leftButton;
/**
 * Right button on game scenes.
 */
let rightButton;


window.addEventListener("DOMContentLoaded", main);

/**
 * Listens for the button to be pressed to save the user input.
 */
function main() {
    nameButton.addEventListener("click", savePlayerName);
}

/**
 * A function that saves the user input and runs the function oneMoreQ.
 */
function savePlayerName() {
    playerName = document.getElementById("name-input").value;
    console.log(playerName);

    oneMoreQ();
}

/**
 * Adds text to the page and after a one second delay runs the function chooseYourWeapon.
 */
function oneMoreQ() {
    const extraQuestion = document.getElementById("extra-question");
    extraQuestion.textContent = 'Oh, right. Sorry, ' + playerName + '. Just one more thing! Choose your weapon!';

    timeoutRef = setTimeout(chooseYourWeapon, 1000);

}

/**
 * Takes items out of the array ChooseWeapon and creates a button for each of them.
 * The button clicked get its item added to another array called itemList.
 */
function chooseYourWeapon() {
    clear();
    const optionDiv = document.getElementById("button-container");

    for (const weapon of chooseWeapon) {
        const weaponButton = document.createElement("button");
        weaponButton.className = "button-style";
        weaponButton.textContent = weapon;
        weaponButton.addEventListener('click', function () {
            itemList.push(weapon);
            loadFirstPage();
        })
        optionDiv.append(weaponButton);
    }
}

/**
 * Wipes the startpage.
 */
function removeStartPage() {
    startPageContent.innerHTML = "";
}

/**
 * Resets the buttons so the user can't spawn an endless amount of them.
 */
function clear() {
    document.getElementById("button-container").innerHTML = "";
}

/**
 * Creates a list from the array itemList, and adds a title to it.
 */
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

/**
 * Fills the p elements with text.
 * Fills the button elements with text and links them to other scenes (2 second delay).
 */
function loadFirstPage() {
    removeStartPage();
    displayItems();
    gameContent.classList.remove("invis");
    makeGamePage();

    gameText1.textContent = "So, " + playerName + ", you find yourself alone in your kitchen.";
    gameText2.textContent = "The sun is shining outside. What would you like to do?";

    setTimeout(function() {
        leftButton.textContent = "Stare out the window";
        leftButton.onclick = loadWindowScene;

        rightButton.textContent = "Try to feel something";
        rightButton.onclick = loadSnackScene;
    }, 2000)
       
}

/**
 * Fills the p elements with text.
 * Fills the button elements with text and links them to other scenes (2 second delay).
 */
function loadWindowScene() {    
    makeGamePage();
    gameText1.textContent = "Your potato patch is looking quite neglected.";
    gameText2.textContent = "How about you at least attempt to grow something this year?";

    setTimeout(function() {
        leftButton.textContent = "Get a snack first";
        leftButton.onclick = loadPantryScene;
        
        rightButton.textContent = "Look for the potatoes";
        rightButton.onclick = loadPantryScene;  
    }, 2000)
    
}

/**
 * Fills the p elements with text.
 * Fills the button elements with text and links them to other scenes (2 second delay).
 */
function loadSnackScene() {
    makeGamePage();
    gameText1.textContent = "You feel....";
    gameText2.textContent = "..a bit peckish. Better check the pantry for a snack!";
    
    setTimeout(function() {
        rightButton.remove();
        leftButton.textContent = "Go to the pantry";
        leftButton.onclick = loadPantryScene;  
    }, 2000)
}

/**
 * Fills the p elements with text.
 * Fills the button elements with text and links them to other scenes (2 second delay).
 * If the item "Broom" has been added to the array itemList it offers a different path.
 */
function loadPantryScene() {
    makeGamePage();
    gameText1.textContent = "The pantry is dark and dusty. You spot an old jar of preserved fruit.";
    gameText2.textContent = "Shame to let it go to waste.. Maybe Margret would like some?";

    setTimeout(function() {
        leftButton.textContent = "Give Margret a call";
        leftButton.onclick = loadMargretScene;
        
        if (itemList.includes("Broom")) {
            rightButton.textContent = "Tidy up a bit";
            rightButton.onclick = loadPotatoScene; 
        } else {
            rightButton.textContent = "Look for candy instead";
            rightButton.onclick = loadLivingroomScene;  
        }
    }, 2000)
}

/**
 * Fills the p elements with text.
 * Fills the button element with text and links to reload page (2 second delay).
 * Game has ended.
 */
function loadMargretScene() {
    makeGamePage();
    gameText1.textContent = 'Margrets stomach did not agree with your "gift", ' + playerName + '.';
    gameText2.textContent = "Sadly, she passed away from botulism poisoning.";
    
    setTimeout(function() {
        rightButton.remove();
        leftButton.textContent = "Start over";
        leftButton.onclick = function() {
            window.location.reload()
        }

    }, 2000)
}

/**
 * Fills the p elements with text.
 * Fills the button element with text and links to reload page (2 second delay).
 * Game has ended.
 */
function loadPotatoScene() {
    makeGamePage();
    gameText1.textContent = "As you clean your pantry you spot the potatoes in the corner.";
    gameText2.textContent = 'You go out to plant them. You win,' + playerName + '!';
    
    setTimeout(function() {
        rightButton.remove();
        leftButton.textContent = "Play again";
        leftButton.onclick = function() {
            window.location.reload()
        }

    }, 2000)
}

function loadLivingroomScene() {
    makeGamePage();
    gameText1.textContent = "Your livingroom is quite messy, half-mended socks everywhere.";
    gameText2.textContent = "No candy, however. You ate it all, remember?";

    setTimeout(function() {
        leftButton.textContent = "Go back to the kitchen";
        leftButton.onclick = loadKitchenScene;
        
        if (itemList.includes("Needle")) {
            rightButton.textContent = "Mend more socks";
            rightButton.onclick = loadSockScene;  
        } else {
            rightButton.remove();  
        }

    }, 2000)
}

/**
 * Fills the p elements with text.
 * Fills the button element with text and links to reload page (2 second delay).
 * Game has ended.
 */
function loadSockScene() {
    makeGamePage();
    gameText1.textContent = 'Not every day turn out the way we want,' + playerName + '.';
    gameText2.textContent = "At least your socks won't have potatoes sticking out anymore!";
    
    setTimeout(function() {
        rightButton.remove();
        leftButton.textContent = "Play again";
        leftButton.onclick = function() {
            window.location.reload()
        }

    }, 2000)
}

function loadKitchenScene() {
    makeGamePage();
    gameText1.textContent = "Your eyes span across the kitchen counters.";
    if (itemList.includes("Carrot")) {
        gameText2.textContent = "You remember the carrot in your pocket.";
    } else {
        gameText2.textContent = "Back where you started, eh?"; 
    }
    
    setTimeout(function() {
        leftButton.textContent = "Go take a nap";
        leftButton.onclick = loadNapScene;
        
        if (itemList.includes("Carrot")) {
            rightButton.textContent = "Plant the carrot instead";
            rightButton.onclick = loadCarrotScene;  
        } else {
            rightButton.remove();
        }
    }, 2000)
}

/**
 * Fills the p elements with text.
 * Fills the button element with text and links to reload page (2 second delay).
 * Game has ended.
 */
function loadNapScene() {
    makeGamePage();
    gameText1.textContent = "Not every day turn out the way we want.";
    gameText2.textContent = "At least you didn't kill anyone.";
    
    setTimeout(function() {
        rightButton.remove();
        leftButton.textContent = "Play again";
        leftButton.onclick = function() {
            window.location.reload()
        }

    }, 2000)
}

/**
 * Fills the p elements with text.
 * Fills the button element with text and links to reload page (2 second delay).
 * Game has ended.
 */
function loadCarrotScene() {
    makeGamePage();
    gameText1.textContent = "Carrots are almost as good as potatoes.";
    gameText2.textContent = "Today is a pretty good day! You (sorta) win!";
    
    setTimeout(function() {
        rightButton.remove();
        leftButton.textContent = "Play again";
        leftButton.onclick = function() {
            window.location.reload()
        }

    }, 2000)
}

/**
 * Creates the elements for the text on each game scene. Triggers makeGameButtons after 2 seconds.
 */
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

    setTimeout(makeGameButtons, 2000);
    
}

/**
 * Creates the elements for the option buttons on each game scene.
 */
function makeGameButtons() {    
    leftButton = document.createElement("button");
    leftButton.id = "opt-1";
    leftButton.classList = "button-style";
    
    rightButton = document.createElement("button");
    rightButton.id = "opt-2";
    rightButton.classList = "button-style";
    
    buttonDiv.append(leftButton, rightButton);
}

