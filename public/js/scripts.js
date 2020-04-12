// Current page path name
const currentPage = location.pathname;

/* Open or close the recipe details */
const descriptionGroups = document.querySelectorAll('.description-group');

if (descriptionGroups) {
  descriptionGroups.forEach(descriptionGroup => {
    const hideShowDescriptionContent = descriptionGroup.querySelector('.description-group-header span');

    // When clicked hide or show the content
    hideShowDescriptionContent.addEventListener('click', () => {
      const descripitionContent = descriptionGroup.querySelector('.description-group-content');
      descripitionContent.classList.toggle('active');

      hideShowDescriptionContent.innerHTML = descripitionContent.classList.contains('active') ?
        'Esconder' : 'Mostrar';
    });
  });
}

/* Menu active */

/* Open recipe in admin mode or not */
const cards = document.querySelectorAll('.card');

if (cards) {
  cards.forEach(card => {
    if (currentPage.includes('admin') && !card.getAttribute('href').includes('admin')) {
      // element.property is different than element.getAttribute(property)
      card.href = card.getAttribute('href');
    }
  });
}