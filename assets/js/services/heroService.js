import _heroData from "../data/heroes.js";

function getHeroes(){
    
   
}

function getGoodHeroes(){
    
}

function getBadHeroes(){
    
}

function getHeroesBasedOnAlignment(alignment, heroes){
    
}

function isPartOfAligment(hero, alignment){
    
}


function calculatePriority(hero) {
    const height = hero.appearance.height
    const weight = hero.appearance.weight;
    return Math.ceil((height + weight) / 50);
}

function calculateAttack(hero) {
    return Math.ceil((hero.powerstats.strength + hero.powerstats.combat + hero.powerstats.power) / 30);
    
}

function calculateDefense(hero) {
    return Math.ceil((hero.powerstats.intelligence + hero.powerstats.durability + hero.powerstats.speed) / 30);
    
}

function calculateCost(hero) {
    const defenseValue = calculateDefense(hero);
    const attackValue = calculateAttack(hero);
    const priorityValue = calculatePriority(hero);
    return Math.ceil(defenseValue + attackValue + priorityValue);
}


function getfilteredHeroes() {}
 
function getRaces(){
    
}

function getRandomHeroes(heroes, amount) {

}

function lookupHeroes(ids) {
    
}

function lookupHero(id){
    
    
}

/* your functions */