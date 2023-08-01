import { openPopup } from './popup.js';

const thumbnailsCopyTemplate = document.querySelector('#picture').content.querySelector('.picture');//шаблон для миниатюры
const thumbnailsList = document.querySelector('.pictures');
const addThumbnails = (thumbnails) => {
  const thumbnailsListFragment = document.createDocumentFragment();//создем отдельный фрагмент
  thumbnails.forEach(({url, description, likes, comments}) => {
    const thumbnailsTemplate = thumbnailsCopyTemplate.cloneNode(true);//глубокое клонирование
    thumbnailsTemplate.querySelector('.picture__img').src = url;
    thumbnailsTemplate.querySelector('.picture__img').alt = description;
    thumbnailsTemplate.querySelector('.picture__likes').textContent = likes;
    thumbnailsTemplate.querySelector('.picture__comments').textContent = comments.length;
    thumbnailsTemplate.addEventListener('click', (evt) => {//обработчик события при клике на миниатюру
      evt.preventDefault();
      openPopup({url, likes, comments, description});
    });
    thumbnailsListFragment.append(thumbnailsTemplate);//запихиваем фрагмент в шаблон
  });
  thumbnailsList.append(thumbnailsListFragment);
};
export {addThumbnails};
