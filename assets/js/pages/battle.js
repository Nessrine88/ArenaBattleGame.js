

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
function initBattleSection() {
    // Set up initial UI elements or states for the battle section
    console.log("Battle section initialized.");

    // For example, you might want to load heroes and villains into the battle arena
    gatherSuperHeroesToBattle();
    gatherVillainsToBattle();
}

function startBattle() {
    console.log("Battle started.");

    // Initialize the first round of battle
    arenaFight(1);
}

function gatherSuperHeroesToBattle() {
    // Example: Retrieve selected heroes from a selection list or state
    const heroes = superHeroes;
    console.log("Superheroes gathered for battle:", heroes);
}
function gatherVillainsToBattle() {
    setArenaVillains();
    console.log(setArenaVillains());
    
}



document.addEventListener('DOMContentLoaded', () => {
    selection()
    initBattleSection() 
});
