/*

function initHeroesSection() {}

function filterHeroes(e) {}
*/

document.addEventListener('DOMContentLoaded', () => {
  // Example heroes data
  

  const heroesToFilter = heroes();

  function initHeroesSection() {
    const input = document.getElementById('input');
    const filterButton = document.getElementById('filter-button');
    const raceDropdown = document.getElementById("race-dropdown");
    const attributeDropdown = document.getElementById("attribute-dropdown");
    const sortDropdown = document.getElementById("sort-dropdown");
    return { input, filterButton, raceDropdown, attributeDropdown, sortDropdown };
  }

  function getAttributeValue(hero, attributePath) {
    const keys = attributePath.split(".");
    let value = hero;
    for (let key of keys) {
      value = value[key];
      if (value === undefined) break;
    }
    return value;
  }



 
  function filterHeroes(e) {
    e.preventDefault();

    const { input, raceDropdown, attributeDropdown, sortDropdown } = initHeroesSection();
    const filter = input.value.trim().toUpperCase();
    const attribute = attributeDropdown.value;
    const sortOrder = sortDropdown.value;
    const cards = document.querySelectorAll('.hero-card');

    // Filter the hero cards based on input
    const filteredHeroes = heroesToFilter.filter(hero =>
      hero.name.toUpperCase().includes(filter)
    );

    // Sort the filtered heroes by the selected attribute
    const sortedHeroes = heroesToFilter.slice().sort((a, b) => {
      const valueA = getAttributeValue(a, attribute);
      const valueB = getAttributeValue(b, attribute);

      // Custom sorting for 'cost' attribute
      if (attribute === 'cost') {
        return sortOrder === "asc"
          ? calculateCost(a) - calculateCost(b)
          : calculateCost(b) - calculateCost(a);
      }
      // Custom sorting for 'priority' attribute
      if (attribute === 'priority') {
        return sortOrder === "asc"
          ? calculatePriority(a) - calculatePriority(b)
          : calculatePriority(b) - calculatePriority(a);
      }

      // Handling string and number comparisons
      if (typeof valueA === 'string' && typeof valueB === 'string') {
        return sortOrder === "asc"
          ? valueA.localeCompare(valueB)
          : valueB.localeCompare(valueA);
      } else if (typeof valueA === 'number' && typeof valueB === 'number') {
        return sortOrder === "asc"
          ? valueA - valueB
          : valueB - valueA;
      }
    });

    // Render the sorted heroes
    render_heroData('#heroes-list', sortedHeroes);
    console.log( render_heroData('#heroes-list', sortedHeroes))
   
  }

  const { filterButton } = initHeroesSection();
  
  filterButton.addEventListener('click', filterHeroes);

  // Initial render
  render_heroData('#heroes-list', heroesToFilter);


});
