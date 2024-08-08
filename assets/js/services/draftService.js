// let _draftedHeroes = [];
// let _alignment = "good";

// const _arena = {
//     superHeroes: [],
//     villains: []
// }

// function getArenaSuperHeroes(){
//     return _arena.superHeroes;
// }

// function getArenaVillains(){
//     return _arena.villains;
// }

// function initDraft(){

// }

// function resetDraftedHeroes(){

// }

// function setAligment(alignment){
//     if (["good", "evil"].includes(alignment)) {
//         _alignment = alignment;
//     } else {
//         console.error("Invalid alignment");
//     }
// }

// /* goal: stats displayed with progress bars on page */
// function getDraftedHeroesStats(){
    

// }

// function getRandomDraftHeroes(){
    

// }

// function hasDraftedHero(id){
    
// }

// function addDraftedHero( id) {
     
// }

// function removeDraftedHero(id) {
    
// }

// function setArenaSuperHeroes() {
    
// }

// function setArenaVillains() {
    
// }


/* your functions */


function setArenaSuperHeroes() {
    let superHeroes = []
    const arenaSuperHeroes = document.querySelectorAll('.selected')
    arenaSuperHeroes.forEach(hero => {
        superHeroes.push(hero)
    });
    return superHeroes
}

function setArenaVillains() {
    
}


function getDraftedHeroesStats() {
    const progressBar = document.getElementById('progress-bar');
    const costProgress = document.getElementById('cost-progress');
    const priorityProgress = document.getElementById('priority-progress');
    const costProgressCount = document.getElementById('cost-progress-count');
    const priorityProgressCount = document.getElementById('priority-progress-count');
    const selectedCardsCount = document.getElementById('total-amount');
    

    progressBar.style.width = (selectedCards.length / _configSettings.amount * 100) + '%';
    costProgress.style.width = (totalCost / _configSettings.totalCost * 100) + '%';
    priorityProgress.style.width = (totalPriority / _configSettings.totalPriority * 100) + '%';

    costProgressCount.innerText = `${totalCost}/${_configSettings.totalCost}`;
    priorityProgressCount.innerText = `${totalPriority}/${_configSettings.totalPriority}`;
    selectedCardsCount.innerText = `${selectedCards.length}/${_configSettings.amount}`;
}

