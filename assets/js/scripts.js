// All recipes cards on the page
const cards = document.querySelectorAll('div.card');
// Modal Overlay
const modalOverlay = document.querySelector('div.modal-overlay');
// Modal Element
const modal = document.querySelector('div.modal');
// Close Modal Button
const closeModal = document.querySelector('.close-modal');

cards.forEach(card => {  
  card.addEventListener('click', () => {
    modal.querySelector('.card__image').src = card.querySelector('.card__image').src;
    modal.querySelector('.card__image').alt = card.querySelector('.card__image').alt;
    modal.querySelector('.card__title').innerHTML = card.querySelector('.card__title').innerHTML;
    modal.querySelector('.card__author').innerHTML = card.querySelector('.card__author').innerHTML;

    modalOverlay.classList.toggle('active');
  })
}); 

closeModal.addEventListener('click', () => {
  modalOverlay.classList.toggle('active');
  
  modal.querySelector('.card__image').src = '';
  modal.querySelector('.card__image').alt = '';
  modal.querySelector('.card__title').innerHTML = '';
  modal.querySelector('.card__author').innerHTML = '';
})