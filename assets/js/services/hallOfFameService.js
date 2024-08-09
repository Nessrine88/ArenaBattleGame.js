// let _hallOfFame = [];

// function addToHallOfFame(hero) {
        
// }


// function addNewHeroToHallOfFame(hero){

// }

// function getHeroesFromHallOfFame(){
    
// }

// function getHallOfFame(){
//     return _hallOfFame;
// }


// /* your functions */


// Helper function to lookup a hero by name
function lookupHero(name, heroes) {
    const foundHero = heroes.find(hero => hero.name === name);
    console.log(`Looking up hero ${name}:`, foundHero);
    return foundHero;
}


function initializeHallOfFame() {
    const savedHallOfFame = localStorage.getItem('winners');
    let topHeroes = [];

    if (savedHallOfFame) {
        _hallOfFame = JSON.parse(savedHallOfFame);
        const topHeroesSliced = _hallOfFame.slice(0,getConfigHallOfFame())
        console.log('winners', topHeroesSliced);

        // Assuming heroes() returns a list of all possible heroes
        topHeroesSliced.forEach(element => {
            const hero = lookupHero(element.name, heroes());
            if (hero) {
                topHeroes.push(hero);
            }
        });

        console.log(topHeroes);
        return topHeroes;
    }
}

// Initialize _hallOfFame when the script runs
document.addEventListener('DOMContentLoaded', () => {
    initializeHallOfFame();
});

