
document.addEventListener('keydown', (evt) => {//закрытие по кнопке ESC
  if (evt.key === 'Escape') {
    evt.preventDefault();
    popupElement.classList.add('hidden');
    document.querySelector('body').classList.remove('modal-open');//убираем скролл при закрытии
    document.querySelector('.social__comment-count').classList.add('hidden');//прячем комменты при закрытии
    document.querySelector('comments-loader').classList.add('hidden');
  }
});

const onCloseButton = (evt) => {//закрытие по кнопке Close X
  if (evt.target.nodeName === 'big-picture__cancel') {
    evt.preventDefault();
    popupElement.classList.add('hidden');
    document.querySelector('body').classList.remove('modal-open');//убираем скролл при закрытии
    document.querySelector('.social__comment-count').classList.add('hidden');//прячем комменты при закрытии
    document.querySelector('comments-loader').classList.add('hidden');
  }
}
