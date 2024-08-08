
/* your functions */



function setArenaVillains() {
    const heroesArray = heroes();
    const battleCards = getRandomHeroes(heroesArray);
    const villains = battleCards.slice(0, 5);
    render_heroData('#villains', villains);
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


document.addEventListener('DOMContentLoaded',()=> {
setArenaVillains();
})