let heroesArray = heroes();

document.addEventListener('DOMContentLoaded', () => {
    render_heroData('#heroes-list', heroesArray, 'main-hero-class');
    render_heroData('.draft-heroes-list', heroesArray, 'draft-card');
});

function render_heroData(selector, heroesArray, additionalClass) {
    const container = document.querySelector(selector);

    container.innerHTML = '';
    const selectionHeroes = heroesArray.slice(0, getConfigSelection());
    selectionHeroes.forEach(hero => {
        const heroItem = renderHeroItem(hero);
        const heroDiv = document.createElement('div');
        heroDiv.innerHTML = heroItem;
        const heroElement = heroDiv.firstElementChild;
        if (additionalClass) heroElement.classList.add(additionalClass);
        renderHero(container, heroDiv.firstElementChild);
    });
}

function renderHero(container, hero) {
    container.appendChild(hero);
}

function renderHeroItem(hero) {
    return `
        <div class="hero-card">
            <div class="header">
                <div class="hero-name">${hero.name}</div>
                <div class="hero-cost">${calculateCost(hero)}</div>
            </div>
            <div class="hero-image">
                <img src="${hero.image.url}" alt="${hero.name}">
            </div>
            <div class ="win-count" id="rank">
            </div>
            <div class="hero-details">
                <div>${hero.biography.alignment} ${hero.appearance.race}</div>
            </div>
            <div class="hero-stats">
                <div class="stats-item">
                    <div class="stats-label">Intelligence:</div>
                    <div class="stats-value">${hero.powerstats.intelligence}</div>
                </div>
                <div class="stats-item">
                    <div class="stats-label">Strength:</div>
                    <div class="stats-value">${hero.powerstats.strength}</div>
                </div>
                <div class="stats-item">
                    <div class="stats-label">Speed:</div>
                    <div class="stats-value">${hero.powerstats.speed}</div>
                </div>
                <div class="stats-item">
                    <div class="stats-label">Durability:</div>
                    <div class="stats-value">${hero.powerstats.durability}</div>
                </div>
                <div class="stats-item">
                    <div class="stats-label">Power:</div>
                    <div class="stats-value">${hero.powerstats.power}</div>
                </div>
                <div class="stats-item">
                    <div class="stats-label">Combat:</div>
                    <div class="stats-value">${hero.powerstats.combat}</div>
                </div>
            </div>
            <div class="final-stats">
                <div class="priority">${calculatePriority(hero)}</div>
                <div class="checkIcon"></div>
                <div style="display:flex">
                    <div class="attackValue">${calculateAttack(hero)}</div> / 
                    <div class="defenseValue">${calculateDefense(hero)}</div>
                </div>
            </div>
        </div>
    `;
}

getRandomHeroes(heroesArray);
