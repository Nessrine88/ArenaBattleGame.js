

// function initBattleSection() {
//       
// }

// function startBattle() {

// }

// function gatherSuperHeroesToBattle() {
    
// }

// function gatherVillainsToBattle() {
    
// }

// function arenaFights(e) {
    
// }

// function arenaFight(round) {
    
// }

// function fight(hero, villain) {
    
// }

// function calculateWinners() {

// }


// function markAsDefeated(heroes){
    
// }


/* your functions */
/* Functions for the battle simulation */

// Initialize battle section
function initBattleSection() {
    console.log("Battle section initialized.");
    gatherSuperHeroesToBattle();
    gatherVillainsToBattle();
}

// Start the battle
function startBattle() {
    console.log("Battle started.");
    arenaFight(1); // Start the first round of battle
}

// Gather selected superheroes for battle
function gatherSuperHeroesToBattle() {
   return heroes
}

// Gather villains for battle (assumed to be setArenaVillains function)
function gatherVillainsToBattle() {
    const villains = setArenaVillains();
    return villains;
}

// Handle arena fights
function arenaFights() {
    const fightButton = document.getElementById('fight-button');
    fightButton.addEventListener('click', () => {
        arenaFight(1);
    });
}

// Conduct a single round of arena fight
function arenaFight(round) {
    console.log(`Arena fight round ${round} started.`);
    
    const heroes = gatherSuperHeroesToBattle();
    const villains = gatherVillainsToBattle();

  

    // Simulate fights between each hero and villain
    for (let i = 0; i < heroes.length; i++) {
        const hero = heroes[i];
        const villain = villains[i];
        fight(hero, villain);
    }

    // Calculate and display winners after all fights
    calculateWinners();
}

// Simulate a fight between a hero and a villain
function fight(hero, villain) {
    const heroAttackElement = hero.querySelector('.attackValue');
    const heroDefenseElement = hero.querySelector('.defenseValue');
    const villainAttackElement = villain.querySelector('.attackValue');
    const villainDefenseElement = villain.querySelector('.defenseValue');

    // Convert values to numbers (assuming they are stored as text in DOM)
    const heroAttack = parseFloat(heroAttackElement.innerText);
    const heroDefense = parseFloat(heroDefenseElement.innerText);
    const villainAttack = parseFloat(villainAttackElement.innerText);
    const villainDefense = parseFloat(villainDefenseElement.innerText);

    // Compare attack and defense values to determine the winner
    let winner = null;

    // Hero wins if their attack is greater than villain's defense
    if (heroAttack > villainDefense) {
        winner = hero;
    } 

    else if (villainAttack > heroDefense) {
        winner = villain;
    } 

    else {
        winner = null; 
    }

    // Log the result of the fight
    if (winner) {
        console.log(`${winner.id} wins the fight against ${hero.id}`);
    } else {
        console.log(`It's a draw between ${hero.id} and ${villain.id}`);
    }

    // Return the winner (or null if there's no clear winner)
    return winner;
}

// Calculate and display winners of the battle
function calculateWinners() {
    console.log("Calculating winners.");
    // Example: Determine and display the winners based on battle results
}

// Mark heroes as defeated
function markAsDefeated(heroes) {
    heroes.forEach(hero => {
        console.log(`${hero.name} marked as defeated.`);
        hero.classList.add('defeated');
    });
}

// Event listener for DOM content loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize battle section and set up event handling
    initBattleSection();
    arenaFights();
});
