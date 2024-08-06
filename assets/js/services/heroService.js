
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
  return Math.ceil((hero.appearance.weight + hero.appearance.height)/ 50)      
  }
  
  function calculateAttack(hero) {
      return Math.ceil((hero.powerstats.strength +hero.powerstats.combat +hero.powerstats.power) /30);
  }
  
  function calculateDefense(hero) {
      return Math.ceil((hero.powerstats.intelligence +hero.powerstats.durability +hero.powerstats.speed) /30);   
  }
  
  function calculateCost(hero) {
      return  Math.ceil(calculateDefense(hero) + calculateAttack(hero) + calculatePriority(hero))
  }

function getfilteredHeroes() {}
 
function getRaces(){
    
}

function getRandomHeroes(heroes, amount) {
  const shuffled = heroes.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, amount);
}

function lookupHeroes(ids) {
    
}

function lookupHero(id){
    
    
}

/* your functions */