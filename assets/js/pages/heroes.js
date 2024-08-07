/*

function initHeroesSection() {}

function filterHeroes(e) {}
*/

function initHeroesSection() {
  const input = document.getElementById('input');
  const filterButton = document.getElementById('filter-button');
  return { input, filterButton };
}

document.addEventListener('DOMContentLoaded', () => {

  const { input, filterButton } = initHeroesSection();
  function filterHeroes(e) {
     e.preventDefault();
    
    const filter = input.value.toUpperCase();
    const cards = document.querySelectorAll('.hero-card');

    cards.forEach(card => {
      const textValue = card.textContent;
      if (textValue.toUpperCase().indexOf(filter) > -1) {
        card.style.display = "";
      } else {
        card.style.display = "none";
      }
    });
  }

  filterButton.addEventListener('click', filterHeroes);


});
