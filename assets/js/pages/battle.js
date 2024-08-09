
let villainsArray = [];

// Initialize battle section
function initBattleSection() {
    gatherSuperHeroesToBattle();
    gatherVillainsToBattle();
}

// Start the battle
function startBattle() {
    arenaFight(); // Start the battle
}

// Gather selected superheroes for battle
function gatherSuperHeroesToBattle() {
    heroesArray = [];
    
    superHeroes.forEach((hero, index) => {
        const heroAttackElement = hero.querySelector('.attackValue');
        const heroDefenseElement = hero.querySelector('.defenseValue');
        const heroName = hero.querySelector('.hero-name').innerText; // Assuming there's an element with class 'name'

        const heroAttack = parseFloat(heroAttackElement.innerText);
        const heroDefense = parseFloat(heroDefenseElement.innerText);

        heroesArray.push({
            name: heroName,
            id: index,
            attack: heroAttack,
            defense: heroDefense
        });
    });

    return superHeroes;
}


// Gather villains for battle
function gatherVillainsToBattle() {
    villainsArray = [];
    
    const villains = setArenaVillains();
   
    villains.forEach((villain, index) => {
        const villainAttack = calculateAttack(villain);
        const villainDefense = calculateDefense(villain);
        const villainName = villain.name; // Assuming there's a name property

        villainsArray.push({
            name: villainName,
            id: index,
            attack: villainAttack,
            defense: villainDefense
        });
    });

    return villains;
}

// Retrieve fighter by attack and defense values
function getFighterByAttackDefense(array, attack, defense) {
    return array.find(fighter => fighter.attack === attack && fighter.defense === defense);
}

// Handle arena fights
function arenaFights() {
    const fightButton = document.getElementById('fight-button');
    fightButton.addEventListener('click', arenaFight);
}

function arenaFight() {  
    gatherSuperHeroesToBattle();
    gatherVillainsToBattle();

    let heroWins = 0;
    let villainWins = 0;

    if (heroesArray.length !== villainsArray.length) {
        alert('The number of heroes and villains must be the same for a fair battle!');
        return;
    }

    for (let i = 0; i < heroesArray.length; i++) {
        const hero = heroesArray[i];
        const heroAttack = hero.attack;
        const heroDefense = hero.defense;

        for (let j = 0; j < villainsArray.length; j++) {
            const villain = villainsArray[j];
            const villainAttack = villain.attack;
            const villainDefense = villain.defense;

            if (heroAttack > villainDefense) {
                heroWins++;
                const heroDetails = lookupHero(hero.name, heroes()); // Corrected
                addDefeatedClass('villain', villain.id);
            } else if (villainAttack > heroDefense) {
                villainWins++;
                const villainDetails = lookupHero(villain.name, heroes()); // Assuming this is what you want
                addDefeatedClass('hero', hero.id);
            }
        }
    }

    if (heroWins > villainWins) {
        alert('Heroes win!');
    } else if (villainWins > heroWins) {
        alert('Villains win!');
    } else {
        alert('It\'s a draw! Both teams defeated each other equally.');
    }
}


// Function to add "defeated" class to a hero or villain
function addDefeatedClass(type, id) {
    let element;
    if (type === 'hero') {
        element = superHeroes[id];
    } else if (type === 'villain') {
        element = document.querySelector(`.villain[data-id="${id}"]`);
    }
    
    if (element) {
        element.classList.add('defeated');
    }
}
function lookupHero(name, heroes) {
    const foundHero = heroes.find(hero => hero.name === name);
    console.log(`Looking up hero ${name}:`, foundHero);
    return foundHero;
}

// Event listener for DOM content loaded
document.addEventListener('DOMContentLoaded', () => {
    initBattleSection();
    arenaFights();
});
