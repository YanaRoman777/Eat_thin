const questionsButton = document.querySelectorAll('.questions__button');
const questionsParagraph = document.querySelector('.questions__paragraph');
const formAdd = document.querySelector('#form-add');
const formAddfooter = document.querySelector('#form-add-footer');
const buttonElement = formAdd.querySelector('.form__submit');
const buttonElementfooter  = formAddfooter.querySelector('.form__submit');

// функция открытия/закрытия ответа
function activeParagraph () {
  questionsParagraph.classList.toggle('questions__paragraph-active');
}
Array.from(document.querySelectorAll(".questions__item")).forEach(e=>{e.addEventListener("click",(function(){
  this.classList.toggle("questions__item-active");
  let e=this.querySelector(".questions__paragraph");
  e.style.maxHeight?e.style.maxHeight=null:e.style.maxHeight=e.scrollHeight+"px"}))});
// функция очистки формы 
function resetFormAdd() {
  formAdd.reset();
}
function resetFormAddfooter() {
  formAddfooter.reset();
}

// submit
const submitForm = evt => {
  evt.preventDefault();
  buttonElement.setAttribute('disabled', true);
  buttonElement.classList.add('.form__submit_inactive');
  formAdd.reset();
}

const submitFormFooter = evt => {
  evt.preventDefault();
  buttonElementfooter.setAttribute('disabled', true);
  buttonElementfooter.classList.add('.form__submit_inactive');
  formAddfooter.reset();
  openPopup();
}
formAdd.addEventListener('submit', submitForm);
formAddfooter.addEventListener('submit', submitFormFooter);


// Открытие попап 
const popup = document.querySelector('.popup');
const closeButton = popup.querySelector('.popup__close');

function openPopup () {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupOnEsc);
  popup.addEventListener('click', closePopupOnOverlay);
};

// Закрытие попапов
function closePopup() {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupOnEsc);
  popup.removeEventListener('click', closePopupOnOverlay);
}

// закрытие попап кликом на оверлей
function closePopupOnOverlay(evt) {
  if (evt.target.classList.contains('popup_opened')) {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  }
}

// закрытие попап нажатием на esc
function closePopupOnEsc(evt) {
  if (evt.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  }
}

// закрытие попапа на x
closeButton.addEventListener('click', () => closePopup());
