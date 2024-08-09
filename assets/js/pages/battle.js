let villainsArray = [];
let winners = [];


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
        const heroName = hero.querySelector('.hero-name').innerText; 

        const heroAttack = parseFloat(heroAttackElement.innerText);
        const heroDefense = parseFloat(heroDefenseElement.innerText);

        heroesArray.push({
            name: heroName,
            id: index,
            attack: heroAttack,
            defense: heroDefense
        });
    });
}

// Gather villains for battle
function gatherVillainsToBattle() {
    villainsArray = [];
    
    const villains = setArenaVillains();

    villains.forEach((villain, index) => {
        const villainAttack = calculateAttack(villain);
        const villainDefense = calculateDefense(villain);
        const villainName = villain.name;

        villainsArray.push({
            name: villainName,
            id: index,
            attack: villainAttack,
            defense: villainDefense
        });
    });
}

// Handle arena fights
function arenaFights() {
    const fightButton = document.getElementById('fight-button');
    fightButton.addEventListener('click', arenaFight);
}

function arenaFight() {
    gatherSuperHeroesToBattle();
    gatherVillainsToBattle();

    const winners = [];
    const losers = [];

    // Ensure the number of heroes and villains are the same
    if (heroesArray.length !== villainsArray.length) {
        alert('The number of heroes and villains must be the same for a fair battle!');
        return;
    }

    // Fight each hero with the villain at the same index
    for (let i = 0; i < heroesArray.length; i++) {
        const hero = heroesArray[i];
        const villain = villainsArray[i];

        const heroAttack = hero.attack;
        const heroDefense = hero.defense;
        const villainAttack = villain.attack;
        const villainDefense = villain.defense;

        // Determine if hero wins
        if (heroAttack > villainDefense && villainAttack <= heroDefense) {
            winners.push(hero);
            losers.push(villain);
        } 
        // Determine if villain wins
        else if (villainAttack > heroDefense && heroAttack <= villainDefense) {
            winners.push(villain);
            losers.push(hero);
        }
        // If neither wins (both attack values are greater than the opponent's defense), consider it a draw for both
        else {
            losers.push(hero);
            losers.push(villain);
        }
    }

    const heroWins = winners.filter(winner => heroesArray.some(hero => hero.name === winner.name)).length;
    const villainWins = winners.filter(winner => villainsArray.some(villain => villain.name === winner.name)).length;

    if (heroWins > villainWins) {
        alert('Heroes win!');
    } else if (villainWins > heroWins) {
        alert('Villains win!');
    } else {
        alert('It\'s a draw!');
    }

    console.log('Winners:', winners);
    console.log('Losers:', losers);

    // Add 'defeated' class to losers
    document.querySelectorAll('.fighter').forEach(fighter => {
        const fighterName = fighter.dataset.name; // Assuming you use data-name to store the fighter's name
        const isLoser = losers.some(loser => loser.name === fighterName);
        
        if (isLoser) {
            fighter.classList.add('defeated');
        }
    });

    // Store winners in localStorage
    localStorage.setItem('winners', JSON.stringify(winners));
}

// Retrieve winners from localStorage (if needed)
function retrieveWinners() {
    const winnersJSON = localStorage.getItem('winners');
    if (winnersJSON) {
        return JSON.parse(winnersJSON);
    }
    return [];
}


// Retrieve winners from localStorage (if needed)
function retrieveWinners() {
    const winnersJSON = localStorage.getItem('winners');
    if (winnersJSON) {
        return JSON.parse(winnersJSON);
    }
    return [];
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
