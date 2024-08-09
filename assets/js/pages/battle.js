// Arrays to store attack and defense values
let attackHeroesArray = [];
let defenseHeroesArray = [];
let attackVillainsArray = [];
let defenseVillainsArray = [];

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
    attackHeroesArray = [];
    defenseHeroesArray = [];
    
    superHeroes.forEach(hero => {
        const heroAttackElement = hero.querySelector('.attackValue');
        const heroDefenseElement = hero.querySelector('.defenseValue');
        const heroAttack = parseFloat(heroAttackElement.innerText);
        const heroDefense = parseFloat(heroDefenseElement.innerText);

        // Push values into arrays
        attackHeroesArray.push(heroAttack);
        defenseHeroesArray.push(heroDefense);
    });

    return superHeroes;
}

// Gather villains for battle
function gatherVillainsToBattle() {
    attackVillainsArray = [];
    defenseVillainsArray = [];
    
    const villains = setArenaVillains();
   
    villains.forEach(villain => {
        const villainAttack = calculateAttack(villain);
        const villainDefense = calculateDefense(villain);

        attackVillainsArray.push(villainAttack);
        defenseVillainsArray.push(villainDefense);
    });

    return villains;
}

// Handle arena fights
function arenaFights() {
    const fightButton = document.getElementById('fight-button');
    fightButton.addEventListener('click', () => {
        arenaFight(); // Start the fight when button is clicked
    });
}

// Conduct a single round of arena fight
function arenaFight() {  
    gatherSuperHeroesToBattle();
    gatherVillainsToBattle();

    let heroWins = 0;
    let villainWins = 0;

    // Check if both teams have the same number of participants
    if (attackHeroesArray.length !== attackVillainsArray.length) {
        alert('The number of heroes and villains must be the same for fair battle!');
        return;
    }

    // Compare each hero with each villain
    for (let i = 0; i < attackHeroesArray.length; i++) {
        const heroAttack = attackHeroesArray[i];
        const heroDefense = defenseHeroesArray[i];

        for (let j = 0; j < attackVillainsArray.length; j++) {
            const villainAttack = attackVillainsArray[j];
            const villainDefense = defenseVillainsArray[j];

            if (heroAttack > villainDefense) {
                heroWins++;
                console.log(`Hero ${i + 1} defeats Villain ${j + 1}`);
            } else if (villainAttack > heroDefense) {
                villainWins++;
                console.log(`Villain ${j + 1} defeats Hero ${i + 1}`);
            }
        }
    }

    // Determine and display the battle result
    if (heroWins > villainWins) {
        alert('Heroes win!');
    } else if (villainWins > heroWins) {
        alert('Villains win!');
    } else {
        alert('It\'s a draw! Both teams defeated each other equally.');
    }
}

// Event listener for DOM content loaded
document.addEventListener('DOMContentLoaded', () => {
    initBattleSection();
    arenaFights();
});
