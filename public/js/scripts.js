const descriptionGroups = document.querySelectorAll('.description-group');
descriptionGroups.forEach( descriptionGroup => {  
  console.log(descriptionGroup)

  const hideShowDescriptionContent = descriptionGroup.querySelector('.description-group-header span');

  // When clicked hide or show the content
  hideShowDescriptionContent.addEventListener('click', () => {

    const descripitionContent = descriptionGroup.querySelector('.description-group-content');
    descripitionContent.classList.toggle('active');

    hideShowDescriptionContent.innerHTML = descripitionContent.classList.contains('active') ?
    'Esconder' : 'Mostrar';

  });

});