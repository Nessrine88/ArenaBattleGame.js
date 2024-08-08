
/* your functions */



function setArenaVillains() {
    // Fetch the list of all heroes (or villains, depending on your context)
    const heroesArray = heroes();

    // Get a random subset of heroes
    const battleCards = getRandomHeroes(heroesArray);

    // Select the first 5 villains
    const villains = battleCards.slice(0, 5);

    // Render the villains in the container
    render_heroData('#villains', villains); // Adjust the selector and use `#villains` instead of `#villainsContainer`
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
// Call the function to set arena villains
setArenaVillains();
})