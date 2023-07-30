import { openPopup } from './popup.js';
import {createComments} from './data.js';

const thumbnailsCopyTemplate = document.querySelector('#picture').content;//шаблон для миниатюры
const thumbnailsList = document.querySelector('.pictures');
const addThumbnails = (thumbnails) => {
  const thumbnailsListFragment = document.createDocumentFragment();//создем отдельный фрагмент
  thumbnails.forEach(({url, description, likes, comments}) => {
    const thumbnailsTemplate = thumbnailsCopyTemplate.cloneNode(true);//глубокое клонирование
    thumbnailsTemplate.querySelector('.picture__img').src = url;
    thumbnailsTemplate.querySelector('.picture__img').alt = description;
    thumbnailsTemplate.querySelector('.picture__likes').textContent = likes;
    thumbnailsTemplate.querySelector('.picture__comments').textContent = comments.length;
    thumbnailsListFragment.append(thumbnailsTemplate);//запихиваем фрагмент в шаблон
    thumbnailsTemplate.addEventListener('click', () => {//обработчик события при клике на миниатюру
      document.querySelector('body').classList.add('modal-open');//не прокручивался при скролле
      document.querySelector('.social__comment-count').classList.add('hidden');//прячем блоки social comments
      document.querySelector('comments-loader').classList.add('hidden');//прячем загрузку новых комментариев
      openPopup();
    });
  });
  thumbnailsList.append(thumbnailsListFragment);
};

//создаем комментарии для "popup"
const commentsList = document.querySelector('.social__comments');
const commentsElement = commentsList.querySelector ('.social_comment');
const comments = createComments(5);//вызываем массив комментариев и ограничиваем на 5
const commentsListFragment = document.createDocumentFragment();
comments.forEach (({avatar, name, message}) => {
  const comment = commentsElement.cloneNode (true);
  comment.querySelector('.social__picture').src = avatar;
  comment.querySelector('.social__picture').alt = name;
  comment.querySelector('.social__text').text = message;
  comments.append(commentsListFragment);
});
commentsListFragment.append(commentsElement);

const openMore = document.querySelector('.social__comments-loader');//находим кнопку загрузить еще
openMore.addEventListener('click',() => { //обработчик на кнопку загрузить еще
  document.querySelector('.social__comment-count').classList.remove('hidden');//открываем блоки social comments
  document.querySelector('comments-loader').classList.remove('hidden');//открываем загрузку новых комментариев
  comments();//показываем по 5 комментариев
});

export {addThumbnails};
