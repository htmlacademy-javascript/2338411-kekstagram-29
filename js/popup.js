import { createCommentforPhoto } from './data.js';//импорт social comment

const popupElement = document.querySelector('.big-picture');//ищем полноразмерное фото
popupElement.classList.remove('hidden');
const openPopup = (popup) => {
  const popupListFragment = document.createDocumentFragment ();//попап в фрагмент
  popup.forEach (({url, likes, comments, description}) => {
    popup.querySelector('.big-picture__img').src = url;
    popup.querySelector('.likes_count').textContent = likes;
    popup.querySelector('.comments-count').textContent = comments.length;
    popup.querySelector('.social_caption').textContent = description;
    createCommentforPhoto(comments);//вызываем функцию для social comments
    popup.append(popupListFragment);
  });
  popupListFragment.append(popupElement);
};

export {openPopup};
