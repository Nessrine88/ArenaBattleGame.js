

function getHeroes(heroes){   
return heroes
}

function getGoodHeroes(heroes){
  return heroes.filter(hero => hero.biography.alignment === "good");
}

function getBadHeroes(heroes){
    return heroes.filter(hero => hero.biography.alignment === "bad")
}

function getHeroesBasedOnAlignment(alignment, heroes){
  return heroes.filter(hero => hero.biography.alignment === alignment);
}

function isPartOfAligment(hero, alignment){
  return hero.biography.alignment === alignment;
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

function getfilteredHeroes() {
  
}
 
function getRaces(){
  let races = heroes.map(hero => hero.appearance.race);
  return [...new Set(races)];
}

function getRandomHeroes(heroes, amount) {
  const shuffled = heroes.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, amount);
}

function lookupHeroes(ids) {
  return ids.map(id => heroes.find(hero => hero.id === id));
}

function lookupHero(id){
  return heroes.find(hero => hero.id === id); 
}

/* your functions */

