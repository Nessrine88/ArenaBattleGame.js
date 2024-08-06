import _heroData from "../data/heroes.js";

document.addEventListener('DOMContentLoaded', () => {
    render_heroData('#heroes-list', _heroData);
    render_heroData('.draft-heroes-list', _heroData);
});

function render_heroData(selector, _heroData) {
    const container = document.querySelector(selector);
    
    if (!container) {
        console.error(`No element found with selector: ${selector}`);
        return;
    }

    container.innerHTML = '';

    _heroData.forEach(hero => {
        const heroItemHtml = renderHeroItem(hero);
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = heroItemHtml;
        renderHero(container, tempDiv.firstElementChild);
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
                <div>
                    <img src="https://www.freeiconspng.com/thumbs/check-mark-png/checkmark-png-line-29.png" />
                </div>
                <div>${calculateAttackValue(hero)} / ${calculateDefenseValue(hero)}</div>
            </div>
        </div>
    `;
}

function calculateCost(hero) {
    const defenseValue = calculateDefenseValue(hero);
    const attackValue = calculateAttackValue(hero);
    const priorityValue = calculatePriority(hero);
    return Math.ceil(defenseValue + attackValue + priorityValue);
}

function calculateDefenseValue(hero) {
    return Math.ceil((hero.powerstats.intelligence + hero.powerstats.durability + hero.powerstats.speed) / 30);
}

function calculateAttackValue(hero) {
    return Math.ceil((hero.powerstats.strength + hero.powerstats.combat + hero.powerstats.power) / 30);
}

function calculatePriority(hero) {
    const height = hero.appearance.height[1] ? parseInt(hero.appearance.height[1]) : 0;
    const weight = hero.appearance.weight[1] ? parseInt(hero.appearance.weight[1]) : 0;
    return Math.ceil((height + weight) / 50);
}
