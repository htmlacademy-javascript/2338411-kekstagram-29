//создаем комментарии для "popup"
const commentCopyTemplate = document.querySelector('.social__comment').content;
const commentsList = document.querySelector('.social__comments');
const renderComments = (comments) => {
  const commentsListFragment = document.createDocumentFragment();
  comments.forEach(({avatar, name, message}) => {
    const commentsTemplate = commentCopyTemplate.cloneNode(true);
    renderComments.querySelector('.social__picture').src = avatar;
    renderComments.querySelector('.social__picture').alt = name;
    renderComments.querySelector('.social__text').text = message;
    commentsListFragment.append(commentsTemplate);
  });
  commentsList.append(commentsListFragment);
};

// const openMore = document.querySelector('.social__comments-loader');//находим кнопку загрузить еще
// openMore.addEventListener('click',(evt) => { //обработчик на кнопку загрузить еще
//   evt.preventDefault();
//   document.querySelector('.social__comment-count').classList.remove('hidden');//открываем блоки social comments
//   document.querySelector('.comments-loader').classList.remove('hidden');//открываем загрузку новых комментариев
//   renderComments(comments);//показываем по 5 комментариев
// });

const popupElement = document.querySelector('.big-picture');
const openPopup = ({url, likes, comments, description}) => {
  popupElement.classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');//не прокручивался при скролле
  //document.querySelector('.social__comments').classList.add('hidden');//прячем блоки social comments
  //document.querySelector('.comments-loader').classList.add('hidden');//прячем загрузку новых комментариев
  popupElement.querySelector('.big-picture__img img').src = url;
  popupElement.querySelector('.likes-count').textContent = likes;
  popupElement.querySelector('.comments-count').textContent = comments.length;
  popupElement.querySelector('.social__caption').textContent = description;
  renderComments(comments);//вызываем функцию для social comments
};

export { openPopup };
export {popupElement};
