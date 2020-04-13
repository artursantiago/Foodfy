// Current page path name
const currentPage = location.pathname;

/* Menu active */

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


/* Open recipe in admin mode or not */
const cards = document.querySelectorAll('.card');

if (cards) {
  cards.forEach( card => {
    if (currentPage.includes('admin')) {
        card.setAttribute('href', `/admin${card.getAttribute('href')}`);
      }
  });
}

// Confirm form delete
const formDelete = document.querySelector('.form-delete');

if (formDelete) {
  formDelete.addEventListener('submit', event => {
    if (!confirm('Deseja deletar a receita?')) {
      event.preventDefault();
    }
  });
}

// Dinamic inredients/prepartions form fields
function addNewField (parentNodeClass, fieldContainerClass, lastChildNode) {
  const parentNode = document.querySelector(`.${parentNodeClass}`);
  const fieldContainer = document.querySelectorAll(`.${fieldContainerClass}`);
  console.log(fieldContainer);
  
  const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true);

  if (newField.children[0].value == "") {
    return false;
  }

  newField.children[0].value = "";
  parentNode.insertBefore(newField, lastChildNode);
}

const newIngredientBtn = document.querySelector('.new-ingredient');
newIngredientBtn.addEventListener('click', () => {
    addNewField('ingredients', 'ingredient', newIngredientBtn)
})

const newStepBtn = document.querySelector('.new-step');
newStepBtn.addEventListener('click', () => {
    addNewField('preparation', 'step', newStepBtn)
})