
/* your functions */



function setArenaVillains() {
    const heroesArray = heroes();
    const battleCards = getRandomHeroes(heroesArray);
    const villains = battleCards.slice(0, 5);
    render_heroData('#villains', villains);
}

function getDraftedHeroesStats() {
    // Get DOM elements
    const progressBar = document.getElementById('progress-bar');
    const costProgress = document.getElementById('cost-progress');
    const priorityProgress = document.getElementById('priority-progress');

    const costProgressCount = document.getElementById('cost-progress-count');
    const priorityProgressCount = document.getElementById('priority-progress-count');
    const selectedCardsCount = document.getElementById('total-amount');

    console.log(superHeroes);

    let totalCostValue = 0;
    let totalPriorityValue = 0;

    // Calculate total cost and priority from the selected heroes
    superHeroes.forEach(hero => {
        const costElement = hero.querySelector('.hero-cost');
        const priorityElement = hero.querySelector('.priority');

        if (costElement) {
            totalCostValue += parseFloat(costElement.innerText) || 0;
        }
        if (priorityElement) {
            totalPriorityValue += parseFloat(priorityElement.innerText) || 0;
        }
    });

    // Compute progress percentages
    progressBar.style.width = (superHeroes.length / getConfigAmount() * 100) + '%';
    costProgress.style.width = (totalCostValue / getConfigTotalCost() * 100) + '%';
    priorityProgress.style.width = (totalPriorityValue / getConfigTotalPriority() * 100) + '%';

    // Update progress count elements
    costProgressCount.innerText = `${totalCostValue}/${getConfigTotalCost()}`;
    priorityProgressCount.innerText = `${totalPriorityValue}/${getConfigTotalPriority()}`;
    selectedCardsCount.innerText = `${superHeroes.length}/${getConfigAmount()}`;
}


document.addEventListener('DOMContentLoaded',()=> {
setArenaVillains();
getDraftedHeroesStats() 
})